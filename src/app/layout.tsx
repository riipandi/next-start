/* Import the CSS files */
import '../styles/global.css'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { clx } from '#/libs/utils'

const fontSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const fontMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Tailwind Starter',
  description: 'A starter project for Next.js with Tailwind CSS and Typescript',
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={clx(fontSans.variable, fontMono.variable, 'antialiased')}>{children}</body>
    </html>
  )
}
