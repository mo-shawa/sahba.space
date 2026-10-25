/*
 * The particle scene behind the night chapters: one cloud of points that the
 * page drives through its shapes by scroll position (see CosmosFrame), a
 * camera shot for each, and quality that adapts to the device.
 */
import {
	AdditiveBlending,
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
import fragmentShader from '../../shaders/fragment.glsl?raw'
import starsFragmentShader from '../../shaders/stars.fragment.glsl?raw'
import starsVertexShader from '../../shaders/stars.vertex.glsl?raw'
import vertexShader from '../../shaders/vertex.glsl?raw'
import { buildParticles, buildStars } from './geometry'

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
	/** `moving`: the page is scrolling, so resolution changes wait until it stops. */
	render: (frame: CosmosFrame, delta: number, moving?: boolean) => void
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

/** Where the sunlight comes from in every scene but the Moon's close-up. */
const SUN = new Vector3(0.65, 0.35, 0.7).normalize()

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
			uGalaxyRotation: { value: new Matrix3() },
			uEarthRotation: { value: new Matrix3() },
			uMoonRotation: { value: new Matrix3() },
			uMoonCenter: { value: new Vector3(MOON.orbit, 0, 0) },
			uMoonRadius: { value: MOON.radius },
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
			sun: SUN,
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
			{ ...galaxy, sun: SUN, stars: 0.9 },
			{ ...earth, sun: SUN, stars: 1 },
			{
				// Low over the ground, looking toward the mesas.
				position: new Vector3(0, 0.55, 2.3),
				target: new Vector3(0, 0.05, -2),
				up: upright,
				sun: SUN,
				stars: 1,
				fov: portrait ? 70 : 55,
			},
			{ ...moonShot, sun: moonSun, stars: 1 },
			{ ...far, sun: SUN, stars: 1 },
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
	// frame rate recovers. Soft glows hide the lower resolution well. Changing
	// the resolution reallocates the canvas and costs a frame, so it waits for
	// a pause in scrolling; the particle count can change at any time.
	const quality = { frames: 0, time: 0, slow: 0, fast: 0, drawn: count, pendingRatio: 0 }

	function adapt(delta: number, moving: boolean) {
		if (quality.pendingRatio && !moving) {
			pixelRatio = quality.pendingRatio
			quality.pendingRatio = 0
			applyPixelRatio()
		}
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
			const current = quality.pendingRatio || pixelRatio
			if (current > 0.75) {
				quality.pendingRatio = Math.max(0.75, current - 0.25)
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
			} else if ((quality.pendingRatio || pixelRatio) < maxPixelRatio) {
				quality.pendingRatio = Math.min(maxPixelRatio, (quality.pendingRatio || pixelRatio) + 0.25)
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

	function render(state: CosmosFrame, delta: number, moving = false) {
		if (!reducedMotion) elapsed += delta
		adapt(delta, moving)

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
		quaternion.slerpQuaternions(
			fromWest,
			facingJordan,
			ease(MathUtils.clamp(state.earthTurn, 0, 1))
		)
		rotation.makeRotationFromQuaternion(quaternion)
		material.uniforms.uEarthRotation.value.setFromMatrix4(rotation)

		// Moon: the near side faces us, turning a few degrees as its chapter plays,
		// then carried round its tilted orbit once a minute, keeping one face to
		// Earth. The orbit's clock starts once the system is in full view; if the
		// reader heads back up, the orbit unwinds with the scroll (never more than
		// half a turn) and the clock resets once the system is out of view.
		if (stage >= 3.999) {
			if (!reducedMotion) systemClock += delta
		} else if (stage < 3.6) systemClock = 0
		const reveal = ease(MathUtils.clamp((stage - 3.6) / 0.4, 0, 1))
		const orbitAngle = wrapAngle((systemClock / MOON.period) * Math.PI * 2) * reveal
		const moonTurn = ease(MathUtils.clamp(state.moonTurn, 0, 1))
		moonFace.setFromEuler(
			euler.set(MathUtils.degToRad(6), MathUtils.degToRad(-14 + moonTurn * 20), MathUtils.degToRad(-4))
		)
		orbit.setFromAxisAngle(yAxis, orbitAngle).premultiply(tilt)
		material.uniforms.uMoonCenter.value.set(MOON.orbit, 0, 0).applyQuaternion(orbit)
		lock.copy(orbit).multiply(untilt).multiply(moonFace)
		rotation.makeRotationFromQuaternion(lock)
		material.uniforms.uMoonRotation.value.setFromMatrix4(rotation)

		// Earth stays hidden while the camera is on the Moon and appears as it
		// pulls back. The Moon holds half the particles in a small disc, so its
		// light falls with its apparent area as the camera backs away.
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
