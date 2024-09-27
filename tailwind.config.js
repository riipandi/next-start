import pluginAspectRatio from '@tailwindcss/aspect-ratio'
import pluginForms from '@tailwindcss/forms'
import pluginTypography from '@tailwindcss/typography'
import pluginDebugBreakpoints from 'tailwind-debug-breakpoints'
import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*!(*.stories|*.spec).{ts,tsx}'],
  darkMode: 'media',
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
      borderTopLeftRadius: '4px',
      printSize: false,
      prefix: '',
    },
  },
  plugins: [pluginForms(), pluginTypography(), pluginAspectRatio, pluginDebugBreakpoints],
}
