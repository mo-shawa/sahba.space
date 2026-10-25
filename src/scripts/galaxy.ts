import {
	AdditiveBlending,
	BufferAttribute,
	BufferGeometry,
	Color,
	ColorManagement,
	Euler,
	MathUtils,
	Matrix3,
	Matrix4,
	PerspectiveCamera,
	Points,
	Quaternion,
	Scene,
	ShaderMaterial,
	Vector3,
	WebGLRenderer,
} from 'three'
import { HIGHLIGHT, LAND } from '../data/earthMask'
import fragmentShader from '../shaders/fragment.glsl?raw'
import vertexShader from '../shaders/vertex.glsl?raw'
import starsFragmentShader from '../shaders/stars.fragment.glsl?raw'
import starsVertexShader from '../shaders/stars.vertex.glsl?raw'

/**
 * Everything the page can ask of the scene for one frame. Each value is a pure
 * function of scroll position, so scrolling back and forth is always stable.
 */
export interface CosmosFrame {
	/** 0 = loose starfield (top of page) → 1 = fully wound galaxy */
	intro: number
	/** 0 = galaxy, 1 = Earth, 2 = ground, 3 = the Moon, 4 = Earth again, far away */
	stage: number
	/** 0..1: Earth turns until Jordan faces the viewer */
	earthTurn: number
	/** 0..1: the camera drifts low over the ground */
	groundTravel: number
	/** 0..1: the Moon turns slowly while its chapter is on screen */
	moonTurn: number
}

export interface Cosmos {
	render: (frame: CosmosFrame, delta: number) => void
	resize: () => void
}

// The palette is authored as display colours and written straight into
// particle attributes, so skip three.js's sRGB → linear conversion.
ColorManagement.enabled = false

// The globe turns until this point faces the viewer: between Palestine and Jordan.
const HOMELAND = { lat: 31.6, lon: 36 }

/**
 * The Moon in the last two scenes, in Earth radii (stylised, not to scale): it
 * starts on the far right of its orbit, which is tilted toward the viewer so
 * the Moon passes above and below Earth, never behind it. Period in seconds.
 */
const MOON = { radius: 0.27, orbit: 3.4, tilt: MathUtils.degToRad(32), period: 60 }

/** An angle brought into -π..π, so unwinding it never takes more than half a turn. */
const wrapAngle = (angle: number) => angle - Math.PI * 2 * Math.round(angle / (Math.PI * 2))

const palette = {
	core: new Color('#ffc978'),
	inner: new Color('#ffe6c4'),
	mid: new Color('#b9b3ff'),
	outer: new Color('#5d6bff'),
	rim: new Color('#3b3fc9'),
	hydrogen: new Color('#ff6fb1'),
	young: new Color('#a9c8ff'),
}

/* -------------------------------------------------------------------------- */
/* Geometry                                                                    */
/* -------------------------------------------------------------------------- */

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
	[-43.3, -11.2, 2, 0.25], // Tycho
	[9.6, -20, 1.6, 0.15], // Copernicus
	[23.7, -47.4, 1.1, 0.22], // Aristarchus
	[8, -38, 1, 0.12], // Kepler
] as const
const TYCHO = { lat: -43.3, lon: -11.2 }

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
	const feature = (lat: number, lon: number, outer: number, inner: number) => ({
		centre: fromLatLon(lat, lon, new Vector3()),
		outer: Math.cos(MathUtils.degToRad(outer)),
		inner: Math.cos(MathUtils.degToRad(inner)),
	})
	const maria = MARIA.map(([lat, lon, radius]) => ({
		centre: fromLatLon(lat, lon, new Vector3()),
		radius: MathUtils.degToRad(radius),
	}))
	const craters = CRATERS.map(([lat, lon, radius, gain]) => ({ ...feature(lat, lon, radius * 2.5, radius * 0.5), gain }))
	const tycho = fromLatLon(TYCHO.lat, TYCHO.lon, new Vector3())
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
				const bearing = Math.atan2(lon - TYCHO.lon, lat - TYCHO.lat)
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

function buildParticles(count: number) {
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
	const e = 0.03

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
			const dx = (height(x + e, z) - height(x - e, z)) / (2 * e)
			const dz = (height(x, z + e) - height(x, z - e)) / (2 * e)
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

function buildStars(count: number) {
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

/* -------------------------------------------------------------------------- */
/* Scene                                                                       */
/* -------------------------------------------------------------------------- */

interface Shot {
	position: Vector3
	target: Vector3
	up: Vector3
	sun: Vector3
	stars: number
	/** Vertical field of view: wide for the galaxy and ground, long lens for planets. */
	fov: number
}

export function createCosmos(canvas: HTMLCanvasElement): Cosmos | null {
	const isTouch = window.matchMedia('(pointer: coarse)').matches
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	let renderer: WebGLRenderer
	try {
		renderer = new WebGLRenderer({
			canvas,
			antialias: false,
			powerPreference: 'high-performance',
		})
	} catch {
		return null
	}
	renderer.setClearColor('#030409', 1)

	// Soft particles look the same at 1.5× as at 2×, at half the fill cost.
	const maxPixelRatio = Math.min(window.devicePixelRatio, isTouch ? 1.25 : 1.5)
	let pixelRatio = maxPixelRatio

	const scene = new Scene()
	const camera = new PerspectiveCamera(70, 1, 0.02, 200)

	const count = window.innerWidth < 720 ? 60000 : 110000
	const particles = buildParticles(count)
	const material = new ShaderMaterial({
		vertexShader,
		fragmentShader,
		depthWrite: false,
		depthTest: false,
		blending: AdditiveBlending,
		uniforms: {
			uTime: { value: 0 },
			uStage: { value: 0 },
			uTwist: { value: 0.5 },
			uSize: { value: 0 },
			uMaxSize: { value: 0 },
			uSizeScale: { value: 1 },
			uLens: { value: 1 },
			uBrightness: { value: 1 },
			uGalaxyRotation: { value: new Matrix3() },
			uEarthRotation: { value: new Matrix3() },
			uMoonRotation: { value: new Matrix3() },
			uMoonCenter: { value: new Vector3(MOON.orbit, 0, 0) },
			uMoonGlow: { value: 1 },
			uEarthGlow: { value: 1 },
			uDustScale: { value: 1 },
			uSun: { value: new Vector3() },
		},
	})
	const points = new Points(particles, material)
	points.frustumCulled = false
	scene.add(points)

	const starsMaterial = new ShaderMaterial({
		vertexShader: starsVertexShader,
		fragmentShader: starsFragmentShader,
		depthWrite: false,
		depthTest: false,
		blending: AdditiveBlending,
		vertexColors: true,
		uniforms: {
			uTime: { value: 0 },
			uSize: { value: 0 },
			uBrightness: { value: 1 },
		},
	})
	const stars = new Points(buildStars(isTouch ? 1800 : 3000), starsMaterial)
	stars.frustumCulled = false
	scene.add(stars)

	/* ---------------------------------------------------------------------- */
	/* Camera shots                                                            */
	/* ---------------------------------------------------------------------- */

	const aspect = () => canvas.clientWidth / Math.max(canvas.clientHeight, 1)

	/**
	 * Camera placement that shows the origin at a horizontal fraction of the
	 * frame (+1 = right edge) from `distance` along `direction`.
	 */
	const frame = (
		direction: Vector3,
		distance: number,
		fraction: number,
		up: Vector3,
		fov: number,
		lift = 0
	) => {
		const halfHeight = distance * Math.tan(MathUtils.degToRad(fov / 2))
		const forward = direction.clone().normalize().negate()
		const right = new Vector3().crossVectors(forward, up).normalize()
		const screenUp = new Vector3().crossVectors(right, forward).normalize()
		const offset = right
			.multiplyScalar(-fraction * halfHeight * aspect())
			.addScaledVector(screenUp, -lift * halfHeight)
		return {
			position: direction.clone().normalize().multiplyScalar(distance).add(offset),
			target: offset,
			up,
			fov,
		}
	}

	let shots: Shot[] = []
	let fieldShot: Shot

	function composeShots() {
		const portrait = aspect() < 0.9
		const north = new Vector3(0, 0, -1)
		const upright = new Vector3(0, 1, 0)
		const wide = portrait ? 80 : 70
		const long = 30
		// Distance at which a unit sphere fills `share` of the frame's shorter half.
		const fill = (share: number) =>
			1 / (share * Math.tan(MathUtils.degToRad(long / 2)) * Math.min(aspect(), 1))

		fieldShot = {
			position: new Vector3(0, 0.4, 0),
			target: new Vector3(0, 0, 0),
			up: north,
			sun: new Vector3(0.65, 0.35, 0.7).normalize(),
			stars: 1,
			fov: wide,
		}

		const front = new Vector3(0, 0.06, 1)
		const galaxy = frame(new Vector3(0, 1, 0), portrait ? 3 : 2.1, portrait ? 0 : 0.42, north, wide)
		// Tall phones have room for a big globe above the text; squarer
		// portrait screens (tablets, narrow windows) need a smaller, higher one.
		const squarish = aspect() > 0.65
		const earth = portrait
			? squarish
				? frame(front, fill(0.5), 0, upright, long, 0.52)
				: frame(front, fill(0.72), 0, upright, long, 0.38)
			: frame(front, fill(0.6), 0.36, upright, long)
		const sun = new Vector3(0.65, 0.35, 0.7).normalize()
		// Lit almost from the front, a little from the right: a nearly full Moon,
		// so the maria show across the whole face.
		const moonSun = new Vector3(0.38, 0.22, 0.9).normalize()
		// Close on the Moon where its orbit starts; Earth is out of frame to the left.
		const moonHome = new Vector3(MOON.orbit, 0, 0)
		const around = (shot: ReturnType<typeof frame>, point: Vector3) => ({
			...shot,
			position: shot.position.clone().add(point),
			target: shot.target.clone().add(point),
		})
		const moonShot = around(
			portrait
				? squarish
					? frame(front, fill(0.42) * MOON.radius, 0, upright, long, 0.52)
					: frame(front, fill(0.6) * MOON.radius, 0, upright, long, 0.38)
				: frame(front, fill(0.5) * MOON.radius, 0.38, upright, long),
			moonHome
		)
		// Pulled far back: a small Earth, as before, with the Moon in orbit around it.
		const far = portrait
			? frame(front, 70, 0.3, upright, long, 0.5)
			: frame(front, 70, 0.62, upright, long)

		shots = [
			{ ...galaxy, sun, stars: 0.9 },
			{ ...earth, sun, stars: 1 },
			{
				// Low over the ground, looking toward the mesas.
				position: new Vector3(0, 0.55, 2.3),
				target: new Vector3(0, 0.05, -2),
				up: upright,
				sun,
				stars: 1,
				fov: portrait ? 70 : 55,
			},
			{ ...moonShot, sun: moonSun, stars: 1 },
			{ ...far, sun, stars: 1 },
		]
	}

	/* ---------------------------------------------------------------------- */
	/* Sizing & adaptive quality                                               */
	/* ---------------------------------------------------------------------- */

	let lastWidth = 0
	let lastHeight = 0

	function applyPixelRatio() {
		renderer.setPixelRatio(pixelRatio)
		renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
		material.uniforms.uSize.value = 9 * pixelRatio
		material.uniforms.uMaxSize.value = 28 * pixelRatio
		starsMaterial.uniforms.uSize.value = 3.2 * pixelRatio
	}

	function resize(force = false) {
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		// Ignore the height jitter of mobile browser chrome.
		if (!force && width === lastWidth && isTouch && Math.abs(height - lastHeight) < 160) {
			return
		}
		lastWidth = width
		lastHeight = height
		camera.aspect = width / Math.max(height, 1)
		camera.updateProjectionMatrix()
		applyPixelRatio()
		composeShots()
	}

	// If frames run long, render fewer pixels (then fewer particles) until the
	// frame rate recovers. Soft glows hide the lower resolution well.
	const quality = { frames: 0, time: 0, slow: 0, fast: 0, drawn: count }

	function adapt(delta: number) {
		quality.frames++
		quality.time += delta
		if (quality.frames < 45) return
		const average = quality.time / quality.frames
		quality.frames = 0
		quality.time = 0

		if (average > 1 / 48) {
			quality.fast = 0
			if (++quality.slow < 2) return
			quality.slow = 0
			if (pixelRatio > 0.75) {
				pixelRatio = Math.max(0.75, pixelRatio - 0.25)
				applyPixelRatio()
			} else if (quality.drawn > count * 0.4) {
				quality.drawn = Math.floor(quality.drawn * 0.75)
				particles.setDrawRange(0, quality.drawn)
			}
		} else if (average < 1 / 90) {
			quality.slow = 0
			if (++quality.fast < 4) return
			quality.fast = 0
			if (quality.drawn < count) {
				quality.drawn = Math.min(count, Math.floor(quality.drawn / 0.75))
				particles.setDrawRange(0, quality.drawn)
			} else if (pixelRatio < maxPixelRatio) {
				pixelRatio = Math.min(maxPixelRatio, pixelRatio + 0.25)
				applyPixelRatio()
			}
		}
	}

	/* ---------------------------------------------------------------------- */
	/* Frame                                                                   */
	/* ---------------------------------------------------------------------- */

	const pointer = { x: 0, y: 0, easedX: 0, easedY: 0 }
	if (!isTouch && !reducedMotion) {
		window.addEventListener(
			'pointermove',
			(event) => {
				pointer.x = (event.clientX / window.innerWidth) * 2 - 1
				pointer.y = (event.clientY / window.innerHeight) * 2 - 1
			},
			{ passive: true }
		)
	}

	const position = new Vector3()
	const target = new Vector3()
	const up = new Vector3()
	const sun = new Vector3()
	const rotation = new Matrix4()
	const quaternion = new Quaternion()
	const euler = new Euler()
	const ease = (t: number) => t * t * (3 - 2 * t)
	let elapsed = 0
	// Runs only while the Earth–Moon system is in full view (see render).
	let systemClock = 0
	const yAxis = new Vector3(0, 1, 0)
	const xAxis = new Vector3(1, 0, 0)
	const tilt = new Quaternion().setFromAxisAngle(xAxis, MOON.tilt)
	const untilt = tilt.clone().invert()
	const orbit = new Quaternion()
	const lock = new Quaternion()
	const moonFace = new Quaternion()

	// Earth orientations: approaching from the west, then Jordan facing us.
	const fromWest = new Quaternion().setFromEuler(
		new Euler(MathUtils.degToRad(15), MathUtils.degToRad(40), 0, 'XYZ')
	)
	const facingJordan = new Quaternion().setFromEuler(
		new Euler(MathUtils.degToRad(HOMELAND.lat * 0.75), -MathUtils.degToRad(HOMELAND.lon), 0, 'XYZ')
	)

	function render(state: CosmosFrame, delta: number) {
		if (!reducedMotion) elapsed += delta
		adapt(delta)

		const intro = MathUtils.clamp(state.intro, 0, 1)
		const stage = MathUtils.clamp(state.stage, 0, 4)

		// Camera: starfield → galaxy is driven by intro; later shots by stage.
		let starLevel: number
		let fov: number
		if (stage <= 0) {
			const shot = shots[0]
			position.lerpVectors(fieldShot.position, shot.position, intro)
			target.lerpVectors(fieldShot.target, shot.target, intro)
			up.copy(shot.up)
			sun.copy(shot.sun)
			starLevel = MathUtils.lerp(fieldShot.stars, shot.stars, intro)
			fov = shot.fov
		} else {
			const index = Math.min(Math.floor(stage), 3)
			const t = ease(stage - index)
			const a = shots[index]
			const b = shots[index + 1]
			position.lerpVectors(a.position, b.position, t)
			target.lerpVectors(a.target, b.target, t)
			// Drift forward over the ground while it's on screen.
			const travel = ease(MathUtils.clamp(state.groundTravel, 0, 1))
			const onGround = stage < 2 ? t : stage < 3 ? 1 - t : 0
			if (stage >= 1) {
				position.z -= travel * 1.1 * onGround
				position.y -= travel * 0.12 * onGround
				target.z -= travel * 1.1 * onGround
			}
			up.lerpVectors(a.up, b.up, t).normalize()
			sun.lerpVectors(a.sun, b.sun, t).normalize()
			starLevel = MathUtils.lerp(a.stars, b.stars, t)
			// Interpolate the lens through its angle so zooms feel even.
			fov = MathUtils.radToDeg(
				2 *
					Math.atan(
						MathUtils.lerp(
							Math.tan(MathUtils.degToRad(a.fov / 2)),
							Math.tan(MathUtils.degToRad(b.fov / 2)),
							t
						)
					)
			)
		}

		pointer.easedX += (pointer.x - pointer.easedX) * Math.min(delta * 2.5, 1)
		pointer.easedY += (pointer.y - pointer.easedY) * Math.min(delta * 2.5, 1)
		camera.position.set(
			position.x + pointer.easedX * 0.05,
			position.y - pointer.easedY * 0.03,
			position.z
		)
		camera.up.copy(up)
		camera.lookAt(target)
		if (camera.fov !== fov) {
			camera.fov = fov
			camera.updateProjectionMatrix()
		}
		// Keep particles the same apparent size whatever the lens.
		material.uniforms.uLens.value =
			Math.tan(MathUtils.degToRad(35)) / Math.tan(MathUtils.degToRad(fov / 2))

		// Galaxy: tilted plane, slowly turning.
		rotation.makeRotationFromEuler(euler.set(0, -elapsed * 0.012, 0.3 * intro))
		material.uniforms.uGalaxyRotation.value.setFromMatrix4(rotation)

		// Earth: swings round until Jordan faces us.
		// The Moon orbits Earth once a minute, keeping one face toward it, on a
		// clock that starts once the system is in full view. If the reader heads
		// back up, the orbit unwinds with the scroll (never more than half a
		// turn) and the clock resets once the system is out of view.
		if (stage >= 3.999) {
			if (!reducedMotion) systemClock += delta
		} else if (stage < 3.6) systemClock = 0
		const reveal = ease(MathUtils.clamp((stage - 3.6) / 0.4, 0, 1))
		const orbitAngle = wrapAngle((systemClock / MOON.period) * Math.PI * 2) * reveal

		quaternion.slerpQuaternions(
			fromWest,
			facingJordan,
			ease(MathUtils.clamp(state.earthTurn, 0, 1))
		)
		rotation.makeRotationFromQuaternion(quaternion)
		material.uniforms.uEarthRotation.value.setFromMatrix4(rotation)

		// Moon: the near side faces us, turning a few degrees as its chapter plays,
		// then carried round its tilted orbit.
		const moonTurn = ease(MathUtils.clamp(state.moonTurn, 0, 1))
		moonFace.setFromEuler(
			euler.set(MathUtils.degToRad(6), MathUtils.degToRad(-14 + moonTurn * 20), MathUtils.degToRad(-4))
		)
		orbit.setFromAxisAngle(yAxis, orbitAngle).premultiply(tilt)
		material.uniforms.uMoonCenter.value.set(MOON.orbit, 0, 0).applyQuaternion(orbit)
		lock.copy(orbit).multiply(untilt).multiply(moonFace)
		rotation.makeRotationFromQuaternion(lock)
		material.uniforms.uMoonRotation.value.setFromMatrix4(rotation)

		// Earth stays hidden while the camera is on the Moon, and appears as it
		// pulls back; both bodies dim as they shrink, so neither burns out.
		// The Moon holds half the particles in a small disc, so its light falls
		// with its apparent area as the camera backs away.
		const away = MathUtils.clamp(stage - 3, 0, 1)
		material.uniforms.uEarthGlow.value = MathUtils.smoothstep(stage, 3.15, 3.7) * 2
		material.uniforms.uMoonGlow.value = MathUtils.lerp(0.05, 1.3, (1 - away) ** 2)
		material.uniforms.uDustScale.value = Math.max(1, camera.position.length() / 3)

		const swirlRatio = MathUtils.lerp(800, 16, 1 - Math.pow(2, -10 * intro))
		material.uniforms.uTwist.value = (400 + elapsed * 0.5) / swirlRatio
		material.uniforms.uStage.value = stage
		material.uniforms.uSizeScale.value = stage > 0 ? 1 : MathUtils.lerp(0.16, 1, intro)
		material.uniforms.uTime.value = elapsed
		material.uniforms.uSun.value.copy(sun)

		starsMaterial.uniforms.uTime.value = elapsed
		starsMaterial.uniforms.uBrightness.value = starLevel
		stars.rotation.y = elapsed * 0.004

		renderer.render(scene, camera)
	}

	window.addEventListener('resize', () => resize())
	resize(true)

	return { render, resize: () => resize(true) }
}
