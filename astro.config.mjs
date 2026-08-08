// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.morirosland.com',
	integrations: [sitemap()],
	prefetch: {
		prefetchAll: true,
	},
	// Only download the weight/style combinations actually used on the site.
	fonts: [
		{
			name: 'STIX Two Text',
			cssVariable: '--font-stix-two-text',
			provider: fontProviders.google(),
			weights: [400, 500],
			styles: ['normal'],
			fallbacks: ['Georgia', 'Times New Roman', 'serif'],
		},
	],
});
