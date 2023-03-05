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
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
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
