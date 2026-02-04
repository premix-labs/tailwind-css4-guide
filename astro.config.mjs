// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
	site: 'https://premix-labs.github.io',
	base: '/tailwind-css4-guide',
	integrations: [
		starlight({
			title: 'Tailwind CSS 4 Guide',
			description: 'คู่มือ Tailwind CSS 4 ฉบับสมบูรณ์ (Basic → Advanced)',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
			sidebar: [
				{
					label: 'Part 1: เริ่มต้นใช้งาน',
					autogenerate: { directory: 'part1' },
				},
				{
					label: 'Part 2: Core Utilities',
					autogenerate: { directory: 'part2' },
				},
				{
					label: 'Part 3: States & Responsive',
					autogenerate: { directory: 'part3' },
				},
				{
					label: 'Part 4: Visual Effects',
					autogenerate: { directory: 'part4' },
				},
				{
					label: 'Part 5: Customization',
					autogenerate: { directory: 'part5' },
				},
				{
					label: 'Part 6: Interactivity & A11y',
					autogenerate: { directory: 'part6' },
				},
				{
					label: 'Part 7: Projects',
					autogenerate: { directory: 'part7' },
				},
			],
		}),
	],
});
