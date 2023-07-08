/** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {
// 			screens: {
// 				"3xl": "1920px",
// 			},
// 		},
// 	},
// 	plugins: [],
// };

const { replaceTailwindUnit, toEM } = require("tailwind-unit-replace");

const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			black: "#111111",
			white: "#fff",
			brand: "#338F51",
			blue: "#0085F4",
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			md: "1.25rem",
			xl: "1.375rem",
			"2xl": "2.75rem",
			"3xl": "4.375rem",
		},
		spacing: {
			px: "1px",
			0: "0",
			0.5: "0.125rem",
			1: "0.25rem",
			1.5: "0.375rem",
			2: "0.5rem",
			2.5: "0.625rem",
			3: "0.75rem",
			3.5: "0.875rem",
			4: "1rem",
			xsm: "2.1875rem",
			sm: "2.5em",
			md: "3.125rem",
			lg: "6.25rem",
			xl: "7.25rem",
		},
		extend: {
			screens: {
				"3xl": "1920px",
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
}; // your custom Tailwind config

module.exports = replaceTailwindUnit({
	exclude: ["fontFamily"],
	replacer: toEM, // or `toPX` to convert to pixel (16-based)
})(config);
