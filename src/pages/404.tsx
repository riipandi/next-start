import React from 'react'

import { Anchor, LogoIpsum, MetaHead } from '@/components/elements'

export default function Error404() {
  return (
    <React.Fragment>
      <MetaHead title='404 - Page not found' noindex />
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <img
          src='/images/beams.jpg'
          className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
          width={1308}
          alt=''
        />
        <div className='absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
        <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
          <div className='mx-auto max-w-md'>
            <div className='inline-flex items-center space-x-3'>
              <LogoIpsum className='h-8 w-auto' />
              <h1>
                <h1 className='text-2xl font-bold '>404 - Page not found</h1>
              </h1>
            </div>
            <div className='divide-y divide-gray-300/50'>
              <div className='space-y-6 py-8 text-base leading-7 text-gray-600'>
                <p>
                  Sorry, we can’t find that page. Check that you typed the address correctly, or try using our
                  site search to find something specific.
                </p>
                <p>
                  You can go back to{' '}
                  <Anchor href='/' className='text-sky-500 hover:text-sky-600'>
                    homepage &rarr;
                  </Anchor>
                </p>
              </div>
              <div className='pt-6 leading-7'>
                <p className='text-center text-gray-900'>&copy; 2022 - Site owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
