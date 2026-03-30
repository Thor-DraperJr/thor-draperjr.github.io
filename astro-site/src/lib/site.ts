import type { SiteConfig } from './content';

export const siteConfig: SiteConfig = {
	title: 'Thor Draper Jr',
	tagline: 'Operator notes on technology, leadership, AI, and the long game',
	description:
		'A working library of ideas, experiments, and operator notes on technology, leadership, AI, and career development from Thor Draper Jr.',
	lang: 'en',
	url: 'https://thor-draperjr.github.io',
	navigation: [
		{ title: 'Home', url: '/' },
		{ title: 'Archive', url: '/archive/' },
		{ title: 'About', url: '/about/' },
		{ title: 'Resume', url: '/resume/' },
	],
	social: {
		linkedin: 'https://www.linkedin.com/in/thor-draper-jr/',
		github: 'https://github.com/Thor-DraperJr',
		email: 'thordraper2@outlook.com',
	},
};