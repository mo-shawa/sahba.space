import "./style.css"
import * as THREE from "three"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import fragmentShader from "./shaders/fragment.glsl?raw"
import vertexShader from "./shaders/vertex.glsl?raw"

const isMobile = "ontouchstart" in document.documentElement

/**
 * Base
 */

const scene = new THREE.Scene()
/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: isMobile ? window.outerHeight : window.innerHeight,
}

if (!isMobile) {
	window.addEventListener("resize", () => {
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight

		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()

		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	})
}

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
camera.position.y = 0.4
camera.position.z = 0
scene.add(camera)

// Canvas

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.domElement.classList.add("webgl")
document.getElementById("app")?.prepend(renderer.domElement)

const parameters = {
	count: 180000,
	size: 0.005,
	radius: 1.5,
	branches: 6,
	spin: 1,
	randomness: 0.9,
	insideColor: "#ffffff",
	outsideColor: "#35ffee",
	swirlRatio: 800,
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

const pointsMaterial = new THREE.ShaderMaterial({
	depthWrite: false,
	blending: THREE.AdditiveBlending,
	vertexColors: true,
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
	uniforms: {
		uTime: { value: 0 },
		uSize: { value: 8 * renderer.getPixelRatio() },
	},
})

const points = new THREE.Points(pointsGeometry, pointsMaterial)
camera.lookAt(points.position)

scene.add(points)

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	pointsMaterial.uniforms.uTime.value =
		(400 + elapsedTime) / parameters.swirlRatio

	renderer.render(scene, camera)

	window.requestAnimationFrame(tick)
}

tick()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

ScrollTrigger.defaults({
	immediateRender: false,
})

const aboutTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-two",
		start: "-30%",
		end: "-10%",
		scrub: 1,
	},
})

aboutTimeline.from(".intro-container", {
	opacity: 0,
	xPercent: -20,
})

const navEl = document.querySelector("nav")
const navHeight = navEl?.offsetHeight

gsap.from(navEl, {
	y: -navHeight!,
	opacity: 0,
	scrollTrigger: {
		end: "10%",
		scrub: true,
	},
})

const galaxyTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-one",
		start: "top top",
		endTrigger: ".section-three",
		end: "bottom 0%",
		scrub: 1,
	},
})

galaxyTimeline
	.to(points.rotation, { z: 0.3, ease: "expo.out" }, 0)
	.from(
		pointsMaterial.uniforms.uSize,
		{ value: (isMobile ? 2 : 0) * renderer.getPixelRatio() },
		0
	)
	.to(parameters, { swirlRatio: 2, ease: "expo" }, 0)
	.to(camera.position, { y: 2, x: -1 }, 0)

const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
	link.addEventListener("click", (evt) => {
		evt.preventDefault()
		gsap.to(window, {
			duration: 0.6,
			scrollTo: link.getAttribute("href")!,
		})
	})
})

document.getElementById("copyright-year")!.textContent = new Date()
	.getFullYear()
	.toString()
