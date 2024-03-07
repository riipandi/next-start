import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['src/**/*!(*.stories|*.spec).{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['var(--jetbrains-mono-font)', ...fontFamily.mono],
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
} satisfies Config
