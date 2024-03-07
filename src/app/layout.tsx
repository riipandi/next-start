import { Metadata } from 'next/types'

import { siteMeta } from '@/config'
import { fontInter, fontMono } from '@/utils/fontloader'
import { cn } from '@/utils/helpers'

import '@/assets/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s - ${siteMeta.title}`,
  },
  applicationName: siteMeta.title,
  description: siteMeta.description,
  keywords: ['nextjs', 'react', 'starter', 'boilerplate'],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
  metadataBase: new URL(siteMeta.baseUrl),
  openGraph: {
    type: 'website',
    url: new URL(siteMeta.baseUrl),
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.title,
    images: [{ url: `${siteMeta.baseUrl}/images/og-image.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: `${siteMeta.baseUrl}/images/og-image.png`,
  },
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return (
    <html lang='en' className={cn(fontInter.className, fontMono.variable)}>
      <body className={cn(isDevelopment && 'debug-screens')} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
