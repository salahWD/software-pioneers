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
				// customPlate: {

				// },
				customSky: {
					200: '#3abef933',
					300: '#3abef94d',
					950: '#3abef9'
				},
				customBlue: {
					950: '#38549e'
				},
				customDark: '#353535',
				yellow: 'rgb(16, 112, 255, 0.25)',
				'teal-600': '#4c9f70',
				'blue-100': '#ebf8ff'
			},
			animation: {
				scaleBounce: 'scaleBounce 3s ease-in-out infinite',
				wiggle: 'wiggle 3s ease-in-out infinite',
				fadeinup: 'fade-in-up 1s ease-in 0.25s 1',
				fadeoutup: 'fade-out-up 1s ease-in-out 0.25s 1',
				dropin: 'drop-in 0.5s ease-in-out 0.25s 1',
				dropout: 'drop-out 0.5s ease-in-out 0.25s 1'
			},
			keyframes: {
				scaleBounce: {
					'0%, 100%': { transform: 'scale(1.25)' },
					'50%': { transform: 'scale(0.75)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, 100%, 0)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, 100%, 0)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)'
					}
				},
				'drop-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0)',
						animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'drop-out': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)',
						animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0)'
					}
				}
			},
			scale: {
				'-100': '-1'
			}
		},
		fontFamily: {
			dm: ['DM Sans', 'sans-serif']
		}
	},
	plugins: []
};
