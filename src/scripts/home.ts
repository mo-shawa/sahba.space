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
	/** Text choreography, set from the chapter's progress. */
	beats: Beat[]
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)
/** Maps `value` from [a, b] onto [0, 1], clamped. */
const span = (value: number, a: number, b: number) => clamp((value - a) / (b - a))

/** Each [data-beat="enter,exit"] rises from its masks at `enter` and leaves at `exit`. */
/*
 * Chapter text. Each [data-beat="enter,exit"] rises in word by word from a
 * mask as the chapter's progress passes `enter`, and leaves upward at `exit`;
 * small print ([data-fade]) fades instead. Everything is a function of
 * progress, written only when it changes, and nothing carries a transform
 * unless it is moving: a resting word has none, and a hidden beat is hidden
 * as a whole. Hundreds of standing transforms inside sticky stages made every
 * hover check during a scroll cost several milliseconds.
 */
interface Beat {
	element: HTMLElement
	enter: number
	exit: number
	words: HTMLElement[]
	fades: HTMLElement[]
	/** Last written value per word (yPercent) and per fade (opacity), to skip repeats. */
	wordState: Float32Array
	fadeState: Float32Array
	shown: boolean | null
}

const BEAT = { duration: 0.07, enterStagger: 0.004, exitStagger: 0.003, fadeStagger: 0.008 }
// GSAP's curves, which the beats were tuned with: powerN is x^(N+1).
const power3Out = (t: number) => 1 - (1 - t) ** 4
const power3In = (t: number) => t ** 4
const power2Out = (t: number) => 1 - (1 - t) ** 3
const power2In = (t: number) => t ** 3

function readBeats(chapter: HTMLElement): Beat[] {
	return Array.from(chapter.querySelectorAll<HTMLElement>('[data-beat]'), (element) => {
		const [enter, exit] = (element.dataset.beat ?? '0,1').split(',').map(Number)
		const words = Array.from(element.querySelectorAll<HTMLElement>('.w > span'))
		const fades = Array.from(element.querySelectorAll<HTMLElement>('[data-fade]'))
		const beat: Beat = {
			element,
			enter,
			exit,
			words,
			fades,
			wordState: new Float32Array(words.length).fill(NaN),
			fadeState: new Float32Array(fades.length).fill(NaN),
			shown: null,
		}
		// Until the first frame places it, a later beat starts hidden.
		if (enter > 0) showBeat(beat, false)
		return beat
	})
}

function showBeat(beat: Beat, shown: boolean) {
	if (beat.shown === shown) return
	beat.shown = shown
	beat.element.style.opacity = shown ? '' : '0'
	beat.element.style.pointerEvents = shown ? '' : 'none'
}

/** Where word `i` sits (yPercent) at chapter progress p: 130 below, 0 in place, -130 gone. */
function wordAt(beat: Beat, i: number, p: number) {
	const { duration, enterStagger, exitStagger } = BEAT
	if (beat.exit < 1) {
		const leave = (p - (beat.exit - duration + i * exitStagger)) / duration
		if (leave > 0) return -130 * power3In(Math.min(leave, 1))
	}
	if (beat.enter <= 0) return 0
	const arrive = (p - (beat.enter - duration + i * enterStagger)) / duration
	return 130 * (1 - power3Out(Math.min(Math.max(arrive, 0), 1)))
}

/** Opacity of small print `i` at progress p (its lift follows the same curve). */
function fadeAt(beat: Beat, i: number, p: number) {
	const { duration, fadeStagger } = BEAT
	if (beat.exit < 1) {
		const leave = (p - (beat.exit - duration)) / duration
		if (leave > 0) return -power2In(Math.min(leave, 1))
	}
	if (beat.enter <= 0) return 1
	const arrive = (p - (beat.enter - duration * 0.5 + i * fadeStagger)) / duration
	return power2Out(Math.min(Math.max(arrive, 0), 1))
}

function placeBeats(beats: Beat[], p: number) {
	for (const beat of beats) {
		let moving = false
		let visible = false
		for (let i = 0; i < beat.words.length; i++) {
			const y = wordAt(beat, i, p)
			if (y > -130 && y < 130) visible = true
			if (y !== 0 && Math.abs(y) !== 130) moving = true
		}
		for (let i = 0; i < beat.fades.length; i++) {
			const f = fadeAt(beat, i, p)
			const alpha = f >= 0 ? f : 1 + f
			if (alpha > 0) visible = true
			if (alpha > 0 && alpha < 1) moving = true
		}
		if (!beat.words.length && !beat.fades.length) visible = true

		showBeat(beat, visible)
		// A hidden or resting beat clears its words; only a moving one sets them.
		for (let i = 0; i < beat.words.length; i++) {
			const y = visible && moving ? wordAt(beat, i, p) : 0
			if (beat.wordState[i] === y) continue
			beat.wordState[i] = y
			beat.words[i].style.transform = y === 0 ? '' : `translateY(${y}%)`
		}
		for (let i = 0; i < beat.fades.length; i++) {
			const f = visible ? fadeAt(beat, i, p) : 1
			if (beat.fadeState[i] === f) continue
			beat.fadeState[i] = f
			const style = beat.fades[i].style
			// Positive: arriving (lifting from below); negative: leaving upward.
			const alpha = f >= 0 ? f : 1 + f
			const lift = f >= 0 ? 12 * (1 - f) : 12 * f
			style.opacity = alpha === 1 ? '' : String(alpha)
			style.visibility = alpha === 0 ? 'hidden' : ''
			style.transform = lift === 0 ? '' : `translateY(${lift}px)`
		}
	}
}

/** While a list animates its height, the page measures once at the end, not every frame. */
let layoutHeld = false
let relayout = () => {}

function holdLayout(hold: boolean) {
	layoutHeld = hold
	if (!hold) relayout()
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
			beats: readBeats(element),
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
	relayout = () => {
		measure()
		cosmos?.resize()
		ScrollTrigger.refresh()
	}
	new ResizeObserver(() => {
		if (!layoutHeld) relayout()
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

/* -------------------------------------------------------------------------- */
/* Images: fetched and decoded while the page is idle, not mid-scroll           */
/* -------------------------------------------------------------------------- */

/**
 * The page's images are lazy, so the first paint stays light. Once it has
 * loaded and settled, they all come in at low priority, one after another, and
 * are decoded off the main thread, so none arrives while someone is scrolling.
 * The interview previews (shown on hover) are warmed the same way.
 */
function warmImages() {
	const idle = (callback: () => void) =>
		'requestIdleCallback' in window ? requestIdleCallback(callback, { timeout: 2500 }) : setTimeout(callback, 1200)

	const start = () =>
		idle(async () => {
			const images = Array.from(document.images).filter((image) => image.loading === 'lazy')
			const previews = Array.from(
				document.querySelectorAll<HTMLElement>('[data-preview]'),
				(link) => link.dataset.preview!
			)
			for (const image of images) {
				image.fetchPriority = 'low'
				image.loading = 'eager'
				await image.decode().catch(() => {})
			}
			for (const source of previews) {
				const image = new Image()
				image.fetchPriority = 'low'
				image.src = source
				await image.decode().catch(() => {})
			}
		})

	if (document.readyState === 'complete') start()
	else window.addEventListener('load', start, { once: true })
}

/* -------------------------------------------------------------------------- */
/* Intro: the one letter-level moment                                          */
/* -------------------------------------------------------------------------- */

function introduceName() {
	if (skipIntro || reducedMotion || window.scrollY > window.innerHeight * 0.5) return
	const letters = document.querySelectorAll('.hero__name .ch')
	const rest = document.querySelectorAll('.hero__role .w > span, .hero__arabic .w > span')
	// Once in place, the letters drop their transforms (see placeBeats).
	gsap.from(letters, {
		yPercent: 130,
		duration: 1.6,
		stagger: 0.035,
		ease: 'expo.out',
		delay: 0.15,
		clearProps: 'transform',
	})
	gsap.from(rest, {
		yPercent: 130,
		duration: 1.2,
		stagger: 0.03,
		ease: 'expo.out',
		delay: 0.7,
		clearProps: 'transform',
	})
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
				gsap.to(words, { yPercent: 0, duration: 1.3, stagger: 0.06, ease: 'expo.out', clearProps: 'transform' }),
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

/**
 * Opens a long list. The list grows to its full height while the new items
 * rise in, and the "show more" button folds away, spacing included, so
 * nothing below jumps. `quiet` leaves the list itself to the caller (the
 * filters animate it) and only folds the button.
 */
function openList(list: HTMLElement, focus = false, quiet = false) {
	if (list.hasAttribute('data-open')) return
	const extras = Array.from(list.querySelectorAll<HTMLElement>('[data-extra]'))
	const startHeight = list.offsetHeight
	list.toggleAttribute('data-open', true)
	if (list.id === 'publication-list') resetPublicationHover()

	const button = document.querySelector<HTMLButtonElement>(`[data-more="${list.id}"]`)
	const holder = button?.parentElement ?? null
	button?.setAttribute('aria-expanded', 'true')

	// The button is going, so keyboard focus continues at the first new item.
	const first = extras[0]
	if (focus && first) {
		const target = first.querySelector<HTMLElement>('a') ?? first
		if (target === first) first.tabIndex = -1
		target.focus({ preventScroll: true })
	}

	const done = () => {
		if (holder) holder.hidden = true
		gsap.set([list, holder, ...extras].filter(Boolean), {
			clearProps: 'height,overflow,opacity,transform,paddingTop,paddingBottom,marginTop',
		})
	}
	if (reducedMotion) {
		done()
		if (!quiet) relayout()
		return
	}

	const fold = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
	if (holder) {
		// Fold the button and the gap above it, whatever the layout around it.
		const gap = parseFloat(getComputedStyle(holder.parentElement!).rowGap) || 0
		fold.to(holder, { height: 0, paddingTop: 0, paddingBottom: 0, marginTop: -gap, opacity: 0, overflow: 'hidden', duration: 0.5 }, 0)
	}
	if (quiet) {
		fold.eventCallback('onComplete', done)
		return
	}

	holdLayout(true)
	const endHeight = list.offsetHeight
	fold.fromTo(list, { height: startHeight, overflow: 'hidden' }, { height: endHeight, duration: 0.75 }, 0)
	fold.fromTo(
		extras,
		{ opacity: 0, y: 16 },
		{ opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out' },
		0.15
	)
	fold.eventCallback('onComplete', () => {
		done()
		holdLayout(false)
	})
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
	const list = document.getElementById('publication-list')
	if (!group || !list) return
	const buttons = group.querySelectorAll<HTMLButtonElement>('[data-filter]')
	const years = Array.from(list.querySelectorAll<HTMLElement>('[data-year-group]'))
	const rows = Array.from(list.querySelectorAll<HTMLElement>('[data-group]'))
	const shown = (element: HTMLElement) => element.getClientRects().length > 0
	const matches = (row: HTMLElement, filter: string) => filter === 'all' || row.dataset.group === filter

	function apply(filter: string) {
		openList(list!, false, true)
		years.forEach((year) => {
			let count = 0
			year.querySelectorAll<HTMLElement>('[data-group]').forEach((row) => {
				row.hidden = !matches(row, filter)
				if (!row.hidden) count++
			})
			year.hidden = count === 0
		})
	}

	// Rows that leave fade out where they are; then the rest glide to their new
	// places, new ones fade in, and the list's height follows (FLIP by hand,
	// since the rows are subgrid items and can't be lifted out of the grid).
	let transition: gsap.core.Animation | null = null
	const finish = () => {
		while (transition) {
			const current = transition
			current.progress(1)
			if (transition === current) transition = null
		}
	}

	function filterTo(filter: string) {
		finish()
		resetPublicationHover()
		if (reducedMotion) {
			apply(filter)
			relayout()
			return
		}

		const before = new Map(
			[...years, ...rows].map((element) => [element, shown(element) ? element.getBoundingClientRect().top : null])
		)
		const leavingRows = rows.filter((row) => shown(row) && !matches(row, filter))
		const leavingYears = years.filter(
			(year) =>
				shown(year) &&
				!Array.from(year.querySelectorAll<HTMLElement>('[data-group]')).some((row) => matches(row, filter))
		)
		const leaving = [...leavingRows, ...leavingYears]
		const startHeight = list!.offsetHeight
		holdLayout(true)

		transition = gsap.to(leaving, {
			opacity: 0,
			duration: leaving.length ? 0.2 : 0,
			ease: 'power1.out',
			onComplete: () => {
				gsap.set(leaving, { clearProps: 'opacity' })
				apply(filter)
				const endHeight = list!.offsetHeight
				// Measure everything before any tween moves something.
				const after = new Map(
					[...years, ...rows].map((element) => [element, shown(element) ? element.getBoundingClientRect().top : null])
				)
				const settle = gsap.timeline({
					// Arrivals wait until the rows that move have mostly landed.
					defaults: { duration: 0.55, ease: 'power3.out' },
					onComplete: () => {
						gsap.set([list!, ...years, ...rows], { clearProps: 'transform,opacity,height' })
						transition = null
						holdLayout(false)
					},
				})
				settle.fromTo(list!, { height: startHeight }, { height: endHeight }, 0)

				for (const year of years) {
					const now = after.get(year) ?? null
					if (now === null) continue
					const was = before.get(year) ?? null
					const yearShift = was === null ? 0 : was - now
					if (was === null) settle.fromTo(year, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.24)
					else if (yearShift) settle.fromTo(year, { y: yearShift }, { y: 0 }, 0)

					for (const row of year.querySelectorAll<HTMLElement>('[data-group]')) {
						const rowNow = after.get(row) ?? null
						if (rowNow === null) continue
						const rowWas = before.get(row) ?? null
						if (rowWas === null) {
							if (was !== null) settle.fromTo(row, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.24)
							continue
						}
						// Relative to its year, which is moving too.
						const rowShift = rowWas - rowNow - yearShift
						if (rowShift) settle.fromTo(row, { y: rowShift }, { y: 0 }, 0)
					}
				}
				transition = settle
			},
		})
	}

	buttons.forEach((button) =>
		button.addEventListener('click', () => {
			buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)))
			filterTo(button.dataset.filter ?? 'all')
		})
	)
}

/* -------------------------------------------------------------------------- */
/* Publications: one ink bar travels from row to row                           */
/* -------------------------------------------------------------------------- */

let resetPublicationHover = () => {}

/**
 * The bar rises in from the edge the pointer came through, glides between
 * rows as it moves, and leaves through the edge it exits by, so it reads as
 * one dark band moving down or up the list.
 */
function initializePublicationHover() {
	const bar = document.querySelector<HTMLElement>('[data-pub-bar]')
	const section = bar?.parentElement?.closest<HTMLElement>('section')
	if (!bar || !section) return
	const rows = Array.from(document.querySelectorAll<HTMLElement>('.pub--link'))
	const duration = reducedMotion ? 0 : 0.5
	let current: HTMLElement | null = null

	const fromTop = (row: HTMLElement, y: number) => {
		const box = row.getBoundingClientRect()
		return y < box.top + box.height / 2
	}

	function enter(row: HTMLElement, viaTop: boolean) {
		const box = row.getBoundingClientRect()
		const y = box.top - section!.getBoundingClientRect().top
		if (current) {
			gsap.to(bar!, { y, height: box.height, scaleY: 1, duration, ease: 'power3.out', overwrite: true })
		} else {
			gsap.set(bar!, { y, height: box.height, scaleY: 0, autoAlpha: 1, transformOrigin: viaTop ? 'top' : 'bottom' })
			gsap.to(bar!, { scaleY: 1, duration, ease: 'power3.out', overwrite: true })
		}
		current = row
	}

	function leave(viaTop: boolean) {
		if (!current) return
		current = null
		gsap.set(bar!, { transformOrigin: viaTop ? 'top' : 'bottom' })
		gsap.to(bar!, {
			scaleY: 0,
			duration,
			ease: 'power3.out',
			overwrite: true,
			onComplete: () => void gsap.set(bar!, { autoAlpha: 0 }),
		})
	}

	resetPublicationHover = () => {
		current = null
		gsap.killTweensOf(bar)
		gsap.set(bar, { autoAlpha: 0, scaleY: 0 })
	}

	for (const row of rows) {
		row.addEventListener('pointerenter', (event) => {
			if (event.pointerType === 'mouse') enter(row, fromTop(row, event.clientY))
		})
		row.addEventListener('pointerleave', (event) => {
			if (event.pointerType !== 'mouse') return
			// Moving onto another paper: its pointerenter carries the bar there.
			const next = (event.relatedTarget as Element | null)?.closest('.pub--link')
			if (!next) leave(fromTop(row, event.clientY))
		})
		row.addEventListener('focusin', () => enter(row, true))
		row.addEventListener('focusout', (event) => {
			if (!(event.relatedTarget as Element | null)?.closest('.pub--link')) leave(false)
		})
	}
}

/* -------------------------------------------------------------------------- */
/* Disclosures (the full testimonials) open and close smoothly                 */
/* -------------------------------------------------------------------------- */

function initializeDisclosures() {
	if (reducedMotion) return
	document.querySelectorAll<HTMLDetailsElement>('details[data-expand]').forEach((details) => {
		const summary = details.querySelector('summary')
		const body = details.querySelector<HTMLElement>('[data-expand-body]')
		if (!summary || !body) return
		let running: gsap.core.Timeline | null = null

		summary.addEventListener('click', (event) => {
			event.preventDefault()
			running?.progress(1)
			const opening = !details.open
			const parts = body.children.length ? Array.from(body.children) : [body]
			const settle = () => {
				gsap.set([body, ...parts], { clearProps: 'height,overflow,marginTop,opacity,transform' })
				running = null
				holdLayout(false)
			}
			holdLayout(true)

			if (opening) {
				details.open = true
				const height = body.offsetHeight
				const margin = getComputedStyle(body).marginTop
				running = gsap
					.timeline({ onComplete: settle })
					.fromTo(
						body,
						{ height: 0, marginTop: 0, overflow: 'hidden' },
						{ height, marginTop: margin, duration: 0.65, ease: 'power3.inOut' }
					)
					.fromTo(
						parts,
						{ opacity: 0, y: 14 },
						{ opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out' },
						0.18
					)
			} else {
				running = gsap
					.timeline({
						onComplete: () => {
							details.open = false
							settle()
						},
					})
					.to(parts, { opacity: 0, duration: 0.25, ease: 'power1.out' })
					.to(
						body,
						{ height: 0, marginTop: 0, overflow: 'hidden', duration: 0.55, ease: 'power3.inOut' },
						0.1
					)
			}
		})
	})
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

	// Follows the cursor only while it's showing, and stops once it has caught up.
	// Eases by time, not by frame, so it trails the same on 60Hz and 120Hz screens.
	gsap.ticker.add((_time, deltaMs) => {
		if (!active && frame.style.opacity === '0') return
		const dx = target.x - position.x
		const dy = target.y - position.y
		if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return
		const follow = 1 - Math.pow(0.84, deltaMs / (1000 / 60))
		position.x += dx * follow
		position.y += dy * follow
		frame.style.transform = `translate3d(${position.x + 24}px, ${position.y}px, 0) translateY(-50%)`
	})
}

initializeHomePage()
