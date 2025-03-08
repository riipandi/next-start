/* Import the CSS files */
import '../styles/global.css'

import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import { clx } from '#/lib/utils'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Start',
  description: `A starter project for Next.js with Tailwind CSS and Typescript`,
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={clx(fontSans.variable, fontMono.variable, 'font-sans antialiased')}>
        {children}
      </body>
    </html>
  )
}
