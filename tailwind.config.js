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
		screens: {
			mobile: "375px",
			mobileLg: "640px",
			tabetSm: "768px",
			tablet: "991px",
			desktopSm: "1024px",
			DesktopMd: "1280px",
			Desktop2xl: "1536px",
			Desktop3xl: "1920px",
		},
		extend: {
			spacing: {
				xsm: "2.1875rem",
				sm: "2.5em",
				md: "3.125rem",
				lg: "6.25rem",
				xl: "7.25rem",
				"2xl": "10rem",
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
}; // your custom Tailwind config

module.exports = replaceTailwindUnit({
	exclude: ["fontFamily"],
	replacer: toEM, // or `toPX` to convert to pixel (16-based)
})(config);
