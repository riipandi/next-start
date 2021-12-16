import Image from 'next/image'
import { useTheme } from 'next-themes'

import { siteMeta } from '@/libraries/config'

import { Maintenance } from '@/components/Elements'
import { BasicLink, ThemeSwitcher } from '@/components/Essentials'
import { Layout } from '@/components/SiteLayout'

export default function Home() {
  const { theme } = useTheme()

  if (siteMeta.maintenance === true) {
    return <Maintenance />
  }

  return (
    <Layout fullTitle='This is Next.js Tailwind Starter' withHeader withFooter animate>
      <div className='flex flex-col items-center justify-center min-h-screen py-20 lg:py-30'>
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
            <h2 className='text-xl font-medium dark:text-primary-50 text-secondary-500'>{siteMeta.defaultTitle}</h2>
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
                className='underline text-primary-500 dark:text-primary-100 decoration-primary-500 hover:text-gray-900'
                newTab
              >
                deploy your own to Vercel &rarr;
              </BasicLink>
            </p>
            <div className='flex justify-center mx-auto space-x-4'>
              <BasicLink href='/about' className='inline-block px-5 text-sm btn btn--primary btn--md'>
                About page
              </BasicLink>
              <BasicLink href='/empty' className='inline-block w-full px-5 text-sm btn btn--outline btn--md'>
                Empty page
              </BasicLink>
            </div>
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
