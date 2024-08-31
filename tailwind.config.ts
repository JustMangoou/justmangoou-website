import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			keyframes: {
				slideInFromBottom: {
					'0%': {
						transform: 'translateY(2vh)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out'
			}
		}
	},

	plugins: [typography]
} as Config;
