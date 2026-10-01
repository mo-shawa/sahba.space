import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://sahba.space',
	// Keep the whitespace between inline elements (e.g. "her ResearchGate
	// profile"). Astro 7's default 'jsx' mode would drop it.
	compressHTML: true,
})
