import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EvaOutlineExternalLinkOutline } from '@twistail/icons'

import { ExternalLink } from '@/components/external-link'

import VercelLogo from '~/images/vercel.svg'

export const metadata: Metadata = {
  title: 'Next.js Tailwind Starter',
  description: 'A starter project for Next.js with Tailwind CSS and Typescript.',
}

export default function Page() {
  return (
    <>
      <main className='mx-auto flex w-full max-w-4xl grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='text-center'>
            <p className='text-lg font-semibold text-primary-600 sm:text-2xl'>Howdy, developer!</p>
            <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:invert sm:text-4xl lg:text-6xl'>
              Welcome to your new app
            </h1>
            <div className='mx-auto mt-8 max-w-4xl'>
              <p className='font-mono text-lg leading-8 text-gray-500 dark:text-gray-200'>
                This is a starter for Next.js with Tailwind CSS and Typescript. This starter also
                provides Dockerfile, just in case you want to deploy using containerization or even
                Kubernetes.
              </p>
            </div>
            <div className='mt-12 flex items-center justify-center space-x-3'>
              <Link
                href='/about'
                className='inline-flex items-center rounded-md border border-transparent bg-primary-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2'
              >
                Example about page
              </Link>
              <ExternalLink
                href='https://beta.nextjs.org/docs'
                className='inline-flex items-center rounded-md border border-transparent bg-primary-100 px-6 py-4 text-base font-medium text-primary-600 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              >
                Learn about Next.js
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
          <ExternalLink
            href='https://vercel.com?utm_source=next-start&utm_medium=next-start&utm_campaign=next-start'
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
          >
            <span className='font-medium dark:invert'>Hosted at</span>
            <Image src={VercelLogo} alt='Vercel Logo' className='h-5 w-auto dark:invert' priority />
          </ExternalLink>
        </div>
      </main>
      <footer className='mx-auto w-full max-w-7xl shrink-0 px-4 sm:px-6 lg:px-8'>
        <p className='flex justify-center'>
          <span className='mr-1 text-gray-600 dark:text-gray-200'>Brought to you by</span>
          <ExternalLink
            href='https://twitter.com/riipandi'
            className='group inline-flex items-center space-x-0.5 text-primary-800 hover:text-gray-600 dark:text-primary-500 dark:hover:text-primary-700'
          >
            <span>Aris Ripandi</span>
            <span className='dark:invert'>
              <EvaOutlineExternalLinkOutline />
            </span>
          </ExternalLink>
        </p>
      </footer>
    </>
  )
}
