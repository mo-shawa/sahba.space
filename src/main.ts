import "./style.css"

import * as THREE from "three"

/**
 * Base
 */
// Debug

// Scene
const scene = new THREE.Scene()

const parameters = {
	count: 100000,
	size: 0.01,
	radius: 8,
	branches: 5,
	spin: 1,
	randomness: 0.5,
	insideColor: "hsl(0, 100%, 76%)",
	outsideColor: "#141133",
}

const pointsGeometry = new THREE.BufferGeometry()

const positions = new Float32Array(parameters.count * 3)
const colors = new Float32Array(parameters.count * 3)

for (let i = 0; i < parameters.count; i++) {
	const i3 = i * 3

	const radius = Math.random() * parameters.radius

	const spinAngle = parameters.spin * radius
	const branchAngle = (i / parameters.branches) * Math.PI * 2

	const randomX = (Math.random() - 0.5) * parameters.randomness
	const randomY = (Math.random() - 0.5) * parameters.randomness
	const randomZ = (Math.random() - 0.5) * parameters.randomness

	positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
	positions[i3 + 1] = Math.random() * 0.1 + randomY //
	positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

	const insideColor = new THREE.Color(parameters.insideColor)
	const outsideColor = new THREE.Color(parameters.outsideColor)

	const mixedColor = insideColor
		.clone()
		.lerp(outsideColor, radius / parameters.radius)

	colors[i3 + 0] = mixedColor.r
	colors[i3 + 1] = mixedColor.g
	colors[i3 + 2] = mixedColor.b
}

pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

const pointsMaterial = new THREE.PointsMaterial({
	size: parameters.size,
	sizeAttenuation: true,
	depthWrite: false,
	vertexColors: true,
	blending: THREE.AdditiveBlending,
})

const points = new THREE.Points(pointsGeometry, pointsMaterial)

scene.add(points)

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
)
camera.position.x = 0
camera.position.y = 3
camera.position.z = 3
camera.lookAt(points.position)
scene.add(camera)

// Canvas

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.append(renderer.domElement)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()
	points.rotation.z = Math.sin(elapsedTime) / 200
	points.rotation.y += 1 / 5000

	renderer.render(scene, camera)

	window.requestAnimationFrame(tick)
}

tick()
