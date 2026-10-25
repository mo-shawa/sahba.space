import { gsap } from 'gsap'
import { reducedMotion } from './env'
import { holdLayout, relayoutNow } from './layout'
import { openList } from './lists'

let resetPublicationHover = () => {}

/** The filter chips: rows animate out, glide and in, and the list's height follows. */
export function initializeFilters() {
	const group = document.querySelector<HTMLElement>('[data-filters]')
	const list = document.getElementById('publication-list')
	if (!group || !list) return
	const buttons = group.querySelectorAll<HTMLButtonElement>('[data-filter]')
	const years = Array.from(list.querySelectorAll<HTMLElement>('[data-year-group]'))
	const rows = Array.from(list.querySelectorAll<HTMLElement>('[data-group]'))
	const shown = (element: HTMLElement) => element.getClientRects().length > 0
	const matches = (row: HTMLElement, filter: string) => filter === 'all' || row.dataset.group === filter

	function apply(filter: string) {
		openList(list!, { animate: false })
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
			relayoutNow()
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

/**
 * The bar rises in from the edge the pointer came through, glides between
 * rows as it moves, and leaves through the edge it exits by, so it reads as
 * one dark band moving down or up the list.
 */
export function initializePublicationHover() {
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

	// Rows move when the list opens or is filtered; the bar starts over.
	resetPublicationHover = () => {
		current = null
		gsap.killTweensOf(bar)
		gsap.set(bar, { autoAlpha: 0, scaleY: 0 })
	}
	document.getElementById('publication-list')?.addEventListener('listopen', resetPublicationHover)

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
