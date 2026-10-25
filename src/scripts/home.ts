import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createCosmos, type CosmosFrame } from './galaxy'

gsap.registerPlugin(ScrollTrigger)

const root = document.documentElement
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const skipIntro = root.classList.contains('skip-intro')

/* -------------------------------------------------------------------------- */
/* Chapters: sticky, scroll-scrubbed scenes over the particle canvas.          */
/* -------------------------------------------------------------------------- */

interface Chapter {
	element: HTMLElement
	name: string
	start: number
	height: number
	/** Scroll distance while the stage is pinned */
	length: number
	/** Text choreography, scrubbed by the chapter's progress. */
	timeline: gsap.core.Timeline
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)
/** Maps `value` from [a, b] onto [0, 1], clamped. */
const span = (value: number, a: number, b: number) => clamp((value - a) / (b - a))

/** Each [data-beat="enter,exit"] rises from its masks at `enter` and leaves at `exit`. */
function buildBeats(element: HTMLElement) {
	const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
	timeline.set({}, {}, 1) // normalise duration to 1

	element.querySelectorAll<HTMLElement>('[data-beat]').forEach((beat) => {
		const [enter, exit] = (beat.dataset.beat ?? '0,1').split(',').map(Number)
		const words = beat.querySelectorAll('.w > span')
		// Small print, such as a list of links, fades rather than rising word by word.
		const fades = beat.querySelectorAll('[data-fade]')
		const duration = 0.07

		if (enter > 0) {
			timeline.fromTo(
				words,
				{ yPercent: 130 },
				{ yPercent: 0, duration, stagger: 0.004, ease: 'power3.out' },
				enter - duration
			)
			if (fades.length) {
				timeline.fromTo(
					fades,
					{ autoAlpha: 0, y: 12 },
					{ autoAlpha: 1, y: 0, duration, stagger: 0.008, ease: 'power2.out' },
					enter - duration * 0.5
				)
			}
		}
		if (exit < 1) {
			timeline.fromTo(
				words,
				{ yPercent: 0 },
				{
					yPercent: -130,
					duration,
					stagger: 0.003,
					ease: 'power3.in',
					immediateRender: false,
				},
				exit - duration
			)
			if (fades.length) {
				timeline.fromTo(
					fades,
					{ autoAlpha: 1, y: 0 },
					{ autoAlpha: 0, y: -12, duration, ease: 'power2.in', immediateRender: false },
					exit - duration
				)
			}
		}
	})
	return timeline
}

function initializeHomePage() {
	const canvas = document.querySelector<HTMLCanvasElement>('canvas.cosmos')
	const cosmos = canvas ? createCosmos(canvas) : null
	if (!cosmos) root.classList.add('no-webgl')

	const chapters: Chapter[] = Array.from(
		document.querySelectorAll<HTMLElement>('[data-chapter]'),
		(element) => ({
			element,
			name: element.dataset.chapter ?? '',
			start: 0,
			height: 0,
			length: 1,
			timeline: buildBeats(element),
		})
	)
	const byName = (name: string) => chapters.find((c) => c.name === name)
	root.classList.add('beats-ready')

	const measure = () => {
		chapters.forEach((chapter) => {
			chapter.start = chapter.element.getBoundingClientRect().top + window.scrollY
			chapter.height = chapter.element.offsetHeight
			// The pinned distance is the track minus the sticky stage (100svh), not
			// minus innerHeight, which grows when a phone's toolbar collapses.
			const stage = chapter.element.firstElementChild as HTMLElement | null
			chapter.length = Math.max(chapter.height - (stage?.offsetHeight ?? window.innerHeight), 1)
		})
	}
	measure()
	new ResizeObserver(() => {
		measure()
		cosmos?.resize()
		ScrollTrigger.refresh()
	}).observe(document.body)

	const progress = (chapter: Chapter | undefined, y: number) =>
		chapter ? clamp((y - chapter.start) / chapter.length) : 0

	/** The whole scene as a pure function of scroll position. */
	const frame: CosmosFrame = { intro: 0, stage: 0, earthTurn: 0, groundTravel: 0, moonTurn: 0 }

	function compose(y: number) {
		const earth = byName('earth')
		const ground = byName('ground')
		const home = byName('home')
		const pEarth = progress(earth, y)
		const pGround = progress(ground, y)
		const pHome = progress(home, y)
		const moon = byName('moon')
		const pMoon = progress(moon, y)
		// Morphs begin as the chapter slides into view, so they're never missed.
		const arriving = (chapter: Chapter | undefined) =>
			!!chapter && y >= chapter.start - window.innerHeight

		// The galaxy finishes winding just before About slides over it.
		frame.intro = reducedMotion ? 1 : span(progress(byName('cosmos'), y), 0.1, 0.9)
		if (arriving(home)) frame.stage = 3 + span(pHome, 0, 0.6)
		else if (arriving(moon)) frame.stage = 2 + span(pMoon, 0, 0.45)
		else if (arriving(ground)) frame.stage = 1 + span(pGround, 0, 0.45)
		else if (arriving(earth)) frame.stage = span(pEarth, 0, 0.4)
		else frame.stage = 0
		frame.earthTurn = arriving(ground) ? 1 : span(pEarth, 0.25, 0.9)
		frame.groundTravel = span(pGround, 0.35, 1)
		frame.moonTurn = span(pMoon, 0.2, 1)

		if (reducedMotion) frame.stage = Math.round(frame.stage)

		chapters.forEach((chapter) => chapter.timeline.progress(progress(chapter, y)))

		// The nav reads dark on paper and light over the night chapters.
		const probe = y + 30
		root.classList.toggle(
			'on-paper',
			!chapters.some((c) => probe >= c.start && probe < c.start + c.height)
		)
	}

	/** Only draw while some chapter is on screen; paper sections cover the rest. */
	const chapterVisible = (y: number) =>
		chapters.some(
			(chapter) =>
				y + window.innerHeight > chapter.start && y < chapter.start + chapter.height
		)

	/* ---------------------------------------------------------------------- */
	/* One loop: smooth scroll → scroll-driven animation → WebGL               */
	/* ---------------------------------------------------------------------- */

	const lenis = reducedMotion ? null : new Lenis({ lerp: 0.1, smoothWheel: true })
	lenis?.on('scroll', ScrollTrigger.update)

	let last = performance.now()
	let y = window.scrollY
	let settling = false
	gsap.ticker.add(() => {
		const now = performance.now()
		const delta = Math.min((now - last) / 1000, 0.1)
		last = now

		lenis?.raf(now)
		// Lenis glides in fractions of a pixel, but the browser rounds its scroll
		// position to device pixels, which would turn the end of every glide into
		// steps. Follow Lenis instead, and finish its last fraction of a pixel
		// (which it snaps) at the same rate rather than in one jump.
		if (lenis?.isScrolling === 'smooth') {
			y = lenis.animatedScroll
			settling = true
		} else if (settling && Math.abs(window.scrollY - y) < 1) {
			y += (window.scrollY - y) * (1 - Math.exp(-6 * delta))
			if (Math.abs(window.scrollY - y) < 0.002) settling = false
		} else {
			y = window.scrollY
			settling = false
		}
		compose(y)
		if (cosmos && chapterVisible(y)) {
			cosmos.render(frame, delta)
		}
	})
	gsap.ticker.lagSmoothing(0)

	introduceName()
	revealOnScroll()
	initializeNavigation(lenis)
	initializeShowMore()
	initializeFilters()
	initializePreview()

	document.fonts?.ready.then(() => {
		measure()
		ScrollTrigger.refresh()
	})
}

/* -------------------------------------------------------------------------- */
/* Intro: the one letter-level moment                                          */
/* -------------------------------------------------------------------------- */

function introduceName() {
	if (skipIntro || reducedMotion || window.scrollY > window.innerHeight * 0.5) return
	const letters = document.querySelectorAll('.hero__name .ch')
	const rest = document.querySelectorAll('.hero__role .w > span, .hero__arabic .w > span')
	gsap.from(letters, {
		yPercent: 130,
		duration: 1.6,
		stagger: 0.035,
		ease: 'expo.out',
		delay: 0.15,
	})
	gsap.from(rest, { yPercent: 130, duration: 1.2, stagger: 0.03, ease: 'expo.out', delay: 0.7 })
}

/* -------------------------------------------------------------------------- */
/* Paper sections: headings rise once; everything else simply fades in.        */
/* -------------------------------------------------------------------------- */

function revealOnScroll() {
	if (reducedMotion) return

	gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((element) => {
		if (element.getBoundingClientRect().bottom < 0) return
		const words = element.querySelectorAll('.w > span')
		gsap.set(words, { yPercent: 130 })
		ScrollTrigger.create({
			trigger: element,
			start: 'top 85%',
			once: true,
			onEnter: () =>
				gsap.to(words, { yPercent: 0, duration: 1.3, stagger: 0.06, ease: 'expo.out' }),
		})
	})

	const pending = gsap.utils
		.toArray<HTMLElement>('[data-reveal]')
		.filter((element) => element.getBoundingClientRect().bottom > 0)
	gsap.set(pending, { opacity: 0 })
	ScrollTrigger.batch(pending, {
		start: 'top 90%',
		once: true,
		onEnter: (batch) =>
			gsap.to(batch, { opacity: 1, duration: 1, stagger: 0.05, ease: 'power2.out' }),
	})
}

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

function initializeNavigation(lenis: Lenis | null) {
	const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
	const scrollTo = (hash: string) => {
		const target = hash === '#top' ? 0 : document.querySelector<HTMLElement>(hash)
		if (target === null) return
		const list = target && target.closest<HTMLElement>('[data-collapsible]')
		if (list && target.closest('[data-extra]')) openList(list)
		if (lenis) lenis.scrollTo(target, { duration: 1.6, force: true })
		else if (target === 0) window.scrollTo({ top: 0 })
		else target.scrollIntoView()
		history.replaceState(null, '', hash === '#top' ? location.pathname : hash)
	}

	links.forEach((link) =>
		link.addEventListener('click', (event) => {
			const hash = link.getAttribute('href')!
			if (hash.length < 2) return
			event.preventDefault()
			setMenu(false)
			scrollTo(hash)
		})
	)

	// Mark the section in view.
	const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
	navLinks.forEach((link) => {
		const section = document.querySelector(link.getAttribute('href')!)
		if (!section) return
		ScrollTrigger.create({
			trigger: section,
			start: 'top 40%',
			end: 'bottom 40%',
			onToggle: (self) => {
				if (self.isActive) link.setAttribute('aria-current', 'true')
				else link.removeAttribute('aria-current')
			},
		})
	})

	const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]')
	const menu = document.getElementById('menu')

	function setMenu(open: boolean) {
		if (!toggle || !menu) return
		toggle.setAttribute('aria-expanded', String(open))
		root.classList.toggle('menu-open', open)
		menu.toggleAttribute('inert', !open)
		if (open) lenis?.stop()
		else lenis?.start()
	}

	if (!toggle || !menu) return
	menu.toggleAttribute('inert', true)
	toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'))
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && root.classList.contains('menu-open')) {
			setMenu(false)
			toggle.focus()
		}
	})
}

/* -------------------------------------------------------------------------- */
/* Long lists that open on request                                             */
/* -------------------------------------------------------------------------- */

function openList(list: HTMLElement, focus = false) {
	if (list.hasAttribute('data-open')) return
	const extras = list.querySelectorAll<HTMLElement>('[data-extra]')
	list.toggleAttribute('data-open', true)

	const button = document.querySelector<HTMLButtonElement>(`[data-more="${list.id}"]`)
	button?.setAttribute('aria-expanded', 'true')
	if (button) button.hidden = true

	// The button is gone, so keyboard focus continues at the first new item.
	const first = extras[0]
	if (focus && first) {
		const target = first.querySelector<HTMLElement>('a') ?? first
		if (target === first) first.tabIndex = -1
		target.focus({ preventScroll: true })
	}

	if (!reducedMotion) {
		gsap.from(extras, { opacity: 0, duration: 0.8, stagger: 0.04, ease: 'power2.out' })
	}
	ScrollTrigger.refresh()
}

function initializeShowMore() {
	document.querySelectorAll<HTMLButtonElement>('[data-more]').forEach((button) => {
		const list = document.getElementById(button.dataset.more!)
		if (list) button.addEventListener('click', () => openList(list, true))
	})
}

/* -------------------------------------------------------------------------- */
/* Publications filter                                                         */
/* -------------------------------------------------------------------------- */

function initializeFilters() {
	const group = document.querySelector<HTMLElement>('[data-filters]')
	if (!group) return
	const buttons = group.querySelectorAll<HTMLButtonElement>('[data-filter]')
	const years = document.querySelectorAll<HTMLElement>('[data-year-group]')

	buttons.forEach((button) =>
		button.addEventListener('click', () => {
			const list = document.getElementById('publication-list')
			if (list) openList(list)
			const group = button.dataset.filter
			buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)))
			years.forEach((year) => {
				let shown = 0
				year.querySelectorAll<HTMLElement>('[data-group]').forEach((row) => {
					const match = group === 'all' || row.dataset.group === group
					row.hidden = !match
					if (match) shown++
				})
				year.hidden = shown === 0
			})
			ScrollTrigger.refresh()
		})
	)
}

/* -------------------------------------------------------------------------- */
/* Interview preview that follows the cursor                                   */
/* -------------------------------------------------------------------------- */

function initializePreview() {
	const frame = document.querySelector<HTMLElement>('[data-preview-frame]')
	const image = frame?.querySelector('img')
	if (!frame || !image || !window.matchMedia('(hover: hover)').matches) return

	const position = { x: 0, y: 0 }
	const target = { x: 0, y: 0 }
	let active = false

	document.querySelectorAll<HTMLElement>('[data-preview]').forEach((link) => {
		link.addEventListener('pointerenter', (event) => {
			image.src = link.dataset.preview!
			frame.style.setProperty('--ratio', link.dataset.previewRatio ?? '1.6')
			if (!active) {
				position.x = target.x = event.clientX
				position.y = target.y = event.clientY
			}
			active = true
			frame.style.opacity = '1'
			frame.style.scale = '1'
		})
		link.addEventListener('pointerleave', () => {
			active = false
			frame.style.opacity = '0'
			frame.style.scale = '0.92'
		})
	})

	window.addEventListener(
		'pointermove',
		(event) => {
			target.x = event.clientX
			target.y = event.clientY
		},
		{ passive: true }
	)

	gsap.ticker.add(() => {
		if (!active && frame.style.opacity === '0') return
		position.x += (target.x - position.x) * 0.16
		position.y += (target.y - position.y) * 0.16
		frame.style.transform = `translate3d(${position.x + 24}px, ${position.y}px, 0) translateY(-50%)`
	})
}

initializeHomePage()
