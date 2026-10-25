/**
 * The page's images are lazy, so the first paint stays light. Once it has
 * loaded and settled, they all come in at low priority, one after another, and
 * are decoded off the main thread, so none arrives while someone is scrolling.
 * The interview previews (shown on hover) are warmed the same way.
 */
export function warmImages() {
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
