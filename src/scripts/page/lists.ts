import { gsap } from 'gsap'
import { reducedMotion } from './env'
import { holdLayout, relayoutNow } from './layout'

interface OpenListOptions {
	/** Move keyboard focus to the first new item (the button that had it is going). */
	focus?: boolean
	/** Grow the list and fade the new items in; off when the caller animates the list itself. */
	animate?: boolean
}

/**
 * Opens a long list. The list grows to its full height while the new items
 * rise in, and the "show more" button folds away, spacing included, so
 * nothing below jumps. Fires `listopen` on the list.
 */
export function openList(list: HTMLElement, { focus = false, animate = true }: OpenListOptions = {}) {
	if (list.hasAttribute('data-open')) return
	const extras = Array.from(list.querySelectorAll<HTMLElement>('[data-extra]'))
	const startHeight = list.offsetHeight
	list.toggleAttribute('data-open', true)
	list.dispatchEvent(new Event('listopen'))

	const button = document.querySelector<HTMLButtonElement>(`[data-more="${list.id}"]`)
	const holder = button?.parentElement ?? null
	button?.setAttribute('aria-expanded', 'true')

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
		if (animate) relayoutNow()
		return
	}

	const fold = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
	if (holder) {
		// Fold the button and the gap above it, whatever the layout around it.
		const gap = parseFloat(getComputedStyle(holder.parentElement!).rowGap) || 0
		fold.to(holder, { height: 0, paddingTop: 0, paddingBottom: 0, marginTop: -gap, opacity: 0, overflow: 'hidden', duration: 0.5 }, 0)
	}
	if (!animate) {
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

export function initializeShowMore() {
	document.querySelectorAll<HTMLButtonElement>('[data-more]').forEach((button) => {
		const list = document.getElementById(button.dataset.more!)
		if (list) button.addEventListener('click', () => openList(list, { focus: true }))
	})
}

/** Disclosures (the full testimonials) open and close smoothly. */
export function initializeDisclosures() {
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
