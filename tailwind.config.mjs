/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cabrelia-black': '#111111',
				'cabrelia-gray': '#F5F5F5',
				'cabrelia-muted': '#71717A',
			},
			fontFamily: {
				// 'Cormorant' para títulos elegantes, 'Inter' para lectura limpia
				serif: ['"Cormorant Garamond"', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			letterSpacing: {
				'ultra-wide': '.25em',
			}
		},
	},
	plugins: [],
}