import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PlausibleProvider from 'next-plausible'

import plausibleConfig from '@/constants/analytics'
import { cn } from '@/utils/helpers'

import '@/assets/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Tailwind Starter',
  description: 'A starter project for Next.js with Tailwind CSS and Typescript.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'http://next-start.vercel.app/images/og-image.png',
        width: 2048,
        height: 1170,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider {...plausibleConfig}>
      <html lang='en' className={cn(inter.className)}>
        <head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='msapplication-TileImage' content='/favicon.svg' />
          <meta name='msapplication-TileColor' content='#004AAD' />
          <meta name='theme-color' content='#004AAD' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='icon' type='image/png' href='/favicon.png' />
        </head>
        <body>{children}</body>
      </html>
    </PlausibleProvider>
  )
}
