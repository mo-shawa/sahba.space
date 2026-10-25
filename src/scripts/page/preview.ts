import { gsap } from 'gsap'

/** On computers, an interview's artwork follows the cursor over its row. */
export function initializePreview() {
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
