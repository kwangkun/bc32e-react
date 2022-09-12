/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        1: '1px',
        2: '2px',
        3: '3px',
        16: '16px',
        32: '64px',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '3px',
        16: '16px',
        32: '64px',
      }
    },
  },
  plugins: [],
}