import * as React from 'react'

import { Anchor, Image, Spinner } from '@/components/elements'
import { PageLayout } from '@/components/layouts'

export default function Error404() {
  return (
    <PageLayout fullTitle='404 - Page Not Found' variant='plain' animate={false}>
      <div className='flex flex-col min-h-screen bg-white lg:relative'>
        <div className='flex flex-col flex-grow'>
          <main className='flex flex-col flex-grow bg-white'>
            <div className='flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='flex-shrink-0 pt-10 sm:pt-16'>
                <Anchor href='/' className='inline-flex'>
                  <span className='sr-only'>Workflow</span>
                  <Spinner className='w-auto h-6' />
                </Anchor>
              </div>
              <div className='flex-shrink-0 py-16 my-auto sm:py-32'>
                <p className='text-sm font-semibold tracking-wide uppercase text-primary-600'>404 error</p>
                <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Sorry, we can&rsquo;t find that page!
                </h1>
                <p className='max-w-xl mt-2 text-base text-gray-500'>
                  Check that you typed the address correctly, or try using our site search to find something
                  specific.
                </p>
                <div className='mt-6'>
                  <Anchor href='/' className='text-base font-medium text-primary-600 hover:text-primary-500'>
                    Go back home<span aria-hidden='true'> &rarr;</span>
                  </Anchor>
                </div>
              </div>
            </div>
          </main>
          <footer className='flex-shrink-0 bg-gray-50'>
            <div className='w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <nav className='flex space-x-4'>
                <a href='#' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
                  Contact Support
                </a>
                <span className='inline-block border-l border-gray-300' aria-hidden='true' />
                <a href='#' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
                  Status
                </a>
                <span className='inline-block border-l border-gray-300' aria-hidden='true' />
                <a href='#' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
                  Twitter
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
            className='absolute inset-0 object-cover w-full h-full'
            src='https://error404.fun/img/full-preview/1x/7.png'
            layout='fill'
            alt='Error 404'
          />
        </div>
      </div>
    </PageLayout>
  )
}
