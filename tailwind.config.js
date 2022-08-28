/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      content: {
        line: 'url("/src/assets/line.svg")',
      },
    },
  },
  plugins: [],
};
