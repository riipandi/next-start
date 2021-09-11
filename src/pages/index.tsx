import Image from 'next/image'

import { NextLink } from '@/components/Common'
import SiteLayout from '@/components/site-layout'

export default function Home() {
  return (
    <SiteLayout fullTitle='This is Next.js Tailwind Starter' className='bg-white dark:bg-black'>
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
            <h2 className='text-xl font-medium text-blue-500'>{process.env.siteMeta.title}</h2>
            <h1 className='mt-6 mb-6 text-4xl font-semibold dark:text-white lg:mb-10'>Welcome to your Next site!</h1>
            <p className='mb-6 text-xl leading-8 text-gray-500 dark:text-gray-300 lg:mb-12'>
              This is a starter for Next.js with Tailwind CSS and Typescript, already pre-configured with TailwindUI and some
              additional components.
            </p>
            <NextLink href='/about'>
              <a className='inline-block w-full px-8 py-4 mb-2 mr-4 text-sm font-medium leading-normal text-white transition duration-200 bg-red-400 rounded md:w-auto hover:bg-red-300'>
                About page
              </a>
            </NextLink>
            <a
              className='inline-block w-full px-8 py-4 mb-2 text-sm font-medium leading-normal transition duration-200 border border-blue-300 rounded md:w-auto hover:border-blue-400 hover:bg-blue-400 dark:hover:bg-blue-300 hover:text-white dark:text-white dark:bg-blue-400'
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Friipandi%2Fnext-tailwind-starter'
            >
              Deploy to Vercel
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
