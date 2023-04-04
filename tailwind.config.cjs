/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        'ikaros': ['Ikaros-Regular', 'sans-serif'],
        'ikaros-light': ['Ikaros-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
