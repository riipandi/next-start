import { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

import '@/assets/fonts/_font_sans.css'
import '@/assets/fonts/_font_serif.css'
import '@/assets/fonts/_font_slab.css'
import '@/assets/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      {/* Example SplitBee analytics integration using Next Script */}
      <Script src='/bee.js' strategy='lazyOnload' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
