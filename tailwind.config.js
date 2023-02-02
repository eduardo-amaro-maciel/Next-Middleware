/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d2f254',
        secondery: '#17171b',
        neutro: '#f6f6f6',
        gray: '#a2a2a4'
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}