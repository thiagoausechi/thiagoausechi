const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      debug: '#FF0000',
      primary: {
        DEFAULT: colors.sky[500],
        dark: colors.cyan[900],
      },
      accent: {
        DEFAULT: '#FF6059',
        dark: colors.red[600],
      },
      heading: colors.zinc[100],
      text: colors.zinc[400],
      comment: colors.zinc[600],
      disabled: colors.zinc[600],
      border: colors.zinc[600],
      background: {
        DEFAULT: colors.zinc[800],
        dark: colors.zinc[900],
      },
    },
    extend: {
      animation: {
        flash: 'flash 1s linear infinite',
      },
      keyframes: {
        flash: {
          'from, 50%, to': { opacity: 1 },
          '51%, 99%': { opacity: 0 },
        },
      },
      fontFamily: {
        fira: 'var(--font-fira)',
        east: 'var(--font-east-sea)',
        virgil: 'var(--font-virgil)',
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
};
