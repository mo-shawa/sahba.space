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

export interface ImageAsset {
	src: string
	alt: string
	width: number
	height: number
	className?: string
}

export interface NavItem {
	label: string
	href: `#${string}`
}

export interface AboutContent {
	title: string
	image: ImageAsset
	paragraphs: RichTextPart[][]
}

export interface LeadershipItem {
	title: string
	details: RichTextPart[][]
}

export interface ResearchGroup {
	title: string
	entries: RichTextPart[][]
}

export interface MediaEntry {
	title: string
	date?: string
	href: string
	linkLabel: string
	image: ImageAsset
	variant: 'lecture' | 'interview'
	emphasis?: 'darken'
}

export interface Testimonial {
	quote: RichTextPart[][]
	attribution: RichTextPart[]
}

export interface SocialLink {
	href: string
	className: string
	icon: ImageAsset
	target?: '_blank' | '_self'
	rel?: string
}

const text = (value: string): RichTextPart => ({
	type: 'text',
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
	title: "Sahba El-Shawa's Website",
	description: "Sahba El-Shawa's Personal Website",
} as const

export const brand = {
	label: 'sahba.space',
	href: '#hero',
	icon: {
		src: '/favicon-32x32.png',
		alt: 'Moon icon',
		width: 32,
		height: 32,
	},
} as const

export const navigationItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Leadership', href: '#leadership' },
	{ label: 'Research', href: '#research' },
	{ label: 'Lectures', href: '#lectures' },
	{ label: 'Interviews', href: '#interviews' },
	{ label: 'Testimonials', href: '#testimonials' },
	{ label: 'Contact', href: '#contact' },
] satisfies NavItem[]

export const heroContent = {
	title: 'Sahba El-Shawa',
	ctaHref: '#about',
	ctaLabel: 'V',
} as const

export const aboutContent: AboutContent = {
	title: 'About',
	image: {
		src: '/images/sahba-mss.webp',
		alt: 'Sahba MSS',
		width: 360,
		height: 420,
		className: 'sahba-img',
	},
	paragraphs: [
		[
			text(
				'Sahba El-Shawa is a Jordanian-Canadian interdisciplinary researcher and social entrepreneur originally from Palestine. She is the Founder of the '
			),
			externalLink('Jordan Space Research Initiative', 'https://www.jsri.space/'),
			text(
				', which aims to bridge sustainable development with space exploration and establish an analog research facility in Jordan.'
			),
		],
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
				' at IUSS Pavia in Italy. Her PhD research centers around the neuropsychological basis of the Overview Effect, and how making it more accessible using Virtual Reality can help drive sustainable behaviour on Earth. During her studies, she collaborated with the '
			),
			externalLink('German Aerospace Centre', 'https://www.dlr.de/DE/Home/home_node.html'),
			text(
				' (DLR) on robotics research and completed an internship at the '
			),
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
			text(' and its Participation of Emerging Space Countries program. Sahba was the recipient of the '),
			externalLink(
				'Women in Aerospace Young Professional Award',
				'https://www.wia-europe.org/2021/10/13/wia-e-grants-awards-winners-announced/'
			),
			text(', in 2021, the '),
			externalLink(
				'Space Generation Leadership Award',
				'https://spacegeneration.org/announcement-of-the-2022-space-generation-leadership-award'
			),
			text(', in 2022, and was selected as an Alternate Astronaut for '),
			externalLink('Space for Humanity', 'https://spaceforhumanity.org/'),
			text(' in 2022.'),
		],
		[
			text(
				'She is passionate about outreach and education, and has organized space design competitions for students around the world including Canada, Europe, and the Middle East. Sahba is a vocal advocate for decoupling defense and space. She is committed to creating opportunities for underrepresented communities in space and helping guide the space industry towards a more equitable, ethical, and sustainable future.'
			),
		],
	],
}

export const leadershipItems = [
	{
		title: 'Jordan Space Research Initiative',
		details: [[text('Founder and Executive Director of JSRI')]],
	},
	{
		title: 'Moon Village Association',
		details: [
			[
				text(
					'Team Lead in Participation of Emerging Space Countries Program (2020 - present)'
				),
			],
			[text('National Coordinator for Jordan (2020 - present)')],
		],
	},
	{
		title: 'Space Science and Engineering Foundation',
		details: [[text('Coordinator of the Environmental Design Challenge (2022)')]],
	},
	{
		title: 'Space Generation Advisory Council',
		details: [
			[text('Co-Lead of Ethics and Human Rights Project Group (2021 - present)')],
			[
				text(
					'Co-Lead of Space for Climate Action Policy Division (2022 - present)'
				),
			],
			[text('National Point of Contact for Jordan (2020 - present)')],
		],
	},
	{
		title: 'Space Settlement Design Competitions',
		details: [
			[
				text(
					'Organizer of Canadian Space Settlement Design Competition (2019, 2020, 2021)'
				),
			],
			[
				text(
					'Organizer of Middle East Space Design Competition for Jordan and Palestine (2020, 2021)'
				),
			],
			[
				text(
					'Organizer of European Space Design Competition in France in collaboration with the International Space University (2020)'
				),
			],
		],
	},
] satisfies LeadershipItem[]

export const researchGroups = [
	{
		title: 'Acta Astronautica - Elsevier Journal',
		entries: [
			[
				text(
					'El-Shawa, S, et al. 2022, Volume 200, November 2022, Pages 574-585, Jordan Space Research Initiative: Societal Benefits of Lunar Exploration and Analog Research'
				),
			],
		],
	},
	{
		title: 'Symposium on Space Educational Activities - SSEA',
		entries: [
			[
				text(
					'El-Shawa, S, et al. 2022, The Importance of Outreach and Education for Emerging Space Countries'
				),
			],
		],
	},
	{
		title: 'International Astronautical Congress - IAC',
		entries: [
			[
				text(
					'El-Shawa, S, 2022, Bringing Space Down to Earth: Virtual Reality Simulations of the Overview Effect'
				),
			],
			[
				text(
					'El-Shawa, S, et al. 2022, Saving Our Future on Earth Through Our Presence in Space - Recommendations from the Young Generations on the Role of Space for Climate Action'
				),
			],
			[
				text(
					'El-Shawa, S, et al. 2022, Site Selection Criteria for Space Analogs: Jordan Space Research Initiative Case Study'
				),
			],
			[
				text(
					"El-Shawa, S, et al. 2021, From Cradle to Grave: ESA Clean Space's Approach to Space Sustainability"
				),
			],
			[
				text(
					'El-Shawa, S, et al. 2021, Valley of the Moon: Societal Benefits of Lunar Exploration in Jordan'
				),
			],
			[
				text(
					'El-Shawa, S, 2020, Quantum Consciousness, Intelligence, and Exosapiens: A Novel Approach to the Search for Extraterrestrial Intelligence'
				),
			],
			[
				text(
					'El-Shawa, S, 2020, Jordan and the United Nations Space2030 Agenda: A Roadmap for Space and Sustainable Development'
				),
			],
			[
				text(
					'El-Shawa, S, et al. 2020, A Future Carrington Event: Impact on International Telecommunications'
				),
			],
			[
				text(
					'El-Shawa, S, et al. 2020, A Comprehensive View of SETI: Technical, Legal, and Outreach Considerations'
				),
			],
		],
	},
	{
		title: 'IEEE/RSJ International Conference on Intelligent Robots and Systems - IROS',
		entries: [
			[
				text(
					"El-Shawa, S, et al. 2017, 'Is this the real life? Is this just fantasy?': Human Proxemic Preferences for Recognizing Robot Gestures in Physical Reality and Virtual Reality"
				),
			],
		],
	},
] satisfies ResearchGroup[]

export const researchProfileLink = {
	label: 'ResearchGate Profile',
	href: 'https://www.researchgate.net/profile/Sahba-El-Shawa',
	target: '_blank',
	rel: 'noreferrer',
} as const

export const lectures = [
	{
		title: 'Howard University School of Law',
		date: 'Oct 2022',
		href: 'https://drive.google.com/file/d/1Ll1-1N2VxlApS97-N06U5DqSMRJWHvto/view?usp=sharing',
		linkLabel: 'Space Law Course Guest Lecture on Space Commercialization',
		image: {
			src: '/images/lectures/HUSL.webp',
			alt: 'Howard University School of Law, Space Law Course Guest Lecture on Space Commercialization',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'United Nations',
		date: 'Sept 2022',
		href: 'https://drive.google.com/file/d/1trg2We7ZO6pAlhIrW2a4lij6Ahi01Ih0/view?usp=sharing',
		linkLabel:
			"Austria Symposium on Space for Climate Action Pitch Presentation representing the Space Generation Advisory Council's policy divison on Space for Climate Action",
		image: {
			src: '/images/lectures/UN_Austria.webp',
			alt: 'Austria Symposium on Space for Climate Action',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'United Nations',
		date: 'Sept 2022',
		href: 'https://drive.google.com/file/d/1Nvsr14AghES2vnYZrM7aYAa3U3D2z79C/view?usp=sharing',
		linkLabel:
			'General Assembly Science Summit Presentation representing the PhD in Sustainable Development and Climate Change on the value of interdisciplinarity',
		image: {
			src: '/images/lectures/UNGA.webp',
			alt: 'General Assembly Science Summit presentation',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
] satisfies MediaEntry[]

export const interviews = [
	{
		title: 'Diaries of Space Explorers',
		href: 'https://www.google.com/url?q=https%3A%2F%2Fdiariesofspace.podbean.com%2Fe%2Fthe-diaries-of-space-explorers-season-2-episode-12-sustainability-and-accessibility-of-the-space-sector-sahba-el-shawa%2F&sa=D&sntz=1&usg=AOvVaw1tWCDQCRBwE9J1RByx7cEH',
		linkLabel: 'Podcast Link',
		image: {
			src: '/images/interviews/diaries-of-space-explorers.webp',
			alt: 'Diaries of Space Explorers',
			width: 540,
			height: 513,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'Space Court Foundation',
		href: 'https://www.youtube.com/watch?v=peiCd3d9PrA',
		linkLabel: 'YouTube Link',
		image: {
			src: '/images/interviews/space-court-foundation.webp',
			alt: 'Space Court Foundation',
			width: 540,
			height: 307,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'University of Mississippi School of Law - Center for Air and Space Law',
		href: 'http://lawvideo.law.olemiss.edu/~poindexterbarnes/4th/WomenInAerospace-SpaceLaw-13MAY22.mp4',
		linkLabel: 'Panel Link',
		image: {
			src: '/images/interviews/olemissinterview.webp',
			alt: 'University of Mississippi School of Law - Center for Air and Space Law',
			width: 540,
			height: 472,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'Roya TV Jordan [Arabic]',
		href: 'https://roya.tv/videos/87948',
		linkLabel: 'Interview Link',
		image: {
			src: '/images/interviews/roya.webp',
			alt: 'Roya TV Jordan',
			width: 540,
			height: 472,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'The Quantum Insider',
		href: 'https://thequantuminsider.com/2021/02/28/quantum-applications-for-seti-a-perspective/',
		linkLabel: 'Article Link',
		image: {
			src: '/images/interviews/quantuminsider.webp',
			alt: 'The Quantum Insider',
			width: 540,
			height: 472,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'Ignited Thinkers',
		href: 'https://www.youtube.com/watch?v=b2mUm8bPGFI',
		linkLabel: 'YouTube Link',
		image: {
			src: '/images/interviews/ignited-thinkers.webp',
			alt: 'Ignited Thinkers',
			width: 597,
			height: 597,
			className: 'int-img',
		},
		variant: 'interview',
	},
] satisfies MediaEntry[]

export const testimonials = [
	{
		quote: [
			[
				text(
					'They say a good leader has integrity, courage, respect, empathy, and gratitude. After working with Sahba for two years, it is clear that she possesses all of these qualities and more. Throughout my time with the Jordan Space Research Initiative, Sahba has been motivational and supportive, which presented me with the opportunity to dive in new endeavors. I can honestly say that Sahba is a huge inspiration and I am truly blessed to have crossed paths with her.'
				),
			],
		],
		attribution: [
			text("- Zaina Abu Sha'ar, "),
			externalLink('JSRI', 'https://www.jsri.space/'),
			text(' Team Member and MSc Student in Space Engineering Systems at '),
			externalLink('Skoltech', 'https://www.skoltech.ru/en/'),
			text(', 2022'),
		],
	},
	{
		quote: [
			[
				text(
					"Sahba is an awesome person and a well-rounded professional. She has shown solid management skills and conducted cutting-edge research. We shared many moments throughout the "
				),
				externalLink('MSS', 'https://www.isunet.edu/mss/'),
				text(
					" program and I really enjoyed our talks about space, physics, and consciousness. I could appreciate her sound knowledge in those topics and her never-ending willingness to push the boundaries and explore the unknown. She loves what she does and she expresses in a way that makes others feel the same. Sahba's attitude and passion will surely inspire every team she could be part of in the future."
				),
			],
		],
		attribution: [
			text('- Ezequiel Gonzalez, Expert EO Mission Planning & Space Ops at '),
			externalLink('Leanspace', 'https://leanspace.io/'),
			text(', 2020'),
		],
	},
	{
		quote: [
			[
				text(
					'Sahba was my mentor for the first time at the 2019 Canadian Space Settlement Design Competition (CSSDC), which she had organized herself. As one of the many students who was in an unfamiliar environment, surrounded by other students I did not know, and anxious from the stakes of the competition, I found Sahba\'s leadership comforting and encouraging - she helped students overcome their nervousness and participate in the various activities and get to know each other. She turned a stressful competition into an enjoyable learning experience. During the following year\'s CSSDC, the pandemic had hit, and it was uncertain whether the competition would occur.'
				),
			],
			[
				text(
					'Sahba, however, had put impressive effort into offering an alternative, online version of the competition which helped us to not miss out on any key opportunities while in quarantine. Sahba was a great mentor in the 2019 International SSDC finals as well; when I came to her with conceptual problems, she responded in ways that helped me consider alternative ideas and reach the solution myself. Sahba\'s crucial support in the ISSDC, and her work in organizing the CSSDC and making the space industry more accessible to Canadian students, helped our team place first in the international competition that year.'
				),
			],
		],
		attribution: [
			text('- Alvina Gakhokidze, Electrical Engineering Student at the '),
			externalLink('University of British Columbia', 'https://www.ubc.ca/'),
			text(', 2022'),
		],
	},
] satisfies Testimonial[]

export const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/selshawa/',
		className: 'linkedin',
		target: '_blank',
		rel: 'noreferrer',
		icon: {
			src: '/svg/linkedin.svg',
			alt: 'LinkedIn icon',
			width: 80,
			height: 80,
		},
	},
	{
		href: 'https://www.instagram.com/sahbae/',
		className: 'instagram',
		target: '_blank',
		rel: 'noreferrer',
		icon: {
			src: '/svg/instagram.svg',
			alt: 'Instagram icon',
			width: 80,
			height: 80,
		},
	},
	{
		href: 'mailto:hello@sahba.space',
		className: 'gmail',
		icon: {
			src: '/svg/email.svg',
			alt: 'Email icon',
			width: 80,
			height: 80,
		},
	},
] satisfies SocialLink[]

export const footerContent = {
	owner: 'Sahba El-Shawa',
	creditLabel: 'shawa.dev',
	creditHref: 'https://shawa.dev/',
} as const