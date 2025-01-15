/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('public/vimal-s-K4ADp0W8gB0-unsplash.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add your font here
        press: ['"Press Start 2P"', 'serif'],
      },
    },
  },
  plugins: [],
}

