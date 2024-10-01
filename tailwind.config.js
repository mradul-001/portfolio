/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/*.js"],
  theme: {
    extend: {
      fontFamily: {
        signikaNegative: ["Signika Negative", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],

}