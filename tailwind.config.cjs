/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile-s': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptop-l': '1440px'
    },
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
      gridTemplateRows: {
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        // add more rows as needed
      },
      backgroundImage: {
        stockholm: "url('/src/assets/stockholm.jpg')",
        "new-york1": "url('/src/assets/new-york.jpg')",
        "new-york2": "url('/src/assets/new-york2.jpg')",
        "los-angeles": "url('/src/assets/los-angeles.jpg')",
      },
      colors: {
        "neon-red": "#e50b0b",
      },
    },
  },
  plugins: [],
};
