const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    dark: {
      colors: {
        primary: {
          DEFAULT: "#DA0C0C",
          foreground: "#000000",
        },
        focus: "#DA0C0C",
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}