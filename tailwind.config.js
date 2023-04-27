/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: 'var(--font-fira)',
        east: 'var(--font-east-sea)',
      },
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
