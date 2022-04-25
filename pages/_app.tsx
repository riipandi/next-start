import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import '@/libraries/fontloader'

import { Maintenance } from '@/components/partials'

import '@/styles/tailwind.css'
import '@/styles/custom.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Display this page when maintenance mode is enabled.
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
    <Maintenance />
  ) : (
    <PlausibleProvider
      enabled={process.env.NODE_ENV === 'production'}
      domain='next-start.vercel.app'
      trackOutboundLinks
      selfHosted
    >
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
