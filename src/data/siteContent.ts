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
	width?: number
	height?: number
	className?: string
}

export interface NavChildItem {
	label: string
	href: `/${string}`
}

export interface NavItem {
	label: string
	href?: `/${string}`
	children?: NavChildItem[]
}

export interface PageHeading {
	title: string
	arabicTitle: string
	description: string
}

export interface AboutContent {
	title: string
	arabicTitle: string
	paragraphs: RichTextPart[][]
}

export interface LeadershipItem {
	title: string
	details: RichTextPart[][]
	website?: {
		label: string
		href: string
		target?: '_blank' | '_self'
		rel?: string
	}
}

export interface ResearchGroup {
	title: string
	entries: RichTextPart[][]
}

export interface MediaEntry {
	title: string
	date?: string
	summary?: string
	href: string
	ctaLabel: string
	image?: ImageAsset
	variant: 'lecture' | 'interview'
	emphasis?: 'darken'
}

export interface Testimonial {
	quote: RichTextPart[][]
	attribution: RichTextPart[]
}

export interface SocialLink {
	label: string
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

const externalCta = (label: string, href: string) => ({
	label,
	href,
	target: '_blank' as const,
	rel: 'noreferrer',
})

export const siteMeta = {
	title: 'Sahba El-Shawa',
	description:
		'Sahba El-Shawa is a Palestinian-Jordanian engineer, space and sustainability researcher, and social entrepreneur.',
} as const

export const brand = {
	label: 'sahba.space',
	href: '/home',
	icon: {
		src: '/favicon-32x32.png',
		alt: 'Moon icon',
		width: 32,
		height: 32,
	},
} as const

export const navigationItems: NavItem[] = [
	{ label: 'Home', href: '/home' },
	{ label: 'Leadership', href: '/leadership' },
	{ label: 'Research', href: '/research' },
	{ label: 'Lectures', href: '/lectures' },
	{
		label: 'More',
		children: [
			{ label: 'Interviews', href: '/interviews' },
			{ label: 'Testimonials', href: '/testimonials' },
			{ label: 'Contact', href: '/contact' },
		],
	},
]

export const mobileNavigationItems: NavChildItem[] = [
	{ label: 'Home', href: '/home' },
	{ label: 'Leadership', href: '/leadership' },
	{ label: 'Research', href: '/research' },
	{ label: 'Lectures', href: '/lectures' },
	{ label: 'Interviews', href: '/interviews' },
	{ label: 'Testimonials', href: '/testimonials' },
	{ label: 'Contact', href: '/contact' },
]

export const pageHeadings = {
	home: {
		title: 'Sahba El-Shawa',
		arabicTitle: 'صهباء الشوا',
		description: siteMeta.description,
	},
	leadership: {
		title: 'Leadership',
		arabicTitle: 'قيادة',
		description: 'Leadership roles and institutional work by Sahba El-Shawa.',
	},
	research: {
		title: 'Research',
		arabicTitle: 'أبحاث',
		description: 'Research publications and conference work by Sahba El-Shawa.',
	},
	lectures: {
		title: 'Lectures',
		arabicTitle: 'محاضرات',
		description: 'Lectures, webinars, and presentations by Sahba El-Shawa.',
	},
	interviews: {
		title: 'Interviews',
		arabicTitle: 'مقابلات',
		description: 'Interviews, podcasts, and media appearances by Sahba El-Shawa.',
	},
	testimonials: {
		title: 'Testimonials',
		arabicTitle: 'توصيات',
		description: 'Selected testimonials about Sahba El-Shawa.',
	},
	contact: {
		title: 'Contact',
		arabicTitle: 'تواصل',
		description: 'Contact and social links for Sahba El-Shawa.',
	},
} satisfies Record<string, PageHeading>

export const aboutContent: AboutContent = {
	title: pageHeadings.home.title,
	arabicTitle: pageHeadings.home.arabicTitle,
	paragraphs: [
		[
			text('Sahba El-Shawa (صهباء الشوا) is a Palestinian-Jordanian engineer, space and sustainability researcher, and social entrepreneur. She is the Founder of the '),
			externalLink('Jordan Space Research Initiative', 'https://jsri.space/'),
			text(', which aims to bridge sustainable development with space exploration through space analog research and education in Jordan, as well as the '),
			externalLink('Palestine Space Institute', 'https://www.palestinespace.org/'),
			text(', a think tank advancing the ethical use of space technologies and advocating for demilitarization, decolonization, and sustainability in global space governance. She was recently named as one of 17 '),
			externalLink('UN Young Leaders for the SDGs', 'https://www.un.org/youthaffairs/en/meet-2025-cohort-young-leaders-sdgs'),
			text(' by the United Nations Youth Office.'),
		],
		[
			text('Sahba holds a BASc in Mechanical Engineering from the '),
			externalLink('University of British Columbia', 'https://www.ubc.ca/'),
			text(', an MSc in Space Studies from the '),
			externalLink('International Space University', 'https://isunet.edu/'),
			text(', and a '),
			externalLink('PhD in Sustainable Development and Climate Change', 'https://www.phd-sdc.it/'),
			text(' at IUSS Pavia in Italy. Her PhD research explores the use of emerging technologies such as Virtual Reality and Artificial Intelligence to improve accessibility to space-derived knowledge for sustainability applications and policymaking, particularly through the lens of epistemic justice. Currently, Sahba works as a postdoctoral researcher in Earth Observation data science at '),
			externalLink('Eurac Research', 'https://www.eurac.edu/en'),
			text(' in Italy.'),
		],
		[
			text('During her studies, she collaborated with the '),
			externalLink('German Aerospace Centre', 'http://dlr.de/'),
			text(' (DLR) on robotics research and completed an internship at the '),
			externalLink('European Space Agency', 'http://esa.int/'),
			text("'s Clean Space initiative focusing on the environmental impacts of space activities, both on Earth and in space, as well as the ESA Φ-lab, where she developed a novel environmental feature clustering framework using Earth Observation and AI for impact assessment."),
		],
		[
			text('Sahba previously worked with the '),
			externalLink('Space Generation Advisory Council', 'http://spacegeneration.org/'),
			text(', acting as National Point of Contact for Jordan, as well as Co-Lead of the Ethics & Human Rights project group and the Space for Climate Action policy working group. She also served as Jordan\'s National Coordinator in the '),
			externalLink('Moon Village Association', 'http://moonvillageassociation.org/'),
			text(' and its Participation of Emerging Space Countries program.'),
		],
		[
			text('An award-winning researcher, Sahba is the first Jordanian and the first female Palestinian analog astronaut. She was the recipient of the '),
			externalLink('Women in Aerospace Young Professional Award', 'https://www.wia-europe.org/2021/10/13/wia-e-grants-awards-winners-announced/'),
			text(' in 2021, the '),
			externalLink('Space Generation Leadership Award', 'https://spacegeneration.org/announcement-of-the-2022-space-generation-leadership-award'),
			text(' in 2022, the IAF Emerging Space Leaders Award in 2023, and was previously selected as an Alternate Astronaut for '),
			externalLink('Space for Humanity', 'https://spaceforhumanity.org/'),
			text('. She is passionate about outreach and education, and has organized space design competitions for students around the world including Canada, Europe, and the Middle East.'),
		],
		[
			text('Guided by a vision of space exploration rooted in justice, sustainability, and collective responsibility, Sahba is committed to reshaping how space technologies are developed and applied. Her work bridges technical innovation with critical policy and ethical frameworks, striving for a future where space serves the needs of people and the planet.'),
		],
	],
}

export const leadershipItems: LeadershipItem[] = [
	{
		title: 'UN Youth Office',
		details: [
			[
				text('Selected as one of 17 UN Young Leader for the SDGs (2025-2027 cohort) out of over 33,000 global applicants'),
			],
		],
		website: externalCta('Website', 'https://www.un.org/youthaffairs/en/meet-2025-cohort-young-leaders-sdgs'),
	},
	{
		title: 'Palestine Space Institute',
		details: [[text('Founder and Managing Director of PSI (2023 - present)')]],
		website: externalCta('Website', 'https://www.palestinespace.org/'),
	},
	{
		title: 'Jordan Space Research Initiative',
		details: [[text('Founder and Executive Director of JSRI (2020 - present)')]],
		website: externalCta('Website', 'https://jsri.space/'),
	},
	{
		title: 'Space Generation Advisory Council',
		details: [
			[text('Co-Lead of Ethics and Human Rights Project Group (2021 - 2024)')],
			[text('Co-Lead of Space for Climate Action Policy Division (2022 - 2024)')],
			[text('National Point of Contact for Jordan (2020 - 2024)')],
		],
		website: externalCta('Website', 'http://spacegeneration.org/'),
	},
	{
		title: 'Moon Village Association',
		details: [
			[text('Team Lead in Participation of Emerging Space Countries Program (2020 - present)')],
			[text('National Coordinator for Jordan (2020 - 2024)')],
		],
		website: externalCta('Website', 'http://moonvillageassociation.org/'),
	},
	{
		title: 'Space Science and Engineering Foundation',
		details: [[text('Coordinator of the Environmental Design Challenge (2022)')]],
	},
	{
		title: 'Space Settlement Design Competitions',
		details: [
			[text('Organizer of Canadian Space Settlement Design Competition (2019, 2020, 2021)')],
			[text('Organizer of Middle East Space Design Competition for Jordan and Palestine (2020, 2021)')],
			[text('Organizer of European Space Design Competition in France in collaboration with the International Space University (2020)')],
		],
	},
]

export const researchGroups: ResearchGroup[] = [
	{
		title: 'Acta Astronautica - Elsevier Journal',
		entries: [
			[
				text('El-Shawa, S, et al. 2022, Volume 200, November 2022, Pages 574-585, Jordan Space Research Initiative: Societal Benefits of Lunar Exploration and Analog Research'),
			],
		],
	},
	{
		title: 'Global Space Conference on Climate Change - GLOC',
		entries: [
			[
				text('El-Shawa, S et al., 2023, Recommendations on Space for Climate Action from the Official Policy Position of the Space Generation Advisory Council'),
			],
			[
				text('El-Shawa, S et al., 2023, Space for Environmental Disaster Management: Flood Mitigation and Adaptation Case Study'),
			],
		],
	},
	{
		title: 'International Astronautical Congress - IAC',
		entries: [
			[text('El-Shawa, S, and Rotola, G, 2025, Earth Observation for Justice in Gaza: Ethical and Legal Implications')],
			[text('El-Shawa, S, and Persaud, D, 2025, Witnessing with Earth Observation: Using Sentinel-2 Data to Assess Environmental Destruction in Gaza')],
			[text('El-Shawa, S, 2024, Pathways for the UN Space2030 Agenda: A Comprehensive View of the Impact of Space on Social and Environmental Sustainability')],
			[text('El-Shawa, S and Abu-Sha\'ar, Z, 2024, Lessons Learned from PETRA-1: Psychological, Environmental, and Technological Research Analog')],
			[text('El-Shawa, S and Persaud, D, 2024, The Palestine Space Institute: Disrupting a Culture of Space Militarism, Colonialism, and Imperialism')],
			[text('El-Shawa, S et al., 2024, Space as a Zone of Peace: Envisioning a Resolution for the Demilitarization of Outer Space')],
			[text('El-Shawa, S et al., 2023, First Analog Mission of the Jordan Space Research Initiative: One Small Step for Emerging Space Countries, One Giant Leap for Jordan')],
			[text('El-Shawa, S et al., 2023, Investigating the Neuropsychological Impact of the Overview Effect using Virtual Reality')],
			[text('El-Shawa, S, 2022, Bringing Space Down to Earth: Virtual Reality Simulations of the Overview Effect')],
			[text('El-Shawa, S, et al. 2022, Saving Our Future on Earth Through Our Presence in Space - Recommendations from the Young Generations on the Role of Space for Climate Action')],
			[text('El-Shawa, S, et al. 2022, Site Selection Criteria for Space Analogs: Jordan Space Research Initiative Case Study')],
			[text("El-Shawa, S, et al. 2021, From Cradle to Grave: ESA Clean Space's Approach to Space Sustainability")],
			[text('El-Shawa, S, et al. 2021, Valley of the Moon: Societal Benefits of Lunar Exploration in Jordan')],
			[text('El-Shawa, S, 2020, Quantum Consciousness, Intelligence, and Exosapiens: A Novel Approach to the Search for Extraterrestrial Intelligence')],
			[text('El-Shawa, S, 2020, Jordan and the United Nations Space2030 Agenda: A Roadmap for Space and Sustainable Development')],
			[text('El-Shawa, S, et al. 2020, A Future Carrington Event: Impact on International Telecommunications')],
			[text('El-Shawa, S, et al. 2020, A Comprehensive View of SETI: Technical, Legal, and Outreach Considerations')],
		],
	},
	{
		title: 'Symposium on Space Educational Activities - SSEA',
		entries: [[text('El-Shawa, S, et al. 2022, The Importance of Outreach and Education for Emerging Space Countries')]],
	},
	{
		title: 'IEEE/RSJ International Conference on Intelligent Robots and Systems - IROS',
		entries: [
			[
				text("El-Shawa, S, et al. 2017, 'Is this the real life? Is this just fantasy?': Human Proxemic Preferences for Recognizing Robot Gestures in Physical Reality and Virtual Reality"),
			],
		],
	},
]

export const researchProfileLink = {
	label: 'ResearchGate Profile',
	href: 'https://www.researchgate.net/profile/Sahba-El-Shawa/research',
	target: '_blank',
	rel: 'noreferrer',
} as const

export const lectures: MediaEntry[] = [
	{
		title: 'Moon Village Assocation Culture Considerations Webinar',
		date: 'June 2025',
		summary:
			"Talk on A'wna (Palestinian concept of community and collaboration) in the context of PSI and JSRI's work",
		href: 'https://www.youtube.com/watch?v=5UoEp3TbrLs&t=2508s',
		ctaLabel: 'Youtube Link',
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'Howard University School of Law, Space Law Course',
		date: 'Oct 2022',
		summary: 'Guest Lecture on Space Commercialization',
		href: 'https://docs.google.com/presentation/d/15MzNA1l0fEpkeWE3L9VCSLXb8NHz0UmHnlXjKVx5wKo/present',
		ctaLabel: 'Open Presentation',
		image: {
			src: '/images/lectures/HUSL.webp',
			alt: 'Howard University School of Law, Space Law Course',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'United Nations/Austria Symposium on Space for Climate Action',
		date: 'Sept 2022',
		summary:
			"Pitch Presentation representing the Space Generation Advisory Council's policy divison on Space for Climate Action",
		href: 'https://docs.google.com/presentation/d/1OdRiXTTUyW5yCEwxE1fJeDUEaZoAy4guQfDocAtcpt0/present',
		ctaLabel: 'Open Presentation',
		image: {
			src: '/images/lectures/UN_Austria.webp',
			alt: 'United Nations/Austria Symposium on Space for Climate Action',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'United Nations General Assembly Science Summit',
		date: 'Sept 2022',
		summary:
			'Presentation representing the PhD in Sustainable Development and Climate Change on the value of interdisciplinarity',
		href: 'https://docs.google.com/presentation/d/197yanRxoDgsqF6SSOc8CEYuxN1mbNgiRuNYtYhdgafc/present',
		ctaLabel: 'Open Presentation',
		image: {
			src: '/images/lectures/UNGA.webp',
			alt: 'United Nations General Assembly Science Summit',
			width: 640,
			height: 360,
		},
		variant: 'lecture',
		emphasis: 'darken',
	},
	{
		title: 'European Rover Challenge, European Space Foundation',
		date: 'Sept 2021',
		summary:
			'Presentation representing the Jordan Space Research Initiative, our goals for the Moon Village and Sustainable Development',
		href: 'https://youtu.be/xnsMfoH_moY',
		ctaLabel: 'Youtube Link',
		variant: 'lecture',
		emphasis: 'darken',
	},
]

export const interviews: MediaEntry[] = [
	{
		title: 'Space+ Interview',
		href: 'https://open.substack.com/pub/itsspaceplus/p/theres-no-distinction-between-missile',
		ctaLabel: 'Interview Link',
		variant: 'interview',
	},
	{
		title: 'Pod Ad Astra',
		href: 'https://open.spotify.com/episode/6SoxBYYpBcEq49l2xTaujQ',
		ctaLabel: 'Podcast Link',
		variant: 'interview',
	},
	{
		title: 'SGAC Space for Climate Action Panel',
		href: 'https://www.youtube.com/watch?v=4jjckV3FIfY',
		ctaLabel: 'Panel Link',
		variant: 'interview',
	},
	{
		title: 'Women Adore Tech',
		href: 'https://www.youtube.com/watch?v=ds4G2EFPt5o',
		ctaLabel: 'Interview Link',
		variant: 'interview',
	},
	{
		title: 'Kainaat Astronomy',
		href: 'https://www.youtube.com/watch?v=itsTC7igvME',
		ctaLabel: 'Interview Link',
		variant: 'interview',
	},
	{
		title: 'Ignited Thinkers',
		href: 'https://www.youtube.com/watch?v=b2mUm8bPGFI',
		ctaLabel: 'Interview Link',
		image: {
			src: '/images/interviews/ignited-thinkers.webp',
			alt: 'Ignited Thinkers',
			width: 597,
			height: 597,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'More to Space than Air Podcast',
		href: 'https://www.youtube.com/watch?v=VwwLrNHMKB4',
		ctaLabel: 'Interview Link',
		variant: 'interview',
	},
	{
		title: 'Dark Matter Podcast - Friends of Europe',
		href: 'https://www.youtube.com/watch?v=WS2tZPkULaU&ab_channel=FriendsofEurope',
		ctaLabel: 'Interview Link',
		variant: 'interview',
	},
	{
		title: 'Diaries of Space Explorers',
		href: 'https://diariesofspace.podbean.com/e/the-diaries-of-space-explorers-season-2-episode-12-sustainability-and-accessibility-of-the-space-sector-sahba-el-shawa/',
		ctaLabel: 'Podcast Link',
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
		ctaLabel: 'Youtube Link',
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
		ctaLabel: 'Panel Link',
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
		ctaLabel: 'Interview Link',
		image: {
			src: '/images/interviews/roya.webp',
			alt: 'Roya TV Jordan [Arabic]',
			width: 540,
			height: 472,
			className: 'int-img',
		},
		variant: 'interview',
	},
	{
		title: 'The Quantum Insider',
		href: 'https://thequantuminsider.com/2021/02/28/quantum-applications-for-seti-a-perspective/',
		ctaLabel: 'Article Link',
		image: {
			src: '/images/interviews/quantuminsider.webp',
			alt: 'The Quantum Insider',
			width: 540,
			height: 472,
			className: 'int-img',
		},
		variant: 'interview',
	},
]

export const testimonials: Testimonial[] = [
	{
		quote: [
			[
				text('"My discipline considers Sahba as a standard of integrity. Her passion for ethics and her capacity to inspire her peers has garnered an international reputation through both her academic work and mentorship of numerous communities. Greater than her formal organizational achievements is that she has unwittingly amassed a community of junior professionals who look to her as an example of principle. This is the greatest value Sahba brings to the teams she leads... I have no doubt in Sahba\'s capacity to inspire future generations, because she is already so deeply engaged in doing this already."'),
			],
		],
		attribution: [
			text('— Divya Persaud, Research Manager at '),
			externalLink('PSI', 'https://www.palestinespace.org/'),
			text(' and Research Fellow at the University of Glasgow, 2025'),
		],
	},
	{
		quote: [
			[
				text('"Sahba is a creative researcher who is not limited by conventional paradigms but instead connects concepts, ideas, and methodologies from human and scientific disciplines."'),
			],
		],
		attribution: [
			text('— Mario Martina, PhD Coordinator in the '),
			externalLink('PhD SDC', 'https://www.phd-sdc.it/'),
			text(' program and University Rector at '),
			externalLink('IUSS Pavia', 'https://www.iusspavia.it/en'),
			text(', 2023'),
		],
	},
	{
		quote: [
			[
				text('"At the most basic level, Sahba is simply very smart. She is quick to see the point of an argument and she combines this skill with a level of imagination and originality well beyond what one would expect of a very young scholar. Moreover, Sahba is very good at articulating her imaginative ideas, she expresses herself in a clear and precise manner and is an excellent listener. She has an engineering background, but her main characteristic is an exceptional intellectual curiosity."'),
			],
		],
		attribution: [
			text('— Alfredo Tomasetta, PhD Supervisor in the '),
			externalLink('PhD SDC', 'https://www.phd-sdc.it/'),
			text(' program and Associate Professor at '),
			externalLink('IUSS Pavia', 'https://www.iusspavia.it/en'),
			text(', 2022'),
		],
	},
	{
		quote: [
			[
				text('"They say a good leader has integrity, courage, respect, empathy, and gratitude. After working with Sahba for two years, it is clear that she possesses all of these qualities and more. Throughout my time with the Jordan Space Research Initiative, Sahba has been motivational and supportive, which presented me with the opportunity to dive in new endeavors. I can honestly say that Sahba is a huge inspiration and I am truly blessed to have crossed paths with her."'),
			],
		],
		attribution: [
			text("— Zaina Abu Sha'ar, "),
			externalLink('JSRI', 'https://jsri.space/'),
			text(' Team Member and MSc Student in Space Engineering Systems at '),
			externalLink('Skoltech', 'https://www.skoltech.ru/en/'),
			text(', 2022'),
		],
	},
	{
		quote: [
			[
				text('"Sahba is an awesome person and a well-rounded professional. She has shown solid management skills and conducted cutting-edge research. We shared many moments throughout the '),
				externalLink('MSS', 'https://mss.isunet.edu/'),
				text(' program and I really enjoyed our talks about space, physics, and consciousness. I could appreciate her sound knowledge in those topics and her never-ending willingness to push the boundaries and explore the unknown. She loves what she does and she expresses in a way that makes others feel the same. Sahba\'s attitude and passion will surely inspire every team she could be part of in the future."'),
			],
		],
		attribution: [
			text('— Ezequiel González, Expert EO Mission Planning & Space Ops at '),
			externalLink('Leanspace', 'https://leanspace.io/'),
			text(', 2020'),
		],
	},
	{
		quote: [
			[
				text('"Sahba was my mentor for the first time at the 2019 Canadian Space Settlement Design Competition (CSSDC), which she had organized herself. As one of the many students who was in an unfamiliar environment, surrounded by other students I didn\'t know, and anxious from the stakes of the competition, I found Sahba\'s leadership comforting and encouraging - she helped students overcome their nervousness and participate in the various activities and get to know each other. She turned a stressful competition into an enjoyable learning experience. During the following year\'s CSSDC, the pandemic had hit, and it was uncertain whether the competition would occur. Sahba, however, had put impressive effort into offering an alternative, online version of the competition which helped us to not miss out on any key opportunities while in quarantine. Sahba was a great mentor in the 2019 International SSDC finals as well; when I came to her with conceptual problems, she responded in ways that helped me consider alternative ideas and reach the solution myself. Sahba\'s crucial support in the ISSDC, and her work in organizing the CSSDC and making the space industry more accessible to Canadian students, helped our team place first in the international competition that year."'),
			],
		],
		attribution: [
			text('— Alvina Gakhokidze, Electrical Engineering Student at the '),
			externalLink('University of British Columbia', 'https://www.ubc.ca/'),
			text(', 2022'),
		],
	},
]

export const socialLinks: SocialLink[] = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/selshawa',
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
		label: 'Instagram',
		href: 'https://instagram.com/sahbae',
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
		label: 'Email',
		href: 'mailto:sahba.space@gmail.com',
		className: 'gmail',
		icon: {
			src: '/svg/email.svg',
			alt: 'Email icon',
			width: 80,
			height: 80,
		},
	},
]

export const footerContent = {
	owner: 'Sahba El-Shawa',
	note: 'Header image courtesy of Unsplash',
} as const
