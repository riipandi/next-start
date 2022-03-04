import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
// import '@/libraries/fontloader'

import { initSplitBee } from '@/libraries/splitbee'
import { Maintenance } from '@/components/partials'
import 'cal-sans'
import '@/styles/tailwind.css'
import '@/styles/custom.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    process.env.NODE_ENV !== 'development' && initSplitBee()
  }, [])

  // Display this page when maintenance mode is enabled.
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
    <Maintenance />
  ) : (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
