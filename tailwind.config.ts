import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['app/**/*!(*.stories|*.spec).{ts,tsx}', 'components/**/*!(*.stories|*.spec).{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['var(--jetbrains-mono-font)', ...defaultTheme.fontFamily.mono],
      },
      colors: ({ colors }) => ({
        black: '#121314',
        gray: colors.gray,
        primary: colors.blue,
        secondary: colors.indigo,
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config
