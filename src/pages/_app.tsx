import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/assets/fonts/_font_sans.css'
import '@/assets/fonts/_font_serif.css'
import '@/assets/fonts/_font_slab.css'
import '@/assets/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
