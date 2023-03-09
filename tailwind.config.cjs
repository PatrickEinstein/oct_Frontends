/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xsm: "428px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				crimson: "#dc143c",
				paleWhite: "#E5E5E5",
				lightBlack: "##061501",
				pink: "#FB4290",
				primary: "#0b204a",
				secondary: "#fe0044",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
				plusSans: ["Plus Jakarta Sans", "sans-serif"],
				publicSans: ["Public Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
