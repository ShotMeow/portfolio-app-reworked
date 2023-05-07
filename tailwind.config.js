const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-urbanist)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				gray: "#6E6E75",
			},
			animation: {
				"fade-in": "fade-in 1.5s ease-in-out forwards",
				title: "title 2s ease-out forwards",
				"fade-left": "fade-left 1s ease-in-out forwards",
				"fade-right": "fade-right 1s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				title: {
					"0%": {
						"letter-spacing": "0.5em",
						opacity: "0",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						opacity: "100%",
					},
				},
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")],
};
