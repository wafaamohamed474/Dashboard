/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#0A0A0A',
        darkText: '#EAEAEA',
        darkCard: "#333333"
      },
    },
  },
  plugins: [],
  darkMode : "class",
}

