/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    extend: {
          screens:{
            xs: "320px",
            sm: "375px",
            sml: "500px",
            md: "667px",
            mdl: "768px",
            lg: "960px",
            lgl: "1024px",
            xl: "1280px",
          },
          fontFamily: {
            bodyFont: ["Poppins", "sans-serif"],
            titleFont: ["Montserrat", "sans-serif"],
          },
          colors: {
            bodyColor: "#212428",
            lightText: "#c4cfde",
            boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
            designColor: "#ff014f",
          },
          boxShadow: {
            shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
          },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
