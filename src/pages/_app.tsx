import { AppProps } from 'next/app'

import '@/assets/fonts/_clarity_city.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
