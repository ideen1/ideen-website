/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: '#BBBBBF',
        secondary: '#A3A9AA',
        primary: '#372549',
        accent: '#32E875',
      }
    },
  },
  plugins: [],
}
