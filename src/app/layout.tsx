import './global.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { clx } from '#/libs/utils'

const fontSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const fontMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Cloudflare Workers',
  description: 'Example of Next.js with Cloudflare Workers',
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={clx(fontSans.variable, fontMono.variable, 'antialiased')}>{children}</body>
    </html>
  )
}
