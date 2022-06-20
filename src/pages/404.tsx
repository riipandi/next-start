import React from 'react'

import { Anchor, LogoIpsum, MetaHead } from '@/components/elements'

export default function Error404() {
  return (
    <>
      <MetaHead fullTitle='404 - Page not found' />
      <div className='content-wrapper flex min-h-screen flex-col items-center justify-center'>
        <div className='mx-auto max-w-xl'>
          <div className='inline-flex items-center space-x-3'>
            <LogoIpsum className='h-8 w-auto' />
            <h1>
              <h1 className='text-2xl font-bold '>404 - Page not found</h1>
            </h1>
          </div>
          <div className='divide-y divide-gray-300/50'>
            <div className='space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-gray-100'>
              <p>
                Sorry, we can’t find that page. Check that you typed the address correctly, or try using our
                site search to find something specific.
              </p>
            </div>
            <div className='pt-6 leading-7'>
              <p className='text-gray-900'>
                <Anchor href='/' className='text-sky-500 hover:text-sky-600'>
                  &larr; back to homepage
                </Anchor>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
