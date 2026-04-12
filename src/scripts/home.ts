import {
	AdditiveBlending,
	BufferAttribute,
	BufferGeometry,
	Clock,
	Color,
	PerspectiveCamera,
	Points,
	Scene,
	ShaderMaterial,
	WebGLRenderer,
} from 'three/src/Three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fragmentShader from '../shaders/fragment.glsl?raw'
import vertexShader from '../shaders/vertex.glsl?raw'

function initializeHomePage() {
	const app = document.getElementById('app')

	if (!app) return

	const prefersReducedMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches
	const isMobile =
		'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
	const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
	const searchParams = new URLSearchParams(window.location.search)
	const skipIntroAnimation = ['1', 'true'].includes(
		searchParams.get('skipIntro')?.toLowerCase() ?? 'false'
	)

	const overlay = document.getElementById('overlay')
	const revealPage = () => {
		document.body.style.overflowY = 'auto'
	}
	const removeOverlay = () => {
		overlay?.remove()
	}
	const overlayOptions: GSAPTweenVars = {
		opacity: 0,
		ease: 'expo.inOut',
		duration: 1,
		delay: 1.5,
		onStart: () => {
			revealPage()
		},
		onComplete: () => {
			removeOverlay()
		},
	}

	if (!overlay) {
		revealPage()
	} else if (skipIntroAnimation || window.scrollY > 0 || prefersReducedMotion) {
		revealPage()
		removeOverlay()
	} else {
		document.body.style.overflowY = 'hidden'
		gsap.to(overlay, overlayOptions)
	}

	app.querySelector('canvas.webgl')?.remove()

	const scene = new Scene()
	const sizes = {
		width: window.innerWidth,
		height: isMobile ? window.outerHeight : window.innerHeight,
	}

	window.addEventListener('resize', () => {
		if (isMobile && sizes.height > window.outerHeight) return
		handleCanvasResize()
	})

	window.addEventListener('orientationchange', handleCanvasResize)

	const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
	camera.position.x = 0
	camera.position.y = 0.4
	camera.position.z = 0
	scene.add(camera)

	const renderer = new WebGLRenderer()
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	renderer.domElement.classList.add('webgl')
	app.prepend(renderer.domElement)

	function handleCanvasResize() {
		sizes.width = window.innerWidth
		sizes.height = isMobile ? window.outerHeight : window.innerHeight

		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()

		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	}

	const parameters = {
		count: prefersReducedMotion ? 48000 : 180000,
		size: 0.005,
		radius: 1.5,
		branches: 6,
		spin: 1,
		randomness: 0.9,
		insideColor: '#ffffff',
		outsideColor: '#35ffee',
		swirlRatio: 800,
	}

	const pointsGeometry = new BufferGeometry()
	const positions = new Float32Array(parameters.count * 3)
	const colors = new Float32Array(parameters.count * 3)
	const scales = new Float32Array(parameters.count)
	const insideColor = new Color(parameters.insideColor)
	const outsideColor = new Color(parameters.outsideColor)

	for (let i = 0; i < parameters.count; i++) {
		const i3 = i * 3
		const radius = Math.random() * parameters.radius
		const branchAngle = (i / parameters.branches) * Math.PI * 2
		const randomX = (Math.random() - 0.5) * parameters.randomness
		const randomY = (Math.random() - 0.5) * parameters.randomness
		const randomZ = (Math.random() - 0.5) * parameters.randomness

		positions[i3 + 0] = Math.cos(branchAngle) * radius + randomX
		positions[i3 + 1] = Math.random() * 0.1 + randomY
		positions[i3 + 2] = Math.sin(branchAngle) * radius + randomZ

		const mixedColor = insideColor.clone()
		mixedColor.lerp(outsideColor, radius / parameters.radius)

		colors[i3 + 0] = mixedColor.r
		colors[i3 + 1] = mixedColor.g
		colors[i3 + 2] = mixedColor.b

		scales[i] = Math.random()
	}

	pointsGeometry.setAttribute('position', new BufferAttribute(positions, 3))
	pointsGeometry.setAttribute('color', new BufferAttribute(colors, 3))
	pointsGeometry.setAttribute('aScale', new BufferAttribute(scales, 1))

	const pointsMaterial = new ShaderMaterial({
		depthWrite: false,
		blending: AdditiveBlending,
		vertexColors: true,
		vertexShader,
		fragmentShader,
		uniforms: {
			uTime: { value: 0 },
			uSize: { value: 8 * renderer.getPixelRatio() },
		},
	})

	const points = new Points(pointsGeometry, pointsMaterial)
	camera.lookAt(points.position)
	scene.add(points)

	const clock = new Clock()

	const tick = () => {
		if (clock.getElapsedTime() > 600) clock.start()

		const elapsedTime = clock.getElapsedTime()
		pointsMaterial.uniforms.uTime.value =
			(400 + elapsedTime) / parameters.swirlRatio

		renderer.render(scene, camera)
		window.requestAnimationFrame(tick)
	}

	if (prefersReducedMotion) {
		renderer.render(scene, camera)
	} else {
		tick()
	}

	gsap.registerPlugin(ScrollTrigger)

	ScrollTrigger.defaults({
		immediateRender: false,
	})

	const navEl = document.querySelector('nav')

	if (navEl && !prefersReducedMotion) {
		gsap.from(navEl, {
			y: -navEl.offsetHeight,
			opacity: 0,
			duration: 0.8,
			ease: 'expo.out',
		})
	}

	const hamburger = document.getElementById('hamburger') as HTMLButtonElement | null
	const mobileNav = document.getElementById('mobile-nav')

	function toggleMobileNav(open: boolean) {
		if (!hamburger || !mobileNav) return

		hamburger.setAttribute('aria-expanded', String(open))

		if (prefersReducedMotion) {
			mobileNav.hidden = !open
			return
		}

		gsap.killTweensOf(mobileNav)

		if (open) {
			mobileNav.hidden = false
			gsap.fromTo(
				mobileNav,
				{ autoAlpha: 0, y: -12 },
				{ autoAlpha: 1, y: 0, duration: 0.25, ease: 'expo.out' }
			)
			return
		}

		gsap.to(mobileNav, {
			autoAlpha: 0,
			y: -12,
			duration: 0.2,
			ease: 'expo.in',
			onComplete: () => {
				mobileNav.hidden = true
			},
		})
	}

	hamburger?.addEventListener('click', () => {
		const isExpanded = hamburger.getAttribute('aria-expanded') === 'true'
		toggleMobileNav(!isExpanded)
	})

	document.querySelectorAll('#mobile-nav .mobile-link').forEach((link) => {
		link.addEventListener('click', () => {
			toggleMobileNav(false)
		})
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1240) {
			toggleMobileNav(false)
		}
	})

	if (!prefersReducedMotion) {
		document
			.querySelectorAll(
				'.section-heading, .intro-container, .card, .section-container, .research-item, .footer-item'
			)
			.forEach((element) => {
				gsap.from(element, {
					y: 28,
					opacity: 0,
					ease: 'expo.out',
					duration: 0.8,
					scrollTrigger: {
						trigger: element,
						start: 'top 85%',
					},
				})
			})

		const iconWrappers = document.querySelectorAll('.icon-wrapper')

		if (iconWrappers.length > 0) {
			gsap.from(iconWrappers, {
				delay: 0.15,
				scale: 0.96,
				opacity: 0,
				y: 18,
				ease: 'expo.out',
				duration: 0.7,
				stagger: 0.08,
				scrollTrigger: {
					trigger: iconWrappers[0],
					start: 'top 88%',
				},
			})
		}
	}

	if (!prefersReducedMotion) {
		const galaxyTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#app',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
		})

		galaxyTimeline
			.to(points.rotation, { z: 0.3, ease: 'none' }, 0)
			.from(
				pointsMaterial.uniforms.uSize,
				{ value: (isMobile || isSafari ? 1 : 0) * renderer.getPixelRatio() },
				0
			)
			.to(parameters, { swirlRatio: 5, ease: 'none' }, 0)
			.to(camera.position, { y: 2, x: -1 }, 0)
	}

	const copyrightYear = document.getElementById('copyright-year')

	if (copyrightYear) {
		copyrightYear.textContent = new Date().getFullYear().toString()
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeHomePage, {
		once: true,
	})
} else {
	initializeHomePage()
}