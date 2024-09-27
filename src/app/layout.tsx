import ENV from '#/env'

import { Metadata } from 'next/types'

import { fontInter, fontMono } from '#/utils/fontloader'
import { cn } from '#/utils/helpers'

import '#/assets/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Next Start',
    template: '%s - Next Start',
  },
  applicationName: 'Next Start',
  description: 'A starter project for Next.js with Tailwind CSS and Typescript.',
  keywords: ['nextjs', 'react', 'starter', 'boilerplate'],
  robots: { index: true, follow: true },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
  metadataBase: new URL(ENV.APP_BASE_URL),
  openGraph: {
    type: 'website',
    url: new URL(ENV.APP_BASE_URL),
    title: 'Next Start',
    description: 'A starter project for Next.js with Tailwind CSS and Typescript.',
    siteName: 'Next Start',
    images: [{ url: `${ENV.APP_BASE_URL}/images/og-image.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: `${ENV.APP_BASE_URL}/images/og-image.png`,
  },
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' className={cn(fontInter.className, fontMono.variable)}>
      <body
        className={cn(ENV.NODE_ENV === 'development' && 'debug-breakpoints')}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
