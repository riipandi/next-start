import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

import '@/assets/fonts/_jakarta_sans.css'
import '@/assets/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      {/* Example SplitBee analytics integration using Next Script */}
      <Script src='/bee.js' />

      {/* Load the application components */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
