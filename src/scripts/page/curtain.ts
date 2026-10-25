import { gsap } from 'gsap'
import type Lenis from 'lenis'
import { reducedMotion, root } from './env'

/*
 * The curtain: a sheet of night over the whole page (styled inline in
 * BaseLayout, so it is there from the first paint).
 *
 * - On arrival it holds a single breathing star while the page gets ready,
 *   then the sky fades in behind it.
 * - For an in-page link, night rises from the bottom and covers the page, the
 *   destination's heading rises on it exactly where the real heading will be,
 *   the page jumps there underneath, and the night lifts off the top. The copy
 *   stays put as the edge passes, so it reads as the same heading throughout.
 */

const curtain = document.querySelector<HTMLElement>('[data-curtain]')
const stage = curtain?.querySelector<HTMLElement>('[data-curtain-stage]')
const star = curtain?.querySelector<HTMLElement>('.curtain__star')
let busy = true

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
const nextFrames = (count = 2) =>
	new Promise<void>((resolve) => {
		const step = () => (--count <= 0 ? resolve() : requestAnimationFrame(step))
		requestAnimationFrame(step)
	})
const settle = (animation: gsap.core.Animation) => new Promise<void>((resolve) => animation.eventCallback('onComplete', () => resolve()))

function open() {
	if (!curtain) return
	star?.remove() // only ever part of the arrival
	curtain.dataset.state = 'open'
	gsap.set(curtain, { clearProps: 'clipPath,opacity,visibility' })
	stage?.replaceChildren()
	busy = false
}

/* -------------------------------------------------------------------------- */
/* Arrival                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Lifts the arrival curtain once `ready` resolves, but never before 0.6s
 * after navigation (so it never flickers) and never after 3s (so a slow
 * device still gets in). `onLift` runs as the sky starts to show.
 */
export async function liftArrivalCurtain(ready: Promise<unknown>, lenis: Lenis | null, onLift: () => void) {
	if (!curtain || root.classList.contains('skip-intro')) {
		open()
		onLift()
		return
	}
	// If the script arrived after the CSS failsafe already lifted it, leave it be.
	if (getComputedStyle(curtain).visibility === 'hidden') {
		open()
		onLift()
		return
	}
	lenis?.stop()
	await Promise.race([ready, wait(Math.max(0, 3000 - performance.now()))])
	await wait(Math.max(0, 600 - performance.now()))
	// From here the script owns it; cancel the failsafe without a jump.
	gsap.set(curtain, { opacity: getComputedStyle(curtain).opacity })
	curtain.style.animation = 'none'

	const fade = reducedMotion ? 0.25 : 1.1
	const lift = gsap.timeline({ onComplete: open })
	if (star) {
		// Its breathing is a CSS animation, which would override the fade.
		gsap.set(star, { opacity: getComputedStyle(star).opacity, scale: new DOMMatrix(getComputedStyle(star).transform).a })
		star.style.animation = 'none'
		lift.to(star, { opacity: 0, scale: 2.4, duration: fade * 0.6, ease: 'power2.out' }, 0)
	}
	lift.to(curtain, { opacity: 0, duration: fade, ease: 'power2.inOut' }, reducedMotion ? 0 : 0.15)
	// At the very start, so anything onLift hides (her name, about to rise) is
	// hidden before the night thins.
	lift.call(() => {
		lenis?.start()
		onLift()
	}, [], 0)
}

/* -------------------------------------------------------------------------- */
/* Travel                                                                      */
/* -------------------------------------------------------------------------- */

interface Journey {
	/** The scroll position to land on. */
	y: number
	/** Shown on the curtain where it will be after the jump, if it lands in view. */
	match: HTMLElement | null
	lenis: Lenis | null
	/** Runs under the curtain, just before the jump (e.g. closing the menu). */
	beforeJump?: () => void
	/** Runs under the curtain, right after the jump (e.g. settling the heading). */
	afterJump?: () => void
}

/**
 * Where `element`'s top will be in the viewport once the page has scrolled to
 * `y`. Inside a chapter's sticky stage that lands within the chapter's pinned
 * stretch, the stage will be held at the top of the screen.
 */
function predictTop(element: HTMLElement, y: number) {
	const box = element.getBoundingClientRect()
	const stage = element.closest<HTMLElement>('.chapter__stage')
	const chapter = stage?.parentElement
	if (stage && chapter) {
		const start = chapter.getBoundingClientRect().top + window.scrollY
		const end = start + chapter.offsetHeight - stage.offsetHeight
		if (y >= start && y <= end) return box.top - stage.getBoundingClientRect().top
	}
	return box.top + window.scrollY - y
}

/** A copy of `source` placed on the curtain at the given viewport position. */
function mirror(source: HTMLElement, left: number, top: number, width: number) {
	const copy = source.cloneNode(true) as HTMLElement
	copy.removeAttribute('id')
	copy.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'))
	copy.style.cssText = `position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; margin: 0;`
	// The source may be mid-animation or not yet revealed; the copy starts clean.
	copy.querySelectorAll<HTMLElement>('[style]').forEach((element) => element.removeAttribute('style'))
	stage!.replaceChildren(copy)
	return copy
}

export const travelling = () => busy

export async function travel({ y, match, lenis, beforeJump, afterJump }: Journey) {
	if (!curtain || !stage || busy) return
	busy = true
	lenis?.stop()

	// The heading, where it will be once the page has jumped (if that's on screen).
	let copy: HTMLElement | null = null
	if (match && !reducedMotion) {
		const box = match.getBoundingClientRect()
		const top = predictTop(match, y)
		if (top >= 0 && top + box.height <= window.innerHeight) copy = mirror(match, box.left, top, box.width)
	}
	const words = copy ? Array.from(copy.querySelectorAll<HTMLElement>('.w > span')) : []
	const extras = copy ? Array.from(copy.querySelectorAll<HTMLElement>('.section-head__arabic')) : []

	// Cover: night rises from the bottom; the heading rises from its masks on it.
	if (reducedMotion) gsap.set(curtain, { opacity: 0 })
	else gsap.set(curtain, { clipPath: 'inset(100% 0% 0% 0%)' })
	gsap.set(words, { yPercent: 130 })
	gsap.set(extras, { opacity: 0, y: 12 })
	curtain.dataset.state = 'travel'

	const cover = reducedMotion
		? gsap.to(curtain, { opacity: 1, duration: 0.15, ease: 'power1.out' })
		: gsap.to(curtain, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.inOut' })
	const heading = gsap
		.timeline()
		.to(words, { yPercent: 0, duration: 0.7, stagger: 0.03, ease: 'expo.out' }, 0.25)
		.to(extras, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.38)
	await settle(cover)

	// Jump while covered, then let the page draw itself at the new place.
	beforeJump?.()
	lenis?.stop()
	if (lenis) lenis.scrollTo(y, { immediate: true, force: true })
	else window.scrollTo(0, y)
	afterJump?.()
	await nextFrames(2)

	// The real heading should be exactly under the copy; correct any drift quietly.
	if (copy && match) {
		const box = match.getBoundingClientRect()
		const placed = copy.getBoundingClientRect()
		if (Math.abs(box.top - placed.top) > 0.5 || Math.abs(box.left - placed.left) > 0.5) {
			gsap.to(copy, { left: box.left, top: box.top, duration: 0.25, ease: 'power2.out' })
		}
	}
	if (heading.progress() < 1) await settle(heading)
	else await wait(120)

	// Reveal: the night lifts off the top; the copy stays as the edge passes it.
	const reveal = reducedMotion
		? gsap.to(curtain, { opacity: 0, duration: 0.25, ease: 'power1.in' })
		: gsap.to(curtain, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.7, ease: 'power3.inOut' })
	await settle(reveal)
	open()
	lenis?.start()
}

// A page restored from the back/forward cache must never come back covered.
window.addEventListener('pageshow', (event) => {
	if (event.persisted) open()
})
