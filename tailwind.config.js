/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter UI', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.trueGray,
        brand: {
          50: '#b25de3',
          100: '#a853d9',
          200: '#9e49cf',
          300: '#943fc5',
          400: '#8a35bb',
          500: '#802bb1',
          600: '#7621a7',
          700: '#6c179d',
          800: '#620d93',
          900: '#580389'
        },
        accent: {
          50: '#5f5a70',
          100: '#555066',
          200: '#4b465c',
          300: '#413c52',
          400: '#373248',
          500: '#2d283e',
          600: '#231e34',
          700: '#19142a',
          800: '#0f0a20',
          900: '#050016'
        }
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': {
                color: theme('colors.brand.600')
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
