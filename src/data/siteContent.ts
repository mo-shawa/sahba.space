export type RichTextPart =
	| {
			type: 'text'
			value: string
	  }
	| {
			type: 'link'
			value: string
			href: string
			target?: '_blank' | '_self'
			rel?: string
	  }
	| {
			type: 'highlight'
			value: string
	  }

export type RichText = RichTextPart[]

export interface ImageAsset {
	src: string
	alt: string
	width: number
	height: number
}

export interface NavItem {
	label: string
	href: `#${string}`
}

export interface Degree {
	degree: string
	field: string
	institution: string
	href: string
	note?: string
}

export interface Recognition {
	year: string
	title: string
	detail: string
	href: string
}

export interface LeadershipRole {
	role: string
	period?: string
}

export interface LeadershipItem {
	code: string
	organization: string
	href?: string
	roles: LeadershipRole[]
}

export type VenueId = 'acta' | 'ssea' | 'iac' | 'iros'

export interface Venue {
	id: VenueId
	name: string
	short: string
	detail?: string
}

export interface Publication {
	id: string
	year: number
	venue: VenueId
	title: string
	coAuthored: boolean
	detail?: string
}

export interface Lecture {
	date: string
	dateTime: string
	host: string
	title: string
	context: string
	href: string
	image: ImageAsset
}

export interface Interview {
	outlet: string
	format: string
	topic?: string
	date?: string
	href: string
	linkLabel: string
	image: ImageAsset & { position?: string }
}

export interface Testimonial {
	name: string
	role: RichText
	year: string
	pullQuote: string
	quote: RichText[]
}

export interface SocialLink {
	label: string
	handle: string
	href: string
	external: boolean
}

const text = (value: string): RichTextPart => ({
	type: 'text',
	value,
})

const highlight = (value: string): RichTextPart => ({
	type: 'highlight',
	value,
})

const externalLink = (value: string, href: string): RichTextPart => ({
	type: 'link',
	value,
	href,
	target: '_blank',
	rel: 'noreferrer',
})

export const siteMeta = {
	title: 'Sahba El-Shawa',
	description:
		'Sahba El-Shawa is a Jordanian-Canadian interdisciplinary researcher and social entrepreneur, and the Founder of the Jordan Space Research Initiative.',
	url: 'https://sahba.space',
} as const

export const person = {
	name: 'Sahba El-Shawa',
	givenName: 'Sahba',
	familyName: 'El-Shawa',
	// As captioned by Roya TV Jordan.
	nameArabic: 'صهباء الشوا',
} as const

export const navigationItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Research', href: '#research' },
	{ label: 'Leadership', href: '#leadership' },
	{ label: 'Lectures', href: '#lectures' },
	{ label: 'Interviews', href: '#interviews' },
	{ label: 'Contact', href: '#contact' },
] satisfies NavItem[]

export const heroContent = {
	role: 'Interdisciplinary researcher and social entrepreneur',
} as const

export const aboutContent = {
	lead: 'Sahba El-Shawa is a Jordanian-Canadian interdisciplinary researcher and social entrepreneur originally from Palestine.',
	founder: [
		text('She is the Founder of the '),
		externalLink('Jordan Space Research Initiative', 'https://www.jsri.space/'),
		text(
			', which aims to bridge sustainable development with space exploration and establish an analog research facility in Jordan.'
		),
	] satisfies RichText,
	portrait: {
		src: '/images/sahba-mss.webp',
		alt: 'Sahba El-Shawa speaking at a podium at the International Space University, in front of a Master of Space Studies Program poster',
		width: 686,
		height: 800,
	} satisfies ImageAsset,
	portraitCaption: 'International Space University, 2019',
	// Her own biography, verbatim. The PhD research sentence is featured in the
	// Overview Effect chapter instead of being repeated here.
	bio: [
		[
			text('Sahba holds a BASc in Mechanical Engineering from the '),
			externalLink('University of British Columbia', 'https://www.ubc.ca/'),
			text(', an MSc in Space Studies from the '),
			externalLink('International Space University', 'https://www.isunet.edu/'),
			text(', and is now pursuing her '),
			externalLink(
				'PhD in Sustainable Development and Climate Change',
				'https://www.phd-sdc.it/'
			),
			text(
				' at IUSS Pavia in Italy. During her studies, she collaborated with the '
			),
			externalLink('German Aerospace Centre', 'https://www.dlr.de/DE/Home/home_node.html'),
			text(' (DLR) on robotics research and completed an internship at the '),
			externalLink('European Space Agency', 'https://www.esa.int/'),
			text(
				"'s Clean Space initiative focusing on the environmental impacts of space activities, both on Earth and in space."
			),
		],
		[
			text('Sahba is an active volunteer in the '),
			externalLink('Space Generation Advisory Council', 'https://spacegeneration.org/'),
			text(
				', acting as National Point of Contact for Jordan, as well as Co-Lead of the Ethics & Human Rights project group and the Space for Climate Action policy working group. She is also a National Coordinator in the '
			),
			externalLink('Moon Village Association', 'https://moonvillageassociation.org/'),
			text(' and its Participation of Emerging Space Countries program.'),
		],
		[
			text(
				'She is passionate about outreach and education, and has organized space design competitions for students around the world including Canada, Europe, and the Middle East. Sahba is a vocal advocate for decoupling defense and space. She is committed to creating opportunities for underrepresented communities in space and helping guide the space industry towards a more equitable, ethical, and sustainable future.'
			),
		],
	] satisfies RichText[],
}

export const education = [
	{
		degree: 'BASc',
		field: 'Mechanical Engineering',
		institution: 'University of British Columbia',
		href: 'https://www.ubc.ca/',
	},
	{
		degree: 'MSc',
		field: 'Space Studies',
		institution: 'International Space University',
		href: 'https://www.isunet.edu/',
	},
	{
		degree: 'PhD',
		field: 'Sustainable Development and Climate Change',
		institution: 'IUSS Pavia, Italy',
		href: 'https://www.phd-sdc.it/',
		note: 'Now pursuing',
	},
] satisfies Degree[]

export const overviewEffect = {
	label: 'PhD research',
	title: 'The Overview Effect',
	definition:
		'A cognitive shift in awareness reported by some astronauts while viewing Earth from space.',
	body: 'Her PhD research centers around the neuropsychological basis of the Overview Effect, and how making it more accessible using Virtual Reality can help drive sustainable behaviour on Earth.',
	relatedPublicationId: 'iac-2022-overview-effect',
} as const

export const groundContent = {
	organization: 'Jordan Space Research Initiative',
	href: 'https://www.jsri.space/',
	statement:
		'She is the Founder of the Jordan Space Research Initiative, which aims to bridge sustainable development with space exploration and establish an analog research facility in Jordan.',
} as const

export const recognition = [
	{
		year: '2021',
		title: 'Women in Aerospace Young Professional Award',
		detail: 'Women in Aerospace Europe',
		href: 'https://www.wia-europe.org/2021/10/13/wia-e-grants-awards-winners-announced/',
	},
	{
		year: '2022',
		title: 'Space Generation Leadership Award',
		detail: 'Space Generation Advisory Council',
		href: 'https://spacegeneration.org/announcement-of-the-2022-space-generation-leadership-award',
	},
	{
		year: '2022',
		title: 'Alternate Astronaut',
		detail: 'Space for Humanity',
		href: 'https://spaceforhumanity.org/',
	},
] satisfies Recognition[]

export const leadershipItems = [
	{
		code: 'JSRI',
		organization: 'Jordan Space Research Initiative',
		href: 'https://www.jsri.space/',
		roles: [{ role: 'Founder and Executive Director' }],
	},
	{
		code: 'MVA',
		organization: 'Moon Village Association',
		href: 'https://moonvillageassociation.org/',
		roles: [
			{
				role: 'Team Lead in Participation of Emerging Space Countries Program',
				period: '2020 – present',
			},
			{ role: 'National Coordinator for Jordan', period: '2020 – present' },
		],
	},
	{
		code: 'SGAC',
		organization: 'Space Generation Advisory Council',
		href: 'https://spacegeneration.org/',
		roles: [
			{
				role: 'Co-Lead of Ethics and Human Rights Project Group',
				period: '2021 – present',
			},
			{
				role: 'Co-Lead of Space for Climate Action Policy Division',
				period: '2022 – present',
			},
			{ role: 'National Point of Contact for Jordan', period: '2020 – present' },
		],
	},
	{
		code: 'SSEF',
		organization: 'Space Science and Engineering Foundation',
		roles: [
			{
				role: 'Coordinator of the Environmental Design Challenge',
				period: '2022',
			},
		],
	},
	{
		code: 'SSDC',
		organization: 'Space Settlement Design Competitions',
		roles: [
			{
				role: 'Organizer of Canadian Space Settlement Design Competition',
				period: '2019, 2020, 2021',
			},
			{
				role: 'Organizer of Middle East Space Design Competition for Jordan and Palestine',
				period: '2020, 2021',
			},
			{
				role: 'Organizer of European Space Design Competition in France in collaboration with the International Space University',
				period: '2020',
			},
		],
	},
] satisfies LeadershipItem[]

export const venues = [
	{
		id: 'acta',
		name: 'Acta Astronautica',
		short: 'Acta Astronautica',
		detail: 'Elsevier Journal',
	},
	{
		id: 'ssea',
		name: 'Symposium on Space Educational Activities',
		short: 'SSEA',
	},
	{
		id: 'iac',
		name: 'International Astronautical Congress',
		short: 'IAC',
	},
	{
		id: 'iros',
		name: 'IEEE/RSJ International Conference on Intelligent Robots and Systems',
		short: 'IROS',
	},
] satisfies Venue[]

export const publications = [
	{
		id: 'acta-2022-jsri',
		year: 2022,
		venue: 'acta',
		title:
			'Jordan Space Research Initiative: Societal Benefits of Lunar Exploration and Analog Research',
		coAuthored: true,
		detail: 'Volume 200, November 2022, Pages 574–585',
	},
	{
		id: 'ssea-2022-outreach',
		year: 2022,
		venue: 'ssea',
		title: 'The Importance of Outreach and Education for Emerging Space Countries',
		coAuthored: true,
	},
	{
		id: 'iac-2022-overview-effect',
		year: 2022,
		venue: 'iac',
		title:
			'Bringing Space Down to Earth: Virtual Reality Simulations of the Overview Effect',
		coAuthored: false,
	},
	{
		id: 'iac-2022-climate-action',
		year: 2022,
		venue: 'iac',
		title:
			'Saving Our Future on Earth Through Our Presence in Space - Recommendations from the Young Generations on the Role of Space for Climate Action',
		coAuthored: true,
	},
	{
		id: 'iac-2022-site-selection',
		year: 2022,
		venue: 'iac',
		title:
			'Site Selection Criteria for Space Analogs: Jordan Space Research Initiative Case Study',
		coAuthored: true,
	},
	{
		id: 'iac-2021-cradle-to-grave',
		year: 2021,
		venue: 'iac',
		title: "From Cradle to Grave: ESA Clean Space's Approach to Space Sustainability",
		coAuthored: true,
	},
	{
		id: 'iac-2021-valley-of-the-moon',
		year: 2021,
		venue: 'iac',
		title: 'Valley of the Moon: Societal Benefits of Lunar Exploration in Jordan',
		coAuthored: true,
	},
	{
		id: 'iac-2020-quantum-consciousness',
		year: 2020,
		venue: 'iac',
		title:
			'Quantum Consciousness, Intelligence, and Exosapiens: A Novel Approach to the Search for Extraterrestrial Intelligence',
		coAuthored: false,
	},
	{
		id: 'iac-2020-space2030',
		year: 2020,
		venue: 'iac',
		title:
			'Jordan and the United Nations Space2030 Agenda: A Roadmap for Space and Sustainable Development',
		coAuthored: false,
	},
	{
		id: 'iac-2020-carrington',
		year: 2020,
		venue: 'iac',
		title:
			'A Future Carrington Event: Impact on International Telecommunications',
		coAuthored: true,
	},
	{
		id: 'iac-2020-seti',
		year: 2020,
		venue: 'iac',
		title:
			'A Comprehensive View of SETI: Technical, Legal, and Outreach Considerations',
		coAuthored: true,
	},
	{
		id: 'iros-2017-proxemics',
		year: 2017,
		venue: 'iros',
		title:
			"'Is this the real life? Is this just fantasy?': Human Proxemic Preferences for Recognizing Robot Gestures in Physical Reality and Virtual Reality",
		coAuthored: true,
	},
] satisfies Publication[]

export const researchProfileLink = {
	label: 'ResearchGate profile',
	href: 'https://www.researchgate.net/profile/Sahba-El-Shawa',
} as const

// Talk titles and dates are taken from the title slides shown in each image.
export const lectures = [
	{
		date: '13 Oct 2022',
		dateTime: '2022-10-13',
		host: 'Howard University School of Law',
		title: 'Space Commercialization: An Ethics and Sustainability Perspective',
		context: 'Space Law course guest lecture on space commercialization.',
		href: 'https://drive.google.com/file/d/1Ll1-1N2VxlApS97-N06U5DqSMRJWHvto/view?usp=sharing',
		image: {
			src: '/images/lectures/HUSL.webp',
			alt: 'Title slide: Space Commercialization, An Ethics and Sustainability Perspective',
			width: 640,
			height: 360,
		},
	},
	{
		date: '29 Sept 2022',
		dateTime: '2022-09-29',
		host: 'Science Summit at the UN General Assembly',
		title: 'Saving the World with Interdisciplinarity: Addressing Future Challenges',
		context:
			'Presentation representing the PhD in Sustainable Development and Climate Change on the value of interdisciplinarity.',
		href: 'https://drive.google.com/file/d/1Nvsr14AghES2vnYZrM7aYAa3U3D2z79C/view?usp=sharing',
		image: {
			src: '/images/lectures/UNGA.webp',
			alt: 'Title slide: Saving the World with Interdisciplinarity, Addressing Future Challenges',
			width: 640,
			height: 360,
		},
	},
	{
		date: '14 Sept 2022',
		dateTime: '2022-09-14',
		host: 'UN/Austria Symposium on Space for Climate Action',
		title:
			'Recommendations from the “Space for Climate Action” Policy Division in the Space Generation Advisory Council',
		context:
			"Pitch presentation representing the Space Generation Advisory Council's policy division on Space for Climate Action.",
		href: 'https://drive.google.com/file/d/1trg2We7ZO6pAlhIrW2a4lij6Ahi01Ih0/view?usp=sharing',
		image: {
			src: '/images/lectures/UN_Austria.webp',
			alt: 'Title slide: Recommendations from the Space for Climate Action Policy Division in the Space Generation Advisory Council',
			width: 640,
			height: 360,
		},
	},
] satisfies Lecture[]

// Topics and dates are taken from each outlet's artwork or link.
export const interviews = [
	{
		outlet: 'Diaries of Space Explorers',
		format: 'Podcast',
		topic: 'Sustainability and Accessibility of the Space Sector',
		date: 'Season 2 · Episode 12',
		href: 'https://diariesofspace.podbean.com/e/the-diaries-of-space-explorers-season-2-episode-12-sustainability-and-accessibility-of-the-space-sector-sahba-el-shawa/',
		linkLabel: 'Listen',
		image: {
			src: '/images/interviews/diaries-of-space-explorers.webp',
			alt: 'Diaries of Space Explorers episode artwork',
			width: 500,
			height: 475,
			position: '50% 60%',
		},
	},
	{
		outlet: 'Space Court Foundation',
		format: 'Video interview',
		topic: 'Women of Colour in Space',
		date: 'Oct 2021',
		href: 'https://www.youtube.com/watch?v=peiCd3d9PrA',
		linkLabel: 'Watch on YouTube',
		image: {
			src: '/images/interviews/space-court-foundation.webp',
			alt: 'Space Court Foundation, Women of Colour in Space, with Sahba El-Shawa',
			width: 621,
			height: 353,
			position: '100% 40%',
		},
	},
	{
		outlet: 'University of Mississippi School of Law',
		format: 'Panel',
		topic: 'Center for Air and Space Law',
		date: 'May 2022',
		href: 'http://lawvideo.law.olemiss.edu/~poindexterbarnes/4th/WomenInAerospace-SpaceLaw-13MAY22.mp4',
		linkLabel: 'Watch the panel',
		image: {
			src: '/images/interviews/olemissinterview.webp',
			alt: 'Center for Air and Space Law graphic with a portrait of Sahba El-Shawa and a quote',
			width: 1122,
			height: 981,
			position: '20% 50%',
		},
	},
	{
		outlet: 'Roya TV Jordan',
		format: 'TV interview · Arabic',
		href: 'https://roya.tv/videos/87948',
		linkLabel: 'Watch the interview',
		image: {
			src: '/images/interviews/roya.webp',
			alt: 'Sahba El-Shawa being interviewed on Roya TV',
			width: 1133,
			height: 991,
			position: '35% 40%',
		},
	},
	{
		outlet: 'The Quantum Insider',
		format: 'Article',
		topic: 'Quantum Applications for SETI: A Perspective',
		date: 'Feb 2021',
		href: 'https://thequantuminsider.com/2021/02/28/quantum-applications-for-seti-a-perspective/',
		linkLabel: 'Read the article',
		image: {
			src: '/images/interviews/quantuminsider.webp',
			alt: 'The Quantum Insider article header, Quantum Applications for SETI: A Perspective',
			width: 817,
			height: 715,
			position: '50% 70%',
		},
	},
	{
		outlet: 'Ignited Thinkers',
		format: 'Video interview',
		topic: 'Space Champion Interview',
		href: 'https://www.youtube.com/watch?v=b2mUm8bPGFI',
		linkLabel: 'Watch on YouTube',
		image: {
			src: '/images/interviews/ignited-thinkers.webp',
			alt: 'Ignited Thinkers Space Champion Interview artwork',
			width: 597,
			height: 597,
			position: '50% 45%',
		},
	},
] satisfies Interview[]

// Quoted on the Center for Air and Space Law graphic (see interviews).
export const featuredQuote = {
	text: 'If you don’t find the opportunities that you want, you can create them for yourself and for other people.',
	source: 'Center for Air and Space Law, University of Mississippi School of Law',
} as const

export const testimonials = [
	{
		name: "Zaina Abu Sha'ar",
		role: [
			externalLink('JSRI', 'https://www.jsri.space/'),
			text(' Team Member and MSc Student in Space Engineering Systems at '),
			externalLink('Skoltech', 'https://www.skoltech.ru/en/'),
		],
		year: '2022',
		pullQuote:
			'I can honestly say that Sahba is a huge inspiration and I am truly blessed to have crossed paths with her.',
		quote: [
			[
				text(
					'They say a good leader has integrity, courage, respect, empathy, and gratitude. After working with Sahba for two years, it is clear that she possesses all of these qualities and more. Throughout my time with the Jordan Space Research Initiative, Sahba has been motivational and supportive, which presented me with the opportunity to dive in new endeavors. '
				),
				highlight(
					'I can honestly say that Sahba is a huge inspiration and I am truly blessed to have crossed paths with her.'
				),
			],
		],
	},
	{
		name: 'Ezequiel Gonzalez',
		role: [
			text('Expert EO Mission Planning & Space Ops at '),
			externalLink('Leanspace', 'https://leanspace.io/'),
		],
		year: '2020',
		pullQuote:
			'Her never-ending willingness to push the boundaries and explore the unknown.',
		quote: [
			[
				text(
					'Sahba is an awesome person and a well-rounded professional. She has shown solid management skills and conducted cutting-edge research. We shared many moments throughout the '
				),
				externalLink('MSS', 'https://www.isunet.edu/mss/'),
				text(
					' program and I really enjoyed our talks about space, physics, and consciousness. I could appreciate her sound knowledge in those topics and '
				),
				highlight(
					'her never-ending willingness to push the boundaries and explore the unknown.'
				),
				text(
					" She loves what she does and she expresses in a way that makes others feel the same. Sahba's attitude and passion will surely inspire every team she could be part of in the future."
				),
			],
		],
	},
	{
		name: 'Alvina Gakhokidze',
		role: [
			text('Electrical Engineering Student at the '),
			externalLink('University of British Columbia', 'https://www.ubc.ca/'),
		],
		year: '2022',
		pullQuote:
			'She turned a stressful competition into an enjoyable learning experience.',
		quote: [
			[
				text(
					"Sahba was my mentor for the first time at the 2019 Canadian Space Settlement Design Competition (CSSDC), which she had organized herself. As one of the many students who was in an unfamiliar environment, surrounded by other students I did not know, and anxious from the stakes of the competition, I found Sahba's leadership comforting and encouraging - she helped students overcome their nervousness and participate in the various activities and get to know each other. "
				),
				highlight(
					'She turned a stressful competition into an enjoyable learning experience.'
				),
				text(
					" During the following year's CSSDC, the pandemic had hit, and it was uncertain whether the competition would occur."
				),
			],
			[
				text(
					"Sahba, however, had put impressive effort into offering an alternative, online version of the competition which helped us to not miss out on any key opportunities while in quarantine. Sahba was a great mentor in the 2019 International SSDC finals as well; when I came to her with conceptual problems, she responded in ways that helped me consider alternative ideas and reach the solution myself. Sahba's crucial support in the ISSDC, and her work in organizing the CSSDC and making the space industry more accessible to Canadian students, helped our team place first in the international competition that year."
				),
			],
		],
	},
] satisfies Testimonial[]

export const socialLinks = [
	{
		label: 'Email',
		handle: 'hello@sahba.space',
		href: 'mailto:hello@sahba.space',
		external: false,
	},
	{
		label: 'LinkedIn',
		handle: 'in/selshawa',
		href: 'https://www.linkedin.com/in/selshawa/',
		external: true,
	},
	{
		label: 'Instagram',
		handle: '@sahbae',
		href: 'https://www.instagram.com/sahbae/',
		external: true,
	},
	{
		label: 'ResearchGate',
		handle: 'Sahba-El-Shawa',
		href: 'https://www.researchgate.net/profile/Sahba-El-Shawa',
		external: true,
	},
] satisfies SocialLink[]

export const footerContent = {
	owner: 'Sahba El-Shawa',
	creditLabel: 'shawa.dev',
	creditHref: 'https://shawa.dev/',
} as const
