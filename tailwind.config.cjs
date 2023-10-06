const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['src/**/*!(*.stories|*.spec).{ts,tsx}'],
  // darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['var(--jetbrains-mono-font)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        black: '#121314',
        gray: colors.gray,
        primary: colors.blue,
        secondary: colors.indigo,
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
      ignore: ['dark'],
      prefix: '',
      style: {
        backgroundColor: '#f9fafb',
        borderTopLeftRadius: '4px',
        color: 'black',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    iconsPlugin({ collections: getIconCollections(['heroicons', 'lucide']) }),
  ],
}

module.exports = tailwindConfig
