/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#659287',
          secondary: '#88BDA4',
          accent: '#B1D3B9',
          light: '#E6F2DD',
          // Dark mode shades derived from brand palette
          darkPrimary: '#4E7A6E',
          darkSecondary: '#6B9E82',
          darkAccent: '#8EAE94',
          darkBg: '#1E2F24',
          darkSurface: '#2C3E35',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};