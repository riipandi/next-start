'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className='content-wrapper flex grow items-center justify-center'>
      <div className='page-container'>
        <section className='mx-auto flex w-full max-w-2xl flex-col items-center justify-center py-24'>
          <h1 className='text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl dark:invert'>
            Example About Page
          </h1>
          <div className='mt-8 space-x-4 sm:mt-12'>
            <Link
              href='/'
              className='inline-flex items-center rounded-lg border border-gray-200 bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              <span className='i-heroicons-chevron-double-left -ml-1 mr-1 h-4 w-4' />
              Back to homepage
            </Link>
            <button
              type='button'
              className='inline-flex items-center rounded-lg border border-gray-200 bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              <span className='i-heroicons-exclamation-triangle-solid -ml-1 mr-1 h-4 w-4' />
              Toast Message
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
