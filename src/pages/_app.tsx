import splitbee from '@splitbee/web'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import '@/assets/fonts/_jakarta_sans.css'
import '@/assets/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      splitbee.init({
        token: process.env.SPLITBEE_TOKEN,
        disableCookie: false,
        scriptUrl: '/bee.js',
        apiUrl: '/_hive'
      })
    }
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
