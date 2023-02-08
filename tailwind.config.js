/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        "fira": "var(--font-fira)",
        "east": "var(--font-east-sea)"
      }
    },
  },
  plugins: [],
}
