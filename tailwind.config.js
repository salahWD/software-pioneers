/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		gradientColorStops: (theme) => ({
			...theme('colors'),
			danger: '#e3342f',
			pink: '#0286b7'
		}),
		extend: {
			colors: {
				main: '#0286b7',
				pink: '#0286b7',
				pink: {
					100: '#85c4db',
					200: '#67b6d3',
					300: '#349ec5',
					400: '#0286b7',
					500: '#0286b7',
					600: '#0178a4',
					700: '#006c93',
					800: '#016b92'
				},
				customSky: '#cddef2',
				yellow: 'rgba(187, 255, 235, 0.76)'
			},
			animation: {
				scaleBounce: 'scaleBounce 3s ease-in-out infinite',
				wiggle: 'wiggle 3s ease-in-out infinite'
			},
			keyframes: {
				scaleBounce: {
					'0%, 100%': { transform: 'scale(1.25)' },
					'50%': { transform: 'scale(0.75)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			}
		}
	},
	plugins: []
};
