import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import '@/libraries/fontloader'

import '@/styles/tailwind.css'
import '@/styles/custom.css'

const isProduction = process.env.NODE_ENV === 'production'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider enabled={isProduction} domain='next-start.vercel.app' trackOutboundLinks selfHosted>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
