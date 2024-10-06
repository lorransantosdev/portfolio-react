/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        inconsolata: ['"inconsolata"', 'sans-serif'],
      },
      colors: {
        purpleCostum: "#6A00FF",
        pinkCostum: "#da1854",
      }
    },
  },
  plugins: [],
}