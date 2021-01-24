const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: defaultColor.coolGray,
        primary: defaultColor.green,
        secondary: defaultColor.blue,
        accent: defaultColor.rose,
        'light-blue': defaultColor.lightBlue,
        teal: defaultColor.teal,
        cyan: defaultColor.cyan
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
