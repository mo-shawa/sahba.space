import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reducedMotion, root } from './env'

/** The one letter-level moment: her name rises letter by letter on arrival. */
export function introduceName() {
	const skipIntro = root.classList.contains('skip-intro')
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

const rises = new Map<HTMLElement, ScrollTrigger>()

/** Puts a heading straight into place, skipping its rise. */
function settleRise(element: HTMLElement) {
	rises.get(element)?.kill()
	rises.delete(element)
	const words = element.querySelectorAll('.w > span')
	gsap.killTweensOf(words)
	gsap.set(words, { clearProps: 'transform' })
}

/**
 * After a jump under the curtain, whatever is on screen is simply there when it
 * lifts: headings in place, rows already faded in. The rises and fades are for
 * content scrolling into view, not for a page arriving.
 */
export function settleInView() {
	const inView = (element: HTMLElement) => {
		const box = element.getBoundingClientRect()
		return box.bottom > 0 && box.top < window.innerHeight
	}
	document.querySelectorAll<HTMLElement>('[data-rise]').forEach((element) => inView(element) && settleRise(element))
	document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
		if (inView(element)) {
			gsap.killTweensOf(element)
			gsap.set(element, { opacity: 1 })
		}
	})
}

/** Paper sections: headings rise once; everything else simply fades in. */
export function revealOnScroll() {
	if (reducedMotion) return

	gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((element) => {
		if (element.getBoundingClientRect().bottom < 0) return
		const words = element.querySelectorAll('.w > span')
		gsap.set(words, { yPercent: 130 })
		rises.set(
			element,
			ScrollTrigger.create({
				trigger: element,
				start: 'top 85%',
				once: true,
				onEnter: () =>
					gsap.to(words, { yPercent: 0, duration: 1.3, stagger: 0.06, ease: 'expo.out', clearProps: 'transform' }),
			})
		)
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
