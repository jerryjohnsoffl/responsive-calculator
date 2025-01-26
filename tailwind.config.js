/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'off-white': '#F1F2F3',
        'dull-white': '#D2D3DA',
        'dark': '#17171C',
        'dull-dark': '#4E505F',
        'toggle': '#2E2F38',
        'dark-btn': '#2E2F38'
      }
    },
  },
  plugins: [],
}

