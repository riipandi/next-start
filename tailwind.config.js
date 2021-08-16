const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Clarity City', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.coolGray,
        primary: defaultColor.green,
        secondary: defaultColor.blue,
        accent: defaultColor.rose,
        teal: defaultColor.teal,
        cyan: defaultColor.cyan
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600')
              }
            }
          }
        }
      })
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
