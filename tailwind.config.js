/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
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
        sans: ['Plus Jakarta Sans', 'Inter UI', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.trueGray,
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
        dark: {
          50: '#4f565d',
          100: '#454c53',
          200: '#3b4249',
          300: '#31383f',
          400: '#272e35',
          500: '#1d242b',
          600: '#131a21',
          700: '#091017',
          800: '#00060d',
          900: '#000003'
        },
        light: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#fafafa',
          600: '#f0f0f0',
          700: '#e6e6e6',
          800: '#dcdcdc',
          900: '#d2d2d2'
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
