/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.amber['200'],
				accent: colors.amber['50']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
