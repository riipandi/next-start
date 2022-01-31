import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import '@fontsource/jetbrains-mono/100.css'
import '@fontsource/jetbrains-mono/200.css'
import '@fontsource/jetbrains-mono/300.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/600.css'
import '@fontsource/jetbrains-mono/700.css'
import '@fontsource/jetbrains-mono/800.css'
import '@fontsource/be-vietnam-pro/100.css'
import '@fontsource/be-vietnam-pro/200.css'
import '@fontsource/be-vietnam-pro/300.css'
import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import '@fontsource/be-vietnam-pro/700.css'
import '@fontsource/be-vietnam-pro/800.css'
import '@fontsource/be-vietnam-pro/900.css'
import '@/styles/global.css'
import '@/styles/styles.css'

import { initSplitBee } from '@/libraries/splitbee'

import { Maintenance } from '@/components/Elements'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    process.env.NODE_ENV !== 'development' && initSplitBee()
  }, [])

  // Page when maintenance mode is enabled.
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return <Maintenance />
  }

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
