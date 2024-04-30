/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koulen: ['Koulen', 'sans-serif'],
      },
      colors: {
        'custom-red': '#770000',
        'redd': '#FF0000'
      },
    },
  },
  plugins: [],
}