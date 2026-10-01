// The site's content, loaded from the editable files in src/content/ (edited
// through Pages CMS, see .pages.yml) and shaped for the components.
//
// Everything is validated at build time: a missing field or a broken image
// path fails the build with a clear message instead of shipping a broken page.

import type { ImageMetadata } from 'astro'
import { z } from 'astro/zod'
import { marked } from 'marked'
import educationFile from '../content/education.json'
import homeFile from '../content/home.json'
import interviewsFile from '../content/interviews.json'
import leadershipFile from '../content/leadership.json'
import lecturesFile from '../content/lectures.json'
import publicationsFile from '../content/publications.json'
import recognitionFile from '../content/recognition.json'
import testimonialsFile from '../content/testimonials.json'

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function load<T extends z.ZodType>(name: string, schema: T, data: unknown): z.infer<T> {
	const result = schema.safeParse(data)
	if (!result.success) {
		const issues = result.error.issues
			.map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
			.join('\n')
		throw new Error(`src/content/${name}.json has problems:\n${issues}`)
	}
	return result.data
}

// Images live in src/assets/images; content stores them as "/images/…".
const imageFiles = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}',
	{ eager: true }
)

function image(path: string): ImageMetadata {
	const file = imageFiles[`../assets${path.startsWith('/') ? path : `/${path}`}`]
	if (!file) throw new Error(`Image not found: ${path} (expected in src/assets${path})`)
	return file.default
}

// External links open in a new tab, as they always have on this site.
marked.use({
	renderer: {
		link({ href, tokens }) {
			const text = this.parser.parseInline(tokens)
			const external = /^https?:/.test(href)
			const attributes = external ? ' target="_blank" rel="noreferrer"' : ''
			return `<a href="${href.replace(/"/g, '&quot;')}"${attributes}>${text}</a>`
		},
	},
})

/** Markdown paragraphs → HTML. */
const markdown = (source: string) => marked.parse(source, { async: false }) as string
/** A single line of Markdown (links, bold) → inline HTML. */
const inlineMarkdown = (source: string) => marked.parseInline(source, { async: false }) as string

const slug = (value: string) =>
	value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[^\w\s-]/g, '')
		.trim()
		.replace(/[\s_-]+/g, '-')
		.slice(0, 80)

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const formatDate = (iso: string) => {
	const [year, month, day] = iso.split('-').map(Number)
	return `${day} ${months[month - 1]} ${year}`
}

const text = z.string().trim()
const optional = z.string().trim().optional().default('')
const url = z.string().trim().pipe(z.url())
const optionalUrl = z.union([z.literal(''), url]).optional().default('')

/* -------------------------------------------------------------------------- */
/* Home: name, intro, about, chapters, contact                                 */
/* -------------------------------------------------------------------------- */

const home = load(
	'home',
	z.object({
		seo: z.object({ title: text, description: text }),
		name: text,
		givenName: text,
		familyName: text,
		nameArabic: text,
		role: text,
		lead: text,
		portrait: z.object({ image: text, alt: text, caption: optional }),
		bio: text,
		overview: z.object({
			label: text,
			title: text,
			definition: text,
			body: text,
			relatedPaper: optional,
		}),
		jsri: z.object({
			role: text,
			organization: text,
			statement: text,
			url: optionalUrl,
			linkLabel: optional,
		}),
		quote: z.object({ text: text, source: text }),
		contact: z.object({
			email: z.string().trim().pipe(z.email()),
			links: z.array(z.object({ label: text, handle: text, url })),
		}),
	}),
	homeFile
)

export interface NavItem {
	label: string
	href: `#${string}`
}

export const siteMeta = {
	title: home.seo.title,
	description: home.seo.description,
	url: 'https://sahba.space',
}

export const person = {
	name: home.name,
	givenName: home.givenName,
	familyName: home.familyName,
	nameArabic: home.nameArabic,
}

export const navigationItems: NavItem[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Research', href: '#research' },
	{ label: 'Leadership', href: '#leadership' },
	{ label: 'Lectures', href: '#lectures' },
	{ label: 'Interviews', href: '#interviews' },
	{ label: 'Contact', href: '#contact' },
]

export const heroContent = { role: home.role }

export const aboutContent = {
	lead: home.lead,
	portrait: { image: image(home.portrait.image), alt: home.portrait.alt },
	portraitCaption: home.portrait.caption,
	bioHtml: markdown(home.bio),
}

export const groundContent = {
	role: home.jsri.role,
	organization: home.jsri.organization,
	statement: home.jsri.statement,
	href: home.jsri.url,
	linkLabel: home.jsri.linkLabel,
}

export const featuredQuote = home.quote

export interface SocialLink {
	label: string
	handle: string
	href: string
	external: boolean
}

export const socialLinks: SocialLink[] = [
	{
		label: 'Email',
		handle: home.contact.email,
		href: `mailto:${home.contact.email}`,
		external: false,
	},
	...home.contact.links.map((link) => ({
		label: link.label,
		handle: link.handle,
		href: link.url,
		external: true,
	})),
]

export const researchProfileLink = socialLinks.find((link) => /researchgate/i.test(link.label))

export const footerContent = {
	owner: home.name,
	creditLabel: 'shawa.dev',
	creditHref: 'https://shawa.dev/',
}

/* -------------------------------------------------------------------------- */
/* Lists                                                                       */
/* -------------------------------------------------------------------------- */

export interface Degree {
	degree: string
	field: string
	institution: string
	href: string
	note: string
}

export const education: Degree[] = load(
	'education',
	z.object({
		education: z.array(
			z.object({ degree: text, field: text, institution: text, url: optionalUrl, note: optional })
		),
	}),
	educationFile
).education.map((entry) => ({ ...entry, href: entry.url }))

export interface Recognition {
	year: string
	title: string
	detail: string
	href: string
}

export const recognition: Recognition[] = load(
	'recognition',
	z.object({
		recognition: z.array(
			z.object({
				year: z.coerce.string().trim(),
				title: text,
				organization: optional,
				url: optionalUrl,
			})
		),
	}),
	recognitionFile
).recognition.map((item) => ({
	year: item.year,
	title: item.title,
	detail: item.organization,
	href: item.url,
}))

export interface LeadershipItem {
	organization: string
	href: string
	roles: { role: string; period: string }[]
}

export const leadershipItems: LeadershipItem[] = load(
	'leadership',
	z.object({
		leadership: z.array(
			z.object({
				organization: text,
				url: optionalUrl,
				roles: z.array(z.object({ role: text, period: optional })).min(1),
			})
		),
	}),
	leadershipFile
).leadership.map((item) => ({ organization: item.organization, href: item.url, roles: item.roles }))

export interface Venue {
	id: string
	name: string
	short: string
	detail: string
}

export interface Publication {
	id: string
	year: number
	venue: Venue
	title: string
	coAuthored: boolean
	detail: string
}

const publicationRows = load(
	'publications',
	z.object({
		publications: z.array(
			z.object({
				year: z.coerce.number().int(),
				title: text,
				venue: text,
				venueShort: optional,
				venueDetail: optional,
				coAuthored: z.boolean().optional().default(false),
				detail: optional,
			})
		),
	}),
	publicationsFile
).publications

/** Venues are derived from the papers, in order of first appearance. */
export const venues: Venue[] = []
export const publications: Publication[] = publicationRows.map((row) => {
	const short = row.venueShort || row.venue
	let venue = venues.find((v) => v.name === row.venue)
	if (!venue) {
		venue = { id: slug(short), name: row.venue, short, detail: row.venueDetail }
		venues.push(venue)
	}
	return {
		id: slug(row.title),
		year: row.year,
		venue,
		title: row.title,
		coAuthored: row.coAuthored,
		detail: row.detail,
	}
})

export const overviewEffect = {
	label: home.overview.label,
	title: home.overview.title,
	definition: home.overview.definition,
	body: home.overview.body,
	related: publications.find(
		(publication) =>
			publication.title.toLowerCase() === home.overview.relatedPaper.toLowerCase()
	),
}

export interface Lecture {
	date: string
	dateTime: string
	host: string
	title: string
	context: string
	href: string
	image: ImageMetadata
	imageAlt: string
}

export const lectures: Lecture[] = load(
	'lectures',
	z.object({
		lectures: z.array(
			z.object({
				date: z.string().regex(/^\d{4}-\d{2}-\d{2}/, 'use a date like 2022-10-13'),
				host: text,
				title: text,
				context: optional,
				url,
				image: text,
				imageAlt: optional,
			})
		),
	}),
	lecturesFile
)
	.lectures.map((lecture) => ({
		date: formatDate(lecture.date.slice(0, 10)),
		dateTime: lecture.date.slice(0, 10),
		host: lecture.host,
		title: lecture.title,
		context: lecture.context,
		href: lecture.url,
		image: image(lecture.image),
		imageAlt: lecture.imageAlt,
	}))
	// Newest first, whatever order they were added in.
	.sort((a, b) => b.dateTime.localeCompare(a.dateTime))

export interface Interview {
	outlet: string
	format: string
	topic: string
	date: string
	href: string
	linkLabel: string
	image: ImageMetadata
	imageAlt: string
	imageFocus: string
}

export const interviews: Interview[] = load(
	'interviews',
	z.object({
		interviews: z.array(
			z.object({
				outlet: text,
				format: text,
				topic: optional,
				date: optional,
				url,
				linkLabel: optional,
				image: text,
				imageAlt: optional,
				imageFocus: optional,
			})
		),
	}),
	interviewsFile
).interviews.map((entry) => ({
	outlet: entry.outlet,
	format: entry.format,
	topic: entry.topic,
	date: entry.date,
	href: entry.url,
	linkLabel: entry.linkLabel || 'Open',
	image: image(entry.image),
	imageAlt: entry.imageAlt,
	imageFocus: entry.imageFocus,
}))

export interface Testimonial {
	name: string
	roleHtml: string
	year: string
	quoteHtml: string
}

export const testimonials: Testimonial[] = load(
	'testimonials',
	z.object({
		testimonials: z.array(
			z.object({ name: text, role: optional, year: z.coerce.string().trim(), quote: text })
		),
	}),
	testimonialsFile
).testimonials.map((entry) => ({
	name: entry.name,
	roleHtml: inlineMarkdown(entry.role),
	year: entry.year,
	quoteHtml: markdown(entry.quote),
}))
