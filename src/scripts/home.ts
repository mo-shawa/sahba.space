/*
 * The home page. Everything visual is a function of one number, the scroll
 * position: each frame, the chapters' text and the particle scene are set
 * from it, in a single loop that also drives the smooth scrolling.
 */
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createCosmos, type CosmosFrame } from './cosmos'
import { placeBeats, readBeats, type Beat } from './page/beats'
import { reducedMotion, root } from './page/env'
import { warmImages } from './page/images'
import { layoutHeld, onRelayout } from './page/layout'
import { initializeDisclosures, initializeShowMore } from './page/lists'
import { initializeNavigation } from './page/navigation'
import { initializePreview } from './page/preview'
import { initializeFilters, initializePublicationHover } from './page/publications'
import { introduceName, revealOnScroll } from './page/reveal'

gsap.registerPlugin(ScrollTrigger)

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
	/** Text choreography, set from the chapter's progress. */
	beats: Beat[]
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)
/** Maps `value` from [a, b] onto [0, 1], clamped. */
const span = (value: number, a: number, b: number) => clamp((value - a) / (b - a))

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
			beats: readBeats(element),
		})
	)
	root.classList.add('beats-ready')
	const byName = (name: string) => chapters.find((c) => c.name === name)
	const cosmosChapter = byName('cosmos')
	const earth = byName('earth')
	const ground = byName('ground')
	const moon = byName('moon')
	const home = byName('home')

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
	const relayout = () => {
		measure()
		cosmos?.resize()
		ScrollTrigger.refresh()
	}
	onRelayout(relayout)
	new ResizeObserver(() => {
		if (!layoutHeld()) relayout()
	}).observe(document.body)

	const progress = (chapter: Chapter | undefined, y: number) =>
		chapter ? clamp((y - chapter.start) / chapter.length) : 0

	/** The whole scene as a pure function of scroll position. */
	const frame: CosmosFrame = { intro: 0, stage: 0, earthTurn: 0, groundTravel: 0, moonTurn: 0 }

	function compose(y: number) {
		const pEarth = progress(earth, y)
		const pGround = progress(ground, y)
		const pMoon = progress(moon, y)
		const pHome = progress(home, y)
		// Morphs begin as the chapter slides into view, so they're never missed.
		const arriving = (chapter: Chapter | undefined) =>
			!!chapter && y >= chapter.start - window.innerHeight

		// The galaxy finishes winding just before About slides over it.
		frame.intro = reducedMotion ? 1 : span(progress(cosmosChapter, y), 0.1, 0.9)
		if (arriving(home)) frame.stage = 3 + span(pHome, 0, 0.6)
		else if (arriving(moon)) frame.stage = 2 + span(pMoon, 0, 0.45)
		else if (arriving(ground)) frame.stage = 1 + span(pGround, 0, 0.45)
		else if (arriving(earth)) frame.stage = span(pEarth, 0, 0.4)
		else frame.stage = 0
		frame.earthTurn = arriving(ground) ? 1 : span(pEarth, 0.25, 0.9)
		frame.groundTravel = span(pGround, 0.35, 1)
		frame.moonTurn = span(pMoon, 0.2, 1)

		if (reducedMotion) frame.stage = Math.round(frame.stage)

		chapters.forEach((chapter) => placeBeats(chapter.beats, progress(chapter, y)))

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
	let lastY = y
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
		const moving = y !== lastY
		lastY = y
		compose(y)
		if (cosmos && chapterVisible(y)) {
			cosmos.render(frame, delta, moving)
		}
	})
	gsap.ticker.lagSmoothing(0)

	introduceName()
	revealOnScroll()
	warmImages()
	initializeNavigation(lenis)
	initializeShowMore()
	initializeFilters()
	initializePublicationHover()
	initializeDisclosures()
	initializePreview()

	document.fonts?.ready.then(() => {
		measure()
		ScrollTrigger.refresh()
	})
}

initializeHomePage()
