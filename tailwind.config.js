/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
      },
      fontFamily: {
        "cascadia-code": ["Cascadia Code", "monospace"],
      },
      spacing: {
        big: "48rem",
      }
    },
  },
  plugins: [],
}