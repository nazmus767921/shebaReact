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
		extend: {
			screens: {
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}; // your custom Tailwind config

module.exports = replaceTailwindUnit({
	exclude: ["fontFamily"],
	replacer: toEM, // or `toPX` to convert to pixel (16-based)
})(config);
