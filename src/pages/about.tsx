import Image from 'next/image'

import { ThemeSwitcher } from '@/components/Common'
import { SiteLayout } from '@/components/Layouts'
import { BasicLink } from '@/components/Link'

export default function About() {
  return (
    <SiteLayout title='About' animate className='bg-white dark:bg-black'>
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
            <BasicLink
              href='/'
              className='inline-block w-full px-10 py-3 mb-2 mr-4 text-sm font-medium leading-normal text-white transition duration-200 bg-red-400 rounded md:w-auto hover:bg-red-300'
            >
              Back to homepage
            </BasicLink>
          </div>
          <div className='flex justify-center mx-auto mt-2'>
            <div className='inline-flex items-center justify-center mx-auto mt-12'>
              <ThemeSwitcher />
              <span className='ml-3 -mr-1 font-medium'>Toggle Dark Mode</span>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
