/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-checked': '#DE4747', 
        'clear-noChecked':'#D9D9D9',
        'btn-color':'#84C574',
        'btn-color-hover':'#73B463',
        'hoverState': '#B4B4B4',
      },

    },
  },
  plugins: [],
}
