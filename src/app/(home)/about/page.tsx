import type { Metadata } from 'next'

import AboutPage from './about'

export const metadata: Metadata = { title: 'About - Next.js Tailwind Starter' }

export default function Page() {
  return <AboutPage />
}
