/*
 * The shapes the particles take, computed once at load: a spiral galaxy, Earth
 * (land, ocean, air, with Palestine and Jordan traced from Natural Earth), a
 * desert of sandstone mesas, and the Moon's near side. Each particle gets a
 * place in every shape; the vertex shader blends between them.
 */
import { BufferAttribute, BufferGeometry, Color, MathUtils, Vector3 } from 'three'
import { HIGHLIGHT, LAND } from '../../data/earthMask'

const palette = {
	core: new Color('#ffc978'),
	inner: new Color('#ffe6c4'),
	mid: new Color('#b9b3ff'),
	outer: new Color('#5d6bff'),
	rim: new Color('#3b3fc9'),
	hydrogen: new Color('#ff6fb1'),
	young: new Color('#a9c8ff'),
}

interface Grid {
	west: number
	north: number
	step: number
	width: number
	height: number
	data: string
}

/** Reads a packed 2-bit lat/lon grid; outside the grid reads as 0. */
const decodeGrid = (grid: Grid) => {
	const binary = atob(grid.data)
	const bytes = new Uint8Array(binary.length)
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
	return (lat: number, lon: number) => {
		const row = Math.floor((grid.north - lat) / grid.step)
		const col = Math.floor((lon - grid.west) / grid.step)
		if (row < 0 || row >= grid.height || col < 0 || col >= grid.width) return 0
		const index = row * grid.width + col
		return (bytes[index >> 2] >> ((index & 3) * 2)) & 3
	}
}

/** Unit vector for a latitude/longitude; longitude 0 faces +z (the camera). */
const fromLatLon = (lat: number, lon: number, target: Vector3) => {
	const phi = MathUtils.degToRad(lat)
	const lambda = MathUtils.degToRad(lon)
	return target.set(
		Math.cos(phi) * Math.sin(lambda),
		Math.sin(phi),
		Math.cos(phi) * Math.cos(lambda)
	)
}

const randomLatLon = () => ({
	lat: MathUtils.radToDeg(Math.asin(Math.random() * 2 - 1)),
	lon: Math.random() * 360 - 180,
})

/**
 * The Moon's near side, as seen from Earth: approximate centres and radii (in
 * degrees) of the maria, the dark basalt plains, and of bright young craters.
 * Longitude 0 faces Earth; east (Crisium) is on the right.
 */
const MARIA = [
	[25, -60, 20],
	[5, -55, 15],
	[42, -45, 13],
	[33, -16, 15],
	[28, 17, 9],
	[8.5, 31, 10],
	[17, 59, 6],
	[-8, 51, 8],
	[-15, 35, 4.5],
	[-21, -17, 9],
	[-24, -39, 4.5],
	[13, 4, 4],
	[7, -31, 8],
	[-10, -23, 5],
	// Mare Frigoris: a thin band across the north.
	[56, -42, 6],
	[57, -24, 6],
	[57, -6, 6],
	[56, 12, 6],
	[55, 30, 5],
] as const
const CRATERS = [
	[-43.3, -11.2, 2, 0.25], // Tycho, whose rays cross the southern highlands
	[9.6, -20, 1.6, 0.15], // Copernicus
	[23.7, -47.4, 1.1, 0.22], // Aristarchus
	[8, -38, 1, 0.12], // Kepler
] as const
const [TYCHO_LAT, TYCHO_LON] = CRATERS[0]

/** Small seeded value noise, enough for a procedural landscape. */
function createNoise(seed = 7) {
	const hash = (x: number, z: number) => {
		const h = Math.sin(x * 127.1 + z * 311.7 + seed * 74.7) * 43758.5453
		return h - Math.floor(h)
	}
	const smooth = (t: number) => t * t * (3 - 2 * t)
	const noise = (x: number, z: number) => {
		const xi = Math.floor(x)
		const zi = Math.floor(z)
		const xf = smooth(x - xi)
		const zf = smooth(z - zi)
		const a = hash(xi, zi)
		const b = hash(xi + 1, zi)
		const c = hash(xi, zi + 1)
		const d = hash(xi + 1, zi + 1)
		return a + (b - a) * xf + (c - a) * zf + (a - b - c + d) * xf * zf
	}
	return (x: number, z: number, octaves = 4) => {
		let sum = 0
		let amplitude = 0.5
		let frequency = 1
		for (let i = 0; i < octaves; i++) {
			sum += amplitude * noise(x * frequency, z * frequency)
			amplitude *= 0.5
			frequency *= 2
		}
		return sum
	}
}

/**
 * Desert terrain: sand valleys with wind ripples, broken by sheer-sided
 * sandstone mesas. Baked once into a height grid; returns a fast sampler.
 */
function createTerrain() {
	const fbm = createNoise()
	const shape = (x: number, z: number) => {
		const dunes = 0.06 * fbm(x * 0.8, z * 0.8, 3) + 0.012 * Math.sin(x * 9 + z * 2)
		const massif = fbm(x * 0.32 + 4.1, z * 0.32 - 2.7, 4)
		const plateau = MathUtils.smoothstep(massif, 0.5, 0.56)
		const cap = 0.55 + 0.35 * fbm(x * 1.7, z * 1.7, 2)
		return dunes + plateau * cap - 0.45
	}

	const bounds = { x0: -13, x1: 13, z0: -9, z1: 3.2 }
	const columns = 520
	const rows = 230
	const grid = new Float32Array(columns * rows)
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			const x = bounds.x0 + (col / (columns - 1)) * (bounds.x1 - bounds.x0)
			const z = bounds.z0 + (row / (rows - 1)) * (bounds.z1 - bounds.z0)
			grid[row * columns + col] = shape(x, z)
		}
	}

	return (x: number, z: number) => {
		const u = MathUtils.clamp((x - bounds.x0) / (bounds.x1 - bounds.x0), 0, 1) * (columns - 1)
		const v = MathUtils.clamp((z - bounds.z0) / (bounds.z1 - bounds.z0), 0, 1) * (rows - 1)
		const c = Math.min(Math.floor(u), columns - 2)
		const r = Math.min(Math.floor(v), rows - 2)
		const fu = u - c
		const fv = v - r
		const i = r * columns + c
		const top = grid[i] + (grid[i + 1] - grid[i]) * fu
		const bottom = grid[i + columns] + (grid[i + columns + 1] - grid[i + columns]) * fu
		return top + (bottom - top) * fv
	}
}

/**
 * The Moon's brightness, baked once into a 2° latitude/longitude grid:
 * grey highlands, dark maria, bright craters and Tycho's rays. Returns a fast
 * sampler, like the desert's height grid.
 */
function createMoonAlbedo() {
	const noise = createNoise(23)
	const maria = MARIA.map(([lat, lon, radius]) => ({
		centre: fromLatLon(lat, lon, new Vector3()),
		radius: MathUtils.degToRad(radius),
	}))
	// A crater is a bright spot fading out to 2.5× its radius (as cosines, for dot products).
	const craters = CRATERS.map(([lat, lon, radius, gain]) => ({
		centre: fromLatLon(lat, lon, new Vector3()),
		outer: Math.cos(MathUtils.degToRad(radius * 2.5)),
		inner: Math.cos(MathUtils.degToRad(radius * 0.5)),
		gain,
	}))
	const tycho = fromLatLon(TYCHO_LAT, TYCHO_LON, new Vector3())
	const rayReach = Math.cos(MathUtils.degToRad(45))
	const v = new Vector3()

	const step = 2
	const columns = 360 / step + 1
	const rows = 180 / step + 1
	const grid = new Float32Array(columns * rows)
	for (let row = 0; row < rows; row++) {
		const lat = 90 - row * step
		for (let col = 0; col < columns; col++) {
			const lon = -180 + col * step
			fromLatLon(lat, lon, v)
			// Maria are irregular, soft-edged plains that run into each other, not
			// round spots: warp each one's edge with noise and blend it out wide.
			const warp = 0.75 + 0.5 * noise(lat * 0.12 - 3, lon * 0.12 + 5, 3)
			let mare = 0
			for (const m of maria) {
				const angle = Math.acos(MathUtils.clamp(v.dot(m.centre), -1, 1))
				mare = Math.max(mare, 1 - MathUtils.smoothstep(angle, m.radius * warp * 0.5, m.radius * warp * 1.15))
			}
			let albedo = MathUtils.lerp(0.82, 0.37, mare) * (0.86 + 0.28 * noise(lat * 0.09 + 9, lon * 0.09, 4))
			for (const c of craters) albedo += c.gain * MathUtils.smoothstep(v.dot(c.centre), c.outer, c.inner)
			const towardTycho = v.dot(tycho)
			if (towardTycho > rayReach) {
				const bearing = Math.atan2(lon - TYCHO_LON, lat - TYCHO_LAT)
				const ray = Math.pow(Math.abs(Math.sin(bearing * 7 + noise(bearing * 3, 1.7, 2) * 4)), 40)
				albedo += ray * 0.14 * ((towardTycho - rayReach) / (1 - rayReach))
			}
			grid[row * columns + col] = MathUtils.clamp(albedo, 0.15, 1.2)
		}
	}

	return (lat: number, lon: number) => {
		const u = (lon + 180) / step
		const w = (90 - lat) / step
		const c = Math.min(Math.floor(u), columns - 2)
		const r = Math.min(Math.floor(w), rows - 2)
		const fu = u - c
		const fw = w - r
		const i = r * columns + c
		const top = grid[i] + (grid[i + 1] - grid[i]) * fu
		const bottom = grid[i + columns] + (grid[i + columns + 1] - grid[i + columns]) * fu
		return top + (bottom - top) * fw
	}
}

/** Every particle's place in each scene, plus what the shader needs to colour it. */
export function buildParticles(count: number) {
	const galaxy = new Float32Array(count * 3)
	const galaxyColor = new Float32Array(count * 3)
	const earth = new Float32Array(count * 3)
	// Ground: position, and how much of the particle's light survives the edge fade.
	const ground = new Float32Array(count * 4)
	const seed = new Float32Array(count * 4)
	const surface = new Float32Array(count * 2)
	// The Moon: a point on its surface and how bright the ground is there.
	const moon = new Float32Array(count * 4)
	const moonAlbedo = createMoonAlbedo()

	const isLand = decodeGrid(LAND)
	const region = decodeGrid(HIGHLIGHT)
	const regionSouth = HIGHLIGHT.north - HIGHLIGHT.height * HIGHLIGHT.step
	const regionEast = HIGHLIGHT.west + HIGHLIGHT.width * HIGHLIGHT.step
	const color = new Color()
	const v = new Vector3()
	const scatter = () =>
		Math.pow(Math.random(), 2.2) * (Math.random() < 0.5 ? -1 : 1)

	const height = createTerrain()
	const sunlight = new Vector3(-0.55, 0.55, 0.62).normalize()
	const normal = new Vector3()
	const step = 0.03 // for slopes, by central differences

	for (let i = 0; i < count; i++) {
		const i2 = i * 2
		const i3 = i * 3
		const i4 = i * 4

		/* Galaxy */
		const branches = 6
		const radius = Math.random() * 1.5
		const t = radius / 1.5
		const branchAngle = (i / branches) * Math.PI * 2
		const spread = 0.9 * (0.35 + t * 0.45)
		galaxy[i3] = Math.cos(branchAngle) * radius + scatter() * spread
		galaxy[i3 + 1] =
			Math.random() * 0.1 + scatter() * spread * (0.25 + (1 - t) * 0.35)
		galaxy[i3 + 2] = Math.sin(branchAngle) * radius + scatter() * spread

		if (t < 0.15) color.copy(palette.core).lerp(palette.inner, t / 0.15)
		else if (t < 0.4) color.copy(palette.inner).lerp(palette.mid, (t - 0.15) / 0.25)
		else if (t < 0.8) color.copy(palette.mid).lerp(palette.outer, (t - 0.4) / 0.4)
		else color.copy(palette.outer).lerp(palette.rim, (t - 0.8) / 0.2)
		const roll = Math.random()
		if (t > 0.25 && roll < 0.035) color.lerp(palette.hydrogen, 0.85)
		else if (t > 0.2 && roll < 0.08) color.lerp(palette.young, 0.9)
		const intensity = 0.5 + (1 - t) * 0.5
		galaxyColor[i3] = color.r * intensity
		galaxyColor[i3 + 1] = color.g * intensity
		galaxyColor[i3 + 2] = color.b * intensity

		/* Earth */
		const role = Math.random()
		let kind: number
		if (role < 0.006) {
			// Dense, warm clusters over Palestine and Jordan. Palestine is much
			// smaller, so it gets a larger share to read as clearly.
			const country = Math.random() < 0.4 ? 1 : 2
			let point
			do
				point = {
					lat: regionSouth + Math.random() * (HIGHLIGHT.north - regionSouth),
					lon: HIGHLIGHT.west + Math.random() * (regionEast - HIGHLIGHT.west),
				}
			while (region(point.lat, point.lon) !== country)
			fromLatLon(point.lat, point.lon, v).multiplyScalar(1.001)
			kind = 2
		} else if (role < 0.58) {
			let point
			do point = randomLatLon()
			while (isLand(point.lat, point.lon) !== 1)
			fromLatLon(point.lat, point.lon, v).multiplyScalar(1 + Math.random() * 0.004)
			kind = 1
		} else if (role < 0.82) {
			let point
			do point = randomLatLon()
			while (isLand(point.lat, point.lon) === 1)
			fromLatLon(point.lat, point.lon, v)
			kind = 0
		} else if (role < 0.93) {
			v.randomDirection().multiplyScalar(1.012 + Math.pow(Math.random(), 2) * 0.05)
			kind = 3
		} else {
			// Loose dust becomes background stars around the planets.
			v.randomDirection().multiplyScalar(5 + Math.random() * 6)
			kind = 4
		}
		earth[i3] = v.x
		earth[i3 + 1] = v.y
		earth[i3 + 2] = v.z

		/* Ground: sampled densest near the camera so it reads evenly on screen.
		   It runs wider than any frame and back under the camera, and every edge
		   fades out, so while the camera arrives it never reads as a slab. */
		let light = 0
		if (kind === 4) {
			// Dust stays in the sky as stars.
			ground.set([earth[i3], Math.abs(earth[i3 + 1]) + 0.5, earth[i3 + 2] - 4, 1], i4)
		} else {
			// A few run back under and well behind the camera, out to where it
			// starts its approach, so the landscape has no near edge in view.
			const distance =
				Math.random() < 0.15 ? 0.5 - 7 * Math.pow(Math.random(), 1.5) : 0.5 + 6.6 * Math.pow(Math.random(), 1.5)
			const halfWidth = 1.4 + Math.max(distance, 0) * 1.1
			const across = Math.random() * 2 - 1
			const x = Math.sign(across) * Math.pow(Math.abs(across), 1.3) * halfWidth
			const z = 1.9 - distance
			let y = height(x, z)
			const dx = (height(x + step, z) - height(x - step, z)) / (2 * step)
			const dz = (height(x, z + step) - height(x, z - step)) / (2 * step)
			const slope = Math.hypot(dx, dz)
			// Fill cliff faces, which top-down sampling would leave bare.
			if (slope > 2 && Math.random() < 0.7) y -= Math.random() * Math.min(slope * 0.05, 0.5)
			normal.set(-dx, 1, -dz).normalize()
			light = 0.22 + 0.78 * MathUtils.clamp(normal.dot(sunlight) * 1.2, 0, 1)
			light *= 0.8 + 0.2 * MathUtils.clamp(y + 0.45, 0, 1)
			const sides = 1 - MathUtils.smoothstep(Math.abs(x) / halfWidth, 0.68, 1)
			const near = MathUtils.smoothstep(distance, -6.5, -3.5)
			ground.set([x, y, z, sides * near], i4)
		}

		seed[i4] = Math.random()
		seed[i4 + 1] = Math.random()
		seed[i4 + 2] = Math.random()
		seed[i4 + 3] = Math.random()
		surface[i2] = kind
		surface[i2 + 1] = light

		/* Moon: particles settle more often where the ground is bright, as they
		   crowd onto land on Earth, so the maria read as darker and sparser. */
		let spot = randomLatLon()
		let albedo = moonAlbedo(spot.lat, spot.lon)
		for (let tries = 1; tries < 6 && Math.random() >= albedo / 0.95; tries++) {
			spot = randomLatLon()
			albedo = moonAlbedo(spot.lat, spot.lon)
		}
		fromLatLon(spot.lat, spot.lon, v)
		moon.set([v.x, v.y, v.z, albedo], i4)
	}

	const geometry = new BufferGeometry()
	// Three.js needs a position attribute for bounds; the shader ignores it.
	geometry.setAttribute('position', new BufferAttribute(galaxy, 3))
	geometry.setAttribute('aGalaxy', new BufferAttribute(galaxy, 3))
	geometry.setAttribute('aGalaxyColor', new BufferAttribute(galaxyColor, 3))
	geometry.setAttribute('aEarth', new BufferAttribute(earth, 3))
	geometry.setAttribute('aGround', new BufferAttribute(ground, 4))
	geometry.setAttribute('aSeed', new BufferAttribute(seed, 4))
	geometry.setAttribute('aSurface', new BufferAttribute(surface, 2))
	geometry.setAttribute('aMoon', new BufferAttribute(moon, 4))
	return geometry
}

/** A fixed shell of background stars, drawn separately from the particles. */
export function buildStars(count: number) {
	const positions = new Float32Array(count * 3)
	const colors = new Float32Array(count * 3)
	const scales = new Float32Array(count)
	const phases = new Float32Array(count)
	const tints = ['#ffffff', '#ffe9cf', '#d9e3ff', '#ffd2a8'].map((c) => new Color(c))
	const v = new Vector3()

	for (let i = 0; i < count; i++) {
		v.randomDirection().multiplyScalar(40 + Math.random() * 40)
		positions.set([v.x, v.y, v.z], i * 3)
		const tint = tints[Math.floor(Math.random() * tints.length)]
		const brightness = 0.35 + Math.pow(Math.random(), 3) * 0.65
		colors.set([tint.r * brightness, tint.g * brightness, tint.b * brightness], i * 3)
		scales[i] = 0.6 + Math.pow(Math.random(), 4) * 2.6
		phases[i] = Math.random()
	}

	const geometry = new BufferGeometry()
	geometry.setAttribute('position', new BufferAttribute(positions, 3))
	geometry.setAttribute('color', new BufferAttribute(colors, 3))
	geometry.setAttribute('aScale', new BufferAttribute(scales, 1))
	geometry.setAttribute('aPhase', new BufferAttribute(phases, 1))
	return geometry
}
