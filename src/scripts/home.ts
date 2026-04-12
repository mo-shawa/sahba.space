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
import { galaxyViews, type PageKey } from '../data/siteContent'
import fragmentShader from '../shaders/fragment.glsl?raw'
import vertexShader from '../shaders/vertex.glsl?raw'

gsap.registerPlugin(ScrollTrigger)

function initializeSite() {
	const app = document.getElementById('app')

	if (!app) return

	ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

	const pageKey = (document.body.dataset.page as PageKey | undefined) ?? 'home'
	const pageView = galaxyViews[pageKey] ?? galaxyViews.home
	const searchParams = new URLSearchParams(window.location.search)

	const prefersReducedMotionSetting = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches
	const motionPreference = searchParams.get('motion')?.toLowerCase()
	const disableMotion = ['off', '0', 'false'].includes(motionPreference ?? '')
	const forceMotion = ['on', '1', 'true', 'full'].includes(
		motionPreference ?? ''
	)
	const prefersReducedMotion = prefersReducedMotionSetting && !forceMotion
	const motionIntensity = disableMotion ? 0 : prefersReducedMotion ? 0.35 : 1
	const isMobile =
		'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
	const skipIntroAnimation = ['1', 'true'].includes(
		searchParams.get('skipIntro')?.toLowerCase() ?? 'false'
	)

	const overlay = document.getElementById('overlay')
	const existingCanvas = app.querySelector('canvas.webgl')
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

	existingCanvas?.remove()

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
	camera.position.x = pageView.camera.x
	camera.position.y = pageView.camera.y
	camera.position.z = pageView.camera.z
	scene.add(camera)

	const renderer = new WebGLRenderer({ alpha: true, antialias: !isMobile })
	renderer.setClearColor(0x000000, 0)
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
		pointsMaterial.uniforms.uSize.value =
			pageView.pointSize * renderer.getPixelRatio()
	}

	const parameters = {
		count: disableMotion
			? 18000
			: prefersReducedMotion
				? 28000
				: isMobile
					? 76000
					: 126000,
		size: 0.005,
		radius: 1.75,
		branches: 6,
		spin: 1,
		randomness: 0.78,
		insideColor: '#ffffff',
		outsideColor: pageView.outsideColor,
		swirlRatio: pageView.swirlRatio,
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
			uSize: { value: pageView.pointSize * renderer.getPixelRatio() },
		},
	})

	const points = new Points(pointsGeometry, pointsMaterial)
	points.rotation.set(
		pageView.rotation.x,
		pageView.rotation.y,
		pageView.rotation.z
	)
	camera.lookAt(points.position)
	scene.add(points)

	const clock = new Clock()

	const tick = () => {
		if (clock.getElapsedTime() > 600) clock.start()

		const elapsedTime = clock.getElapsedTime()
		pointsMaterial.uniforms.uTime.value =
			(400 + elapsedTime * Math.max(motionIntensity, 0.16)) / parameters.swirlRatio

		renderer.render(scene, camera)
		window.requestAnimationFrame(tick)
	}

	if (disableMotion) {
		renderer.render(scene, camera)
	} else {
		tick()
	}

	ScrollTrigger.defaults({
		immediateRender: false,
	})

	const navEl = document.querySelector('nav')

	if (navEl && !prefersReducedMotion && !disableMotion) {
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

		if (prefersReducedMotion || disableMotion) {
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

	if (!disableMotion) {
		gsap.to(camera.position, {
			x: pageView.camera.x + pageView.drift.x * motionIntensity,
			y: pageView.camera.y + pageView.drift.y * motionIntensity,
			duration: prefersReducedMotion ? 24 : 14,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		})

		gsap.to(points.rotation, {
			x: pageView.rotation.x + pageView.drift.z * motionIntensity,
			duration: prefersReducedMotion ? 30 : 18,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		})

		gsap.to(points.rotation, {
			y: `+=${Math.PI * 2}`,
			duration: prefersReducedMotion ? 64 : 36,
			repeat: -1,
			ease: 'none',
		})
	}

	if (!prefersReducedMotion && !disableMotion) {
		/* Hero entrance animations */
		const heroContent = document.querySelector('.hero-content')
		const heroStats = document.querySelector('.hero-stats')
		const heroScroll = document.querySelector('.hero-scroll')

		if (heroContent) {
			const heroEyebrow = heroContent.querySelector('.hero-eyebrow')
			const heroTitle = heroContent.querySelector('.hero-title')
			const heroArabic = heroContent.querySelector('.hero-arabic')
			const heroSummary = heroContent.querySelector('.hero-summary')

			const heroTl = gsap.timeline({ delay: overlay ? 2 : 0.3 })

			if (heroEyebrow) {
				heroTl.from(heroEyebrow, {
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: 'expo.out',
				}, 0)
			}
			if (heroTitle) {
				heroTl.from(heroTitle.children, {
					y: 40,
					opacity: 0,
					duration: 1,
					ease: 'expo.out',
					stagger: 0.12,
				}, 0.1)
			}
			if (heroArabic) {
				heroTl.from(heroArabic, {
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: 'expo.out',
				}, 0.4)
			}
			if (heroSummary) {
				heroTl.from(heroSummary, {
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: 'expo.out',
				}, 0.5)
			}
			if (heroStats) {
				heroTl.from(heroStats, {
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: 'expo.out',
				}, 0.6)
			}
			if (heroScroll) {
				heroTl.from(heroScroll, {
					opacity: 0,
					duration: 1.2,
					ease: 'power2.out',
				}, 0.9)
			}
		}

		document
			.querySelectorAll(
				'.section-heading, .about-label, .intro-aside, .intro-copy, .card, .section-container, .research-item, .footer-item'
			)
			.forEach((element) => {
				gsap.from(element, {
					y: 36,
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

	if (!prefersReducedMotion && !disableMotion) {
		const galaxyTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1.1,
			},
		})

		galaxyTimeline
			.to(camera.position, { z: pageView.scrollCamera.z, ease: 'none' }, 0)
			.to(
				points.rotation,
				{
					x: pageView.scrollRotation.x,
					z: pageView.scrollRotation.z,
					ease: 'none',
				},
				0
			)
			.to(
				pointsMaterial.uniforms.uSize,
				{ value: (pageView.pointSize + 3.5) * renderer.getPixelRatio(), ease: 'none' },
				0
			)
			.to(
				parameters,
				{ swirlRatio: Math.max(5, pageView.swirlRatio * 0.18), ease: 'none' },
				0
			)
	}

	const copyrightYear = document.getElementById('copyright-year')

	if (copyrightYear) {
		copyrightYear.textContent = new Date().getFullYear().toString()
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeSite, {
		once: true,
	})
} else {
	initializeSite()
}