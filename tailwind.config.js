/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		colors: {
			brand: {
				DEFAULT: '#FC9338',
				50: '#FFF5ED',
				100: '#FEEAD9',
				200: '#FED4B1',
				300: '#FDBF88',
				400: '#FDA960',
				500: '#FC9338',
				550: '#f68b2f',
				600: '#F87504',
				700: '#C15B03',
				800: '#8A4102',
				900: '#522701',
				950: '#371A01'
			},
			cta: {
				DEFAULT: '#2A669F',
				50: '#E4F7F8',
				100: '#CCEEF2',
				200: '#9CD7E5',
				300: '#6CB9D8',
				400: '#3B94CB',
				500: '#2A669F',
				600: '#234B83',
				700: '#1B3366',
				800: '#14204A',
				900: '#0C102E'
			},
			gray: {
				DEFAULT: '#37506D',
				50: '#EBEFF5',
				100: '#E4EAF1',
				200: '#B7C4D1',
				300: '#8D9DB0',
				400: '#677789',
				500: '#45515E',
				600: '#36424E',
				700: '#29323D',
				800: '#1C232B',
				900: '#11171C',
				950: '#070C13'
			}
		},
		extend: {
			fontFamily: {
				brand: 'Pacifico Regular'
			}
		}
	},
	plugins: []
};
