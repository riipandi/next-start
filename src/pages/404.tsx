import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { SiteLayout } from '@/components/Layouts'

export default function Home() {
  return (
    <SiteLayout animate>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className='flex items-center justify-center min-h-screen py-20 lg:py-40'>
        <div className='top-0 left-0 hidden mt-32 lg:block lg:absolute'>
          <Image src='https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg' width={300} height={300} alt='' />
        </div>
        <div className='hidden h-16 mt-4 ml-auto lg:absolute'>
          <Image
            src='https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg'
            width={200}
            height={200}
            alt=''
          />
        </div>
        <div className='top-0 right-0 hidden mt-64 lg:block lg:absolute'>
          <Image
            src='https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg'
            width={300}
            height={300}
            alt=''
          />
        </div>
        <div className='container relative px-4 mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-xl font-medium dark:text-primary-50 text-secondary-500 font-slab'>404 Not Found</h2>
            <h1 className='mt-6 mb-6 text-4xl font-bold lg:text-5xl text--gradient text--shadow lg:mb-10'>
              Sorry, we can&apos;t find that page!
            </h1>
            <p className='mb-6 text-xl leading-8 text-gray-900 dark:text-light-400 lg:mb-12'>
              Check that you typed the address correctly, go back to your previous page or try using our site search to find
              something specific.
            </p>
            <Link href='/'>
              <a className='inline-flex items-center justify-center w-full px-8 py-4 mb-2 mr-4 text-sm font-medium leading-normal transition duration-200 rounded text-light-50 bg-primary-400 md:w-auto hover:bg-primary-300'>
                <ChevronDoubleLeftIcon className='w-4 h-4 mr-1 -ml-1' /> Go back to Homepage
              </a>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
