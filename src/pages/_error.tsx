import React from 'react'

import { LogoIpsum, MetaHead } from '@/components/elements'

import { siteMeta } from '@/config/general'

const CheckIcon = () => (
  <svg
    className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx={12} cy={12} r={11} />
    <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
  </svg>
)

export default function Error404() {
  return (
    <React.Fragment>
      <MetaHead title='Something wrong!' noindex />
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <img
          src='/images/beams.jpg'
          className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
          width={1308}
          alt=''
        />
        <div className='absolute inset-0 snap-center bg-[url(/images/grid.svg)] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
        <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
          <div className='mx-auto max-w-md'>
            <div className='inline-flex items-center space-x-3'>
              <LogoIpsum className='h-8 w-auto' />
              <h1>
                <h1 className='text-2xl font-bold '>Hey, we got some problems!</h1>
              </h1>
            </div>
            <div className='divide-y divide-gray-300/50'>
              <div className='space-y-6 py-8 text-base leading-7 text-gray-600'>
                <p>
                  An unexpected error has occured. Our team has been notified and will resolve this
                  error as soon as possible. Meanwhile, you can get latest updates via:
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-center'>
                    <CheckIcon />
                    <p className='ml-4'>
                      Twitter &rarr;
                      <a
                        href={siteMeta.socials.twitter}
                        className='ml-1 font-mono text-sm font-bold text-gray-900 hover:text-sky-600'
                      >
                        {siteMeta.socials.twitter}
                      </a>
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <CheckIcon />
                    <p className='ml-4'>
                      Github &rarr;
                      <a
                        href={siteMeta.socials.github}
                        className='ml-1 font-mono text-sm font-bold text-gray-900 hover:text-sky-600'
                      >
                        {siteMeta.socials.github}
                      </a>
                    </p>
                  </li>
                </ul>
                <p>We appreciate your interest, but be patient when we are fixing everything.</p>
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
