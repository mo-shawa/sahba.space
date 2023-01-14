import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import fragmentShader from "./shaders/fragment.glsl?raw"
import vertexShader from "./shaders/vertex.glsl?raw"

/**
 * Base
 */

const scene = new THREE.Scene()
/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
/**

 * Camera
 */

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.0001,
	100
)

camera.position.x = 0
camera.position.y = 1.5
camera.position.z = 3
scene.add(camera)

// Canvas

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.append(renderer.domElement)

const parameters = {
	count: 200000,
	size: 0.005,
	radius: 5,
	branches: 5,
	spin: 1,
	randomness: 0.5,
	insideColor: "#ff8585",
	outsideColor: "#141133",
}

/**
 * Galaxy
 */
const pointsGeometry = new THREE.BufferGeometry()

const positions = new Float32Array(parameters.count * 3)
const colors = new Float32Array(parameters.count * 3)
const scales = new Float32Array(parameters.count * 1)

const insideColor = new THREE.Color(parameters.insideColor)
const outsideColor = new THREE.Color(parameters.outsideColor)

for (let i = 0; i < parameters.count; i++) {
	const i3 = i * 3

	const radius = Math.random() * parameters.radius

	const branchAngle = (i / parameters.branches) * Math.PI * 2

	const randomX = (Math.random() - 0.5) * parameters.randomness
	const randomY = (Math.random() - 0.5) * parameters.randomness
	const randomZ = (Math.random() - 0.5) * parameters.randomness

	positions[i3 + 0] = Math.cos(branchAngle) * radius + randomX
	positions[i3 + 1] = Math.random() * 0.1 + randomY //
	positions[i3 + 2] = Math.sin(branchAngle) * radius + randomZ

	const mixedColor = insideColor.clone()

	mixedColor.lerp(outsideColor, radius / parameters.radius)

	colors[i3 + 0] = mixedColor.r
	colors[i3 + 1] = mixedColor.g
	colors[i3 + 2] = mixedColor.b

	scales[i] = Math.random()
}

// console.log(colors)

pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
pointsGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1))

/**
 * Shader Material
 */

const pointsShader = new THREE.ShaderMaterial({
	depthWrite: false,
	blending: THREE.AdditiveBlending,
	vertexColors: true,
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
	uniforms: {
		uSize: { value: 8 * renderer.getPixelRatio() },
	},
})

const points = new THREE.Points(pointsGeometry, pointsShader)
camera.lookAt(points.position)

scene.add(points)

/**
 * Animate
 */

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// const clock = new THREE.Clock()

const tick = () => {
	// const elapsedTime = clock.getElapsedTime()
	// points.rotation.z = Math.sin(elapsedTime) / 200
	// points.rotation.y += 1 / 5000

	controls.update()

	renderer.render(scene, camera)

	window.requestAnimationFrame(tick)
}

tick()
