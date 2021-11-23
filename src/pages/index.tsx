import Image from 'next/image'
import { useTheme } from 'next-themes'

import { BasicLink, ThemeSwitcher } from '@/components/Essentials'
import { Layout } from '@/components/SiteLayout'

import { siteMeta } from '@/config/site'

export default function Home() {
  const { theme } = useTheme()

  return (
    <Layout fullTitle='This is Next.js Tailwind Starter' withHeader withFooter animate>
      <div className='flex items-center justify-center min-h-screen py-20 lg:py-30'>
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
            <h2 className='text-xl font-medium dark:text-brand-50 text-accent-500'>{siteMeta.defaultTitle}</h2>
            <h1 className='mt-6 mb-6 text-4xl font-bold lg:text-5xl text--gradient text--shadow lg:mb-10'>
              Welcome to your Next site!
            </h1>
            <p className='mb-4 text-xl leading-8 text-gray-900 lg:mb-6 dark:text-gray-400'>
              This is a starter for Next.js with Tailwind CSS and Typescript, already pre-configured with TailwindUI and some
              additional components.
            </p>
            <p className='mb-6 text-xl leading-8 text-gray-900 dark:text-gray-400 lg:mb-12'>
              You can{' '}
              <BasicLink
                href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Friipandi%2Fnext-tailwind-starter'
                className='hover:underline text-brand-500 dark:text-brand-100'
                newTab
              >
                deploy your own to Vercel &rarr;
              </BasicLink>
            </p>
            <BasicLink
              href='/about'
              className='inline-block w-full px-8 py-3 mb-2 mr-4 text-sm font-medium leading-normal transition duration-200 rounded text-gray-50 bg-brand-400 md:w-auto hover:bg-brand-300'
            >
              About page
            </BasicLink>
            <BasicLink
              href='/dashboard'
              className='inline-block w-full px-8 py-3 mb-2 text-sm font-medium leading-normal transition duration-200 border rounded border-accent-300 md:w-auto hover:border-accent-400 hover:bg-accent-400 dark:hover:bg-accent-300 hover:text-gray-50 dark:text-gray-50 dark:bg-accent-400'
            >
              Example dashboard
            </BasicLink>
          </div>
          <div className='flex justify-center mx-auto mt-2'>
            <div className='inline-flex items-center justify-center mx-auto mt-12'>
              <ThemeSwitcher iconSize={5} />
              <span className='ml-3 -mr-1 font-medium text-gray-900 dark:text-gray-400'>
                Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
