import './style.css'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import fragmentShader from './shaders/fragment.glsl?raw'
import vertexShader from './shaders/vertex.glsl?raw'

const isMobile = 'ontouchstart' in document.documentElement
const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

console.log(isSafari)

window.addEventListener('DOMContentLoaded', () => {
	const overlay = document.getElementById('overlay')

	setTimeout(() => {
		gsap.to(overlay, {
			yPercent: 40,
			opacity: 0,
			ease: 'expo.inOut',
			duration: 1,
			onStart: () => {
				document.body.style.overflowY = 'auto'
			},
			onComplete: () => {
				overlay!.remove()
			},
		})
	}, 1500)
})

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

window.addEventListener('resize', () => {
	if (isMobile && sizes.height > window.outerHeight) return
	handleCanvasResize()
})

window.addEventListener('orientationchange', handleCanvasResize)

function handleCanvasResize() {
	sizes.width = window.innerWidth
	sizes.height = isMobile ? window.outerHeight : window.innerHeight

	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
renderer.domElement.classList.add('webgl')
document.getElementById('app')?.prepend(renderer.domElement)

const parameters = {
	count: 180000,
	size: 0.005,
	radius: 1.5,
	branches: 6,
	spin: 1,
	randomness: 0.9,
	insideColor: '#ffffff',
	outsideColor: '#35ffee',
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

pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
pointsGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

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
	if (clock.getElapsedTime() > 600) clock.start() // reset time after 10 min

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

const navEl = document.querySelector('nav')
const navHeight = navEl!.offsetHeight

gsap.from(navEl, {
	y: -navHeight!,
	opacity: 0,
	scrollTrigger: {
		end: '5%',
	},
})

const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')
const navLinks = document.querySelectorAll('.nav-link')
const mobileLinks = document.querySelectorAll('.mobile-link')
const navOptions = { right: 0, ease: 'expo.inOut' }

hamburger!.addEventListener('click', () => {
	gsap.to(mobileNav, navOptions)
})

navLinks.forEach((link) => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault()
		gsap.to(window, {
			duration: 1,
			ease: 'expo.inOut',
			scrollTo: { y: link.getAttribute('href')!, offsetY: 20 },
		})
	})
})
mobileLinks.forEach((link) => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault()
		gsap.to(mobileNav, { right: '-150%' })
		gsap.to(window, {
			duration: 1,
			ease: 'expo.inOut',
			scrollTo: { y: link.getAttribute('href')!, offsetY: 20 },
		})
	})
})

gsap.to('#pointer', {
	duration: 1.5,
	y: 15,
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut',
	scrollTrigger: {
		trigger: '#pointer',
		start: 'top bottom',
		toggleActions: 'play pause play pause',
	},
})

const aboutTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '#about',
		start: '-30%',
		end: '-10%',
		// scrub: 1,
	},
})

document
	.querySelectorAll('.card, .section-title, .section-container, .lecture')
	.forEach((element) => {
		gsap.from(element, {
			xPercent: -10,
			opacity: 0,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: element,
				start: ' 50%',
			},
		})
	})

aboutTimeline.from('.intro-container', {
	opacity: 0,
	xPercent: -20,
})

const galaxyTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '#app',
		start: 'top top',
		end: 'bottom -10%',
		scrub: 1,
	},
})

galaxyTimeline
	.to(points.rotation, { z: 0.3, ease: 'expo.out' }, 0)
	.from(
		pointsMaterial.uniforms.uSize,
		{ value: (isMobile || isSafari ? 1 : 0) * renderer.getPixelRatio() },
		0
	)
	.to(parameters, { swirlRatio: 5, ease: 'expo' }, 0)
	.to(camera.position, { y: 2, x: -1 }, 0)

const iconWrappers = document.querySelectorAll('.icon-wrapper')
const iconsOptions = {
	delay: 0.5,
	scale: 0,
	opacity: 0,
	xPercent: -150,
	ease: 'expo.inOut',
	duration: 1,
	stagger: 0.1,
}

gsap.from(iconWrappers, {
	...iconsOptions,
	scrollTrigger: {
		trigger: iconWrappers,
		end: 'bottom bottom',
	},
})

document.getElementById('copyright-year')!.textContent = new Date()
	.getFullYear()
	.toString()
