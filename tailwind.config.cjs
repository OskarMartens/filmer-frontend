/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stockholm': "url('/src/assets/stockholm.jpg')",
        'new-york1': "url('/src/assets/new-york.jpg')",
        'new-york2': "url('/src/assets/new-york2.jpg')",
        'los-angeles': "url('/src/assets/los-angeles.jpg')"
      },
      colors: {
        'neon-red': '#e50b0b',
      },
      aspectRatio: {
        '2/3': '2 / 3'
      }
    },
  },
  plugins: [],
}
