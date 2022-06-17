import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import '@/libraries/fontloader'

import plausibleConfig from '@/config/analytics'

import Maintenance from '@/components/Maintenance'

import '@/styles/global.css'

export default function MyApp({ Component, pageProps }) {
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
