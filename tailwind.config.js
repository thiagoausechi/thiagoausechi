/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '425px',
        // => @media (min-width: 425px) { ... }

        desktop: '1360px',
        // => @media (min-width: 1360px) { ... }
      },
    },
  },
  plugins: [],
}
