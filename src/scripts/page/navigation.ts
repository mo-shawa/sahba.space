import type Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { travel, travelling } from './curtain'
import { root } from './env'
import { openList } from './lists'
import { settleInView } from './reveal'

/** Where a link to `target` lands: a chapter's chosen moment, or the element's top (less its scroll margin). */
function landing(target: HTMLElement) {
	const top = target.getBoundingClientRect().top + window.scrollY
	const arrive = Number(target.dataset.arrive ?? NaN)
	let y = top - (parseFloat(getComputedStyle(target).scrollMarginTop) || 0)
	if (target.matches('[data-chapter]') && !Number.isNaN(arrive)) {
		const stage = target.firstElementChild as HTMLElement | null
		y = top + (target.offsetHeight - (stage?.offsetHeight ?? window.innerHeight)) * arrive
	}
	const max = document.documentElement.scrollHeight - window.innerHeight
	return Math.round(Math.min(Math.max(y, 0), max))
}

/**
 * Arriving on a link to a section (sahba.space/#contact, or an old page that
 * redirects to one): land where clicking that link would, not at the browser's
 * own spot, the element's top, which for a chapter is night before any words.
 * A reload or a step back keeps the place the browser restores.
 */
export function landOnArrival(lenis: Lenis | null) {
	const [entry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
	if (entry && entry.type !== 'navigate') return
	const target = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null
	if (!target) return
	const y = landing(target)
	if (lenis) lenis.scrollTo(y, { immediate: true, force: true })
	else window.scrollTo(0, y)
}

/** In-page links travel under the curtain (no smooth scroll); the nav marks the section in view; the phone menu. */
export function initializeNavigation(lenis: Lenis | null) {
	const go = (hash: string) => {
		const target = document.querySelector<HTMLElement>(hash)
		if (!target || travelling()) return
		// A paper hidden in a collapsed list: open it first, so the landing is measured with it showing.
		const list = target.closest<HTMLElement>('[data-collapsible]')
		if (list && target.closest('[data-extra]')) openList(list, { animate: false })
		const match = target.matches('[data-curtain-match]') ? target : target.querySelector<HTMLElement>('[data-curtain-match]')
		travel({
			y: landing(target),
			match,
			lenis,
			beforeJump: () => setMenu(false),
			afterJump: () => {
				settleInView()
				history.replaceState(null, '', hash === '#top' ? location.pathname : hash)
			},
		}).then(() => {
			if (!target.hasAttribute('tabindex')) target.tabIndex = -1
			target.focus({ preventScroll: true })
		})
	}

	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
		// The skip link keeps the browser's own instant jump and focus handling.
		if (link.classList.contains('skip-link')) return
		link.addEventListener('click', (event) => {
			const hash = link.getAttribute('href')!
			if (hash.length < 2) return
			event.preventDefault()
			go(hash)
		})
	})

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
