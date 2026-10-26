import type Lenis from 'lenis'
import { reducedMotion, root } from './env'

/*
 * The curtain: a sheet of night over the whole page (styled inline in
 * BaseLayout, so it is there from the first paint).
 *
 * - On arrival it holds a single breathing star while the page gets ready,
 *   then the sky fades in behind it.
 * - For an in-page link, the sheet slides up from the bottom and covers the
 *   page, the destination's heading rises on it exactly where the real heading
 *   will be, the page jumps there underneath, and the sheet slides off the top.
 *   The copy is counter-moved inside the sheet so it never moves on screen, and
 *   the sheet's soft edges fade it into the real heading as they pass.
 *
 * Everything moves with transforms and opacity through the Web Animations API,
 * so the browser runs it off the main thread: nothing the page does (the jump,
 * the particle scene) can make it stutter, and it is just as smooth in Safari.
 */

const curtain = document.querySelector<HTMLElement>('[data-curtain]')
const sheet = curtain?.querySelector<HTMLElement>('.curtain__sheet')
const stage = curtain?.querySelector<HTMLElement>('[data-curtain-stage]')
const star = curtain?.querySelector<HTMLElement>('.curtain__star')
let busy = true
let covered = false

// The curves the site's GSAP motion uses (power3.inOut, expo.out, power2.inOut).
const EASE_SWEEP = 'cubic-bezier(0.65, 0, 0.35, 1)'
const EASE_RISE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const EASE_FADE = 'cubic-bezier(0.45, 0, 0.55, 1)'

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
const nextFrames = (count = 2) =>
	new Promise<void>((resolve) => {
		const step = () => (--count <= 0 ? resolve() : requestAnimationFrame(step))
		requestAnimationFrame(step)
	})
const move = (element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) =>
	element.animate(keyframes, { fill: 'both', ...options })

/** True while the page is completely hidden, so the particle scene can skip drawing. */
export const curtainCovered = () => covered
export const travelling = () => busy

function open() {
	if (!curtain) return
	star?.remove() // only ever part of the arrival
	for (const element of [curtain, sheet, stage]) {
		element?.getAnimations().forEach((animation) => animation.cancel())
		element?.removeAttribute('style')
	}
	stage?.replaceChildren()
	curtain.dataset.state = 'open'
	covered = false
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
	// Skipped (?skipIntro), missing, or already lifted by the CSS failsafe.
	if (!curtain || root.classList.contains('skip-intro') || getComputedStyle(curtain).visibility === 'hidden') {
		open()
		onLift()
		return
	}
	lenis?.stop()
	await Promise.race([ready, wait(Math.max(0, 3000 - performance.now()))])
	await wait(Math.max(0, 600 - performance.now()))

	// From here the script owns it: stop the CSS failsafe and the star's
	// breathing where they are, then fade.
	const opacity = getComputedStyle(curtain).opacity
	curtain.style.animation = 'none'
	curtain.style.opacity = opacity
	const fade = reducedMotion ? 250 : 1100
	if (star) {
		const { opacity: starOpacity, transform } = getComputedStyle(star)
		star.style.animation = 'none'
		move(star, [{ opacity: starOpacity, transform }, { opacity: 0, transform: 'scale(2.4)' }], {
			duration: fade * 0.6,
			easing: 'ease-out',
		})
	}
	// Anything onLift hides (her name, about to rise) is hidden before the night thins.
	lenis?.start()
	onLift()
	const lift = move(curtain, [{ opacity }, { opacity: 0 }], {
		duration: fade,
		delay: reducedMotion ? 0 : 150,
		easing: EASE_FADE,
	})
	await lift.finished
	open()
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
	/** Runs under the curtain, right after the jump (e.g. settling what's on screen). */
	afterJump?: () => void
}

/**
 * Where `element`'s top will be in the viewport once the page has scrolled to
 * `y`. Inside a chapter's sticky stage that lands within the chapter's pinned
 * stretch, the stage will be held at the top of the screen.
 */
function predictTop(element: HTMLElement, y: number) {
	const box = element.getBoundingClientRect()
	const pinned = element.closest<HTMLElement>('.chapter__stage')
	const chapter = pinned?.parentElement
	if (pinned && chapter) {
		const start = chapter.getBoundingClientRect().top + window.scrollY
		const end = start + chapter.offsetHeight - pinned.offsetHeight
		if (y >= start && y <= end) return box.top - pinned.getBoundingClientRect().top
	}
	return box.top + window.scrollY - y
}

/** A copy of `source` placed on the curtain at the given viewport position. */
function mirror(source: HTMLElement, left: number, top: number, width: number) {
	const copy = source.cloneNode(true) as HTMLElement
	copy.removeAttribute('id')
	copy.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'))
	// The source may be mid-animation or not yet revealed; the copy starts clean.
	copy.querySelectorAll<HTMLElement>('[style]').forEach((element) => element.removeAttribute('style'))
	copy.style.cssText = `position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; margin: 0;`
	stage!.replaceChildren(copy)
	return copy
}

export async function travel({ y, match, lenis, beforeJump, afterJump }: Journey) {
	if (!curtain || !sheet || !stage || busy) return
	busy = true
	lenis?.stop()

	// The heading, where it will be once the page has jumped (if that's on screen).
	let copy: HTMLElement | null = null
	if (match && !reducedMotion) {
		const box = match.getBoundingClientRect()
		const top = predictTop(match, y)
		if (top >= 0 && top + box.height <= window.innerHeight) copy = mirror(match, box.left, top, box.width)
	}

	// The sheet is the viewport plus a soft edge above and below; the stage sits
	// one edge down inside it, so at rest it lines up with the screen.
	const height = window.innerHeight
	const edge = Math.round(Math.min(Math.max(height * 0.12, 64), 140))
	const distance = height + edge * 2

	if (reducedMotion) {
		curtain.dataset.state = 'travel'
		await move(curtain, [{ opacity: 0 }, { opacity: 1 }], { duration: 150, easing: 'ease-out' }).finished
	} else {
		const soft = `linear-gradient(to bottom, transparent 0, #000 ${edge}px, #000 calc(100% - ${edge}px), transparent 100%)`
		Object.assign(sheet.style, {
			inset: 'auto',
			left: '0',
			right: '0',
			top: `${-edge}px`,
			height: `${distance}px`,
			maskImage: soft,
			webkitMaskImage: soft,
		})
		stage.style.top = `${edge}px`
		curtain.dataset.state = 'travel'

		const sweep = { duration: 520, easing: EASE_SWEEP }
		const cover = move(sheet, [{ transform: `translate3d(0, ${distance}px, 0)` }, { transform: 'translate3d(0, 0, 0)' }], sweep)
		move(stage, [{ transform: `translate3d(0, ${-distance}px, 0)` }, { transform: 'translate3d(0, 0, 0)' }], sweep)
		// The heading rises from its masks on the night, word by word.
		copy?.querySelectorAll('.w > span').forEach((word, index) =>
			move(word, [{ transform: 'translate3d(0, 130%, 0)' }, { transform: 'translate3d(0, 0, 0)' }], {
				duration: 700,
				delay: 250 + index * 30,
				easing: EASE_RISE,
			})
		)
		copy?.querySelectorAll('.section-head__arabic').forEach((extra) =>
			move(extra, [{ opacity: 0, transform: 'translate3d(0, 12px, 0)' }, { opacity: 1, transform: 'translate3d(0, 0, 0)' }], {
				duration: 500,
				delay: 380,
				easing: 'ease-out',
			})
		)
		await cover.finished
	}

	// Jump while covered, let the page draw itself at the new place, then rest
	// the particle scene while nothing of it can be seen.
	beforeJump?.()
	lenis?.stop()
	if (lenis) lenis.scrollTo(y, { immediate: true, force: true })
	else window.scrollTo(0, y)
	afterJump?.()
	await nextFrames(2)
	covered = true

	// The real heading should be exactly under the copy; nudge it if not.
	if (copy && match) {
		const box = match.getBoundingClientRect()
		const placed = copy.getBoundingClientRect()
		const dx = box.left - placed.left
		const dy = box.top - placed.top
		if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
			move(copy, [{ translate: '0 0' }, { translate: `${dx}px ${dy}px` }], { duration: 250, easing: 'ease-out' })
		}
	}
	// Let the heading finish rising before the reveal.
	if (copy) await Promise.all(copy.getAnimations({ subtree: true }).map((animation) => animation.finished))
	else await wait(120)

	covered = false
	if (reducedMotion) {
		await move(curtain, [{ opacity: 1 }, { opacity: 0 }], { duration: 250, easing: 'ease-in' }).finished
	} else {
		// Off the top; the copy holds still and fades into the page through the soft edge.
		const sweep = { duration: 720, easing: EASE_SWEEP }
		const reveal = move(sheet, [{ transform: 'translate3d(0, 0, 0)' }, { transform: `translate3d(0, ${-distance}px, 0)` }], sweep)
		move(stage, [{ transform: 'translate3d(0, 0, 0)' }, { transform: `translate3d(0, ${distance}px, 0)` }], sweep)
		await reveal.finished
	}
	open()
	lenis?.start()
}

// A page restored from the back/forward cache must never come back covered.
window.addEventListener('pageshow', (event) => {
	if (event.persisted) open()
})
