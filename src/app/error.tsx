'use client' // Error components must be Client Components

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex h-full min-h-screen w-full flex-col bg-white px-6 dark:bg-gray-900 md:px-0'>
      <main className='flex grow items-center justify-center'>
        <div className='page-container'>
          <section className='mx-auto flex w-full max-w-2xl flex-col items-center justify-center py-24'>
            <h1 className='text-2xl font-extrabold text-gray-900 dark:invert sm:text-3xl lg:text-4xl'>
              Hey, we got some problems :-(
            </h1>
            <p className='mt-8 text-center text-xl leading-8 text-gray-600 dark:text-gray-300/80'>
              An unexpected error has occured. Our team has been notified and will resolve this
              error as soon as possible. We appreciate your interest, but be patient when we are
              fixing everything.
            </p>

            {error.digest && (
              <p className='mt-8 rounded bg-gray-100 px-2.5 py-2 text-center font-mono text-sm font-medium tracking-tight text-red-500 dark:bg-gray-600 dark:text-red-300'>
                Error code: {error.digest}
              </p>
            )}

            <div className='mt-8 flex space-x-2 sm:mt-10'>
              <button
                type='button'
                className='inline-flex items-center rounded-lg border border-gray-200 bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                onClick={() => reset()} // Attempt to recover by trying to re-render the segment
              >
                <span className='i-heroicons-arrow-path-20-solid -ml-1 mr-1 h-4 w-4' />
                Try reload this page
              </button>
            </div>
          </section>
        </div>
      </main>
      <div className='relative bottom-0 w-full py-4 text-center md:absolute'>
        <a
          href='/'
          className='inline-flex items-center justify-center text-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300'
        >
          <span className='i-heroicons-chevron-double-left-20-solid -ml-1 mr-1 h-4 w-4' />
          Back to homepage
        </a>
      </div>
    </div>
  )
}
