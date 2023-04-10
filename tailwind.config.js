const colors = require('tailwindcss/colors')

module.exports = {
  content: ['layouts/**/*.html'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray:  {
        200: "#F0F5F9",
        400: "#C9D6DF",
        600: "#52616B"
      },
      transparent: colors.transparent,
      black: "#1E2022",
      pink: colors.pink
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}