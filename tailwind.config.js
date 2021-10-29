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
        sans: ['Inter', 'Clarity City', ...defaultTheme.fontFamily.sans],
        slab: ['Sriracha', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: {
          50: '#7e7b8f',
          100: '#747185',
          200: '#6a677b',
          300: '#605d71',
          400: '#565367',
          500: '#4c495d',
          600: '#423f53',
          700: '#383549',
          800: '#2e2b3f',
          900: '#242135'
        },
        primary: {
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
        secondary: {
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
        },
        accent: {
          50: '#8881a1',
          100: '#7e7797',
          200: '#746d8d',
          300: '#6a6383',
          400: '#605979',
          500: '#564f6f',
          600: '#4c4565',
          700: '#423b5b',
          800: '#383151',
          900: '#2e2747'
        },
        light: {
          50: '#ffffff',
          100: '#f9ffff',
          200: '#eff5fe',
          300: '#e5ebf4',
          400: '#dbe1ea',
          500: '#d1d7e0',
          600: '#c7cdd6',
          700: '#bdc3cc',
          800: '#b3b9c2',
          900: '#a9afb8'
        }
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
