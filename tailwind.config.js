const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
