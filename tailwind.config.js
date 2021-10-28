/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Clarity City', ...defaultTheme.fontFamily.sans],
        slab: ['Sriracha', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.coolGray,
        primary: defaultColor.blue,
        secondary: defaultColor.indigo
      },
      typography: (theme) => ({
        default: {
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
