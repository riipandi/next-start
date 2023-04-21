import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About - Next.js Tailwind Starter' }

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link
        href='/'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      >
        <span className='mr-1 inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none'>
          &larr;
        </span>
        <span>Back to homepage</span>
      </Link>
    </main>
  )
}
