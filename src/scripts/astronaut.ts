import { Color, MathUtils, Vector3 } from 'three'

/**
 * An astronaut in an EVA suit, as points on the surface of simple shapes:
 * a bubble helmet with a gold visor, the hard upper torso, the life-support
 * backpack, and capsule limbs in a floating pose with one hand raised.
 *
 * Local space: y up, the astronaut faces +z, about 2 units tall, centred on
 * the chest. The page places it in the scene with a matrix.
 */

/** Written to the particle attribute, so the shader can tell the visor apart. */
export const AstronautPart = { Suit: 1, Visor: 2, Lamp: 3 } as const
export type AstronautPart = (typeof AstronautPart)[keyof typeof AstronautPart]

export interface AstronautPoint {
	position: Vector3
	color: Color
	part: AstronautPart
}

export const HELMET = { center: new Vector3(0, 0.68, 0.04), radius: 0.27 }

interface Shape {
	area: number
	/** Writes a surface point and its outward normal; returns how dark the spot is (0 = normal, 1 = joint seam). */
	sample: (position: Vector3, normal: Vector3) => number
	part?: (direction: Vector3) => AstronautPart
}

const sphere = (center: Vector3, radius: number, part?: Shape['part']): Shape => ({
	area: 4 * Math.PI * radius * radius,
	sample(position, normal) {
		normal.randomDirection()
		position.copy(center).addScaledVector(normal, radius)
		return 0
	},
	part,
})

/** A limb: a tube between two joints with rounded ends and darker bearing rings. */
const capsule = (a: Vector3, b: Vector3, radius: number): Shape => {
	const axis = new Vector3().subVectors(b, a)
	const length = axis.length()
	axis.normalize()
	const side = new Vector3().crossVectors(axis, Math.abs(axis.y) < 0.9 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0)).normalize()
	const other = new Vector3().crossVectors(axis, side)
	const tube = 2 * Math.PI * radius * length
	const caps = 4 * Math.PI * radius * radius
	return {
		area: tube + caps,
		sample(position, normal) {
			if (Math.random() < caps / (tube + caps)) {
				normal.randomDirection()
				const end = normal.dot(axis) > 0 ? b : a
				position.copy(end).addScaledVector(normal, radius)
				return 0
			}
			const t = Math.random()
			const angle = Math.random() * Math.PI * 2
			normal.copy(side).multiplyScalar(Math.cos(angle)).addScaledVector(other, Math.sin(angle))
			position.copy(a).addScaledVector(axis, t * length).addScaledVector(normal, radius)
			return t < 0.07 || t > 0.93 ? 1 : 0
		},
	}
}

/** A rounded box (superellipsoid); `square` near 0 is boxy, 1 is an ellipsoid. */
const roundedBox = (center: Vector3, half: Vector3, square = 0.35): Shape => {
	const { x: a, y: b, z: c } = half
	// Ellipsoid surface area (Thomsen), a little more for the squarer corners.
	const p = 1.6075
	const area =
		4 * Math.PI * Math.pow((Math.pow(a * b, p) + Math.pow(a * c, p) + Math.pow(b * c, p)) / 3, 1 / p) * 1.15
	const shape = (v: number) => Math.sign(v) * Math.pow(Math.abs(v), square)
	return {
		area,
		sample(position, normal) {
			normal.randomDirection()
			position.set(shape(normal.x) * a, shape(normal.y) * b, shape(normal.z) * c)
			// The normal of a superellipsoid leans toward the nearest face.
			normal
				.set(
					Math.sign(position.x) * Math.pow(Math.abs(position.x / a), 2 / square - 1) / a,
					Math.sign(position.y) * Math.pow(Math.abs(position.y / b), 2 / square - 1) / b,
					Math.sign(position.z) * Math.pow(Math.abs(position.z / c), 2 / square - 1) / c
				)
				.normalize()
			position.add(center)
			return 0
		},
	}
}

/** A ring around a joint (neck, waist). */
const ring = (center: Vector3, radius: number, tube: number): Shape => ({
	area: 4 * Math.PI * Math.PI * radius * tube,
	sample(position, normal) {
		const u = Math.random() * Math.PI * 2
		const v = Math.random() * Math.PI * 2
		const across = new Vector3(Math.cos(u), 0, Math.sin(u))
		normal.copy(across).multiplyScalar(Math.cos(v)).setY(Math.sin(v))
		position.copy(center).addScaledVector(across, radius).addScaledVector(normal, tube)
		return 1
	},
})

/** The front of the helmet bubble is the visor, framed by a thin rim. */
const helmetPart = (d: Vector3): AstronautPart => {
	if (d.z <= 0.05) return AstronautPart.Suit
	const oval = (d.x / 0.78) ** 2 + ((d.y - 0.06) / 0.6) ** 2
	return oval < 0.82 ? AstronautPart.Visor : AstronautPart.Suit
}

export function createAstronaut() {
	const v = (x: number, y: number, z: number) => new Vector3(x, y, z)

	// Floating pose: one arm raised in a wave, the other relaxed, knees loosely
	// bent as they settle in microgravity.
	const shapes: Shape[] = [
		sphere(HELMET.center, HELMET.radius, helmetPart),
		sphere(v(-0.235, 0.84, 0.02), 0.04, () => AstronautPart.Lamp),
		sphere(v(0.235, 0.84, 0.02), 0.04, () => AstronautPart.Lamp),
		ring(v(0, 0.43, 0.02), 0.19, 0.035),
		roundedBox(v(0, 0.17, 0), v(0.36, 0.3, 0.24), 0.45),
		roundedBox(v(0, 0.1, 0.27), v(0.16, 0.085, 0.055), 0.3),
		roundedBox(v(0, 0.22, -0.37), v(0.32, 0.42, 0.13), 0.25),
		roundedBox(v(0, -0.22, 0), v(0.27, 0.15, 0.2), 0.5),
		ring(v(0, -0.08, 0), 0.26, 0.03),
		// The arm on the viewer's right, raised toward Earth.
		capsule(v(0.38, 0.33, 0), v(0.62, 0.42, 0.1), 0.105),
		capsule(v(0.62, 0.42, 0.1), v(0.7, 0.72, 0.2), 0.095),
		sphere(v(0.71, 0.82, 0.22), 0.085),
		// The other arm, relaxed and forward.
		capsule(v(-0.38, 0.33, 0), v(-0.56, 0.02, 0.1), 0.105),
		capsule(v(-0.56, 0.02, 0.1), v(-0.56, -0.24, 0.32), 0.095),
		sphere(v(-0.56, -0.31, 0.38), 0.085),
		// Legs.
		capsule(v(0.15, -0.32, 0), v(0.22, -0.68, 0.14), 0.13),
		capsule(v(0.22, -0.68, 0.14), v(0.2, -0.98, 0), 0.11),
		roundedBox(v(0.2, -1.05, 0.06), v(0.09, 0.065, 0.15), 0.4),
		capsule(v(-0.15, -0.32, 0), v(-0.24, -0.6, 0.22), 0.13),
		capsule(v(-0.24, -0.6, 0.22), v(-0.27, -0.9, -0.04), 0.11),
		roundedBox(v(-0.27, -0.97, 0.02), v(0.09, 0.065, 0.15), 0.4),
	]
	const total = shapes.reduce((sum, s) => sum + s.area, 0)

	const key = new Vector3(-0.55, 0.7, 0.45).normalize()
	const earthshine = new Vector3(0.75, -0.1, -0.65).normalize()
	const suit = new Color(1, 0.96, 0.9)
	const shade = new Color(0.1, 0.08, 0.17)
	const seam = new Color(0.32, 0.33, 0.4)
	const rimLight = new Color(0.32, 0.5, 1)
	const gold = new Color(1, 0.68, 0.26)
	const normal = new Vector3()
	const direction = new Vector3()
	const glow = new Color()

	/** One random point on the suit, area-weighted across all its parts. */
	function sample(point: AstronautPoint) {
		let pick = Math.random() * total
		let shape = shapes[0]
		for (const s of shapes) {
			shape = s
			if ((pick -= s.area) <= 0) break
		}
		const dark = shape.sample(point.position, normal)
		direction.copy(point.position).sub(HELMET.center).normalize()
		point.part = shape.part ? shape.part(direction) : AstronautPart.Suit

		if (point.part === AstronautPart.Lamp) {
			point.color.setRGB(1, 0.9, 0.7)
			return point
		}
		if (point.part === AstronautPart.Visor) {
			// Gold film: dark face-on, brighter toward the edge, with the key light's glint.
			const facing = MathUtils.clamp(normal.z, 0, 1)
			const fresnel = Math.pow(1 - facing, 2)
			const glint = Math.pow(MathUtils.clamp(normal.dot(key), 0, 1), 18)
			point.color.copy(gold).multiplyScalar(0.34 + fresnel * 0.6 + glint * 1.6)
			return point
		}
		const light = MathUtils.clamp(normal.dot(key), 0, 1)
		const rim = Math.pow(MathUtils.clamp(normal.dot(earthshine), 0, 1), 2)
		point.color
			.copy(shade)
			.lerp(suit, 0.12 + light * 0.88)
			.lerp(seam, dark * 0.45)
			.add(glow.copy(rimLight).multiplyScalar(rim * 0.35))
		return point
	}

	return { sample }
}
