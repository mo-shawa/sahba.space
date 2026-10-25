import type Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { root } from './env'
import { openList } from './lists'

/** In-page links scroll smoothly; the nav marks the section in view; the phone menu. */
export function initializeNavigation(lenis: Lenis | null) {
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
