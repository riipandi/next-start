import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import '@/utils/fontloader'

import Maintenance from '@/components/Maintenance'

import plausibleConfig from '@/config/analytics'

import '@/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
    <Maintenance />
  ) : (
    <PlausibleProvider {...plausibleConfig}>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
