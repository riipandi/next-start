import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'

import { fontMono } from '@/utils/fontloader'
import { cn } from '@/utils/helpers'

import '@/assets/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: PropsWithChildren) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return (
    <html lang='en' className={cn(inter.className, fontMono.variable)}>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='msapplication-TileImage' content='/favicon.svg' />
        <meta name='msapplication-TileColor' content='#004AAD' />
        <meta name='theme-color' content='#004AAD' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body
        className={cn(isDevelopment && 'debug-screens', 'antialiased')}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
