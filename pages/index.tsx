import { siteMeta } from '@/libraries/config'
import { Anchor, Image } from '@/components/elements'
import { PageLayout } from '@/components/layouts'

import imgSiteIcon from '~/favicon.png'

export default function Home() {
  return (
    <PageLayout
      fullTitle='Welcome to your Next site!'
      className='flex flex-col items-center justify-center min-h-screen content-wrapper'
    >
      <div className='mx-auto mb-10'>
        <Image src={imgSiteIcon} width={110} height={110} alt='Site icon' />
      </div>
      <div className='container relative px-4 mx-auto'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-xl font-medium dark:text-primary-50 text-secondary-500'>
            {siteMeta.defaultTitle}
          </h2>
          <h1 className='mt-6 mb-6 text-4xl font-bold lg:text-5xl text--gradient text--shadow lg:mb-10'>
            Welcome to your Next site!
          </h1>
          <p className='mb-4 text-xl leading-8 text-gray-900 lg:mb-6 dark:text-gray-300'>
            This is a starter for Next.js with Tailwind CSS and Typescript, already pre-configured with
            TailwindUI and some additional components.
          </p>
          <div className='flex justify-center py-8 mx-auto space-x-4'>
            <Anchor href='/empty' className='inline-block px-5 text-sm btn btn--primary btn--md'>
              Empty page
            </Anchor>
            <Anchor
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Friipandi%2Fnext-tailwind-starter'
              className='inline-block w-full px-5 text-sm btn btn--outline btn--md'
            >
              Deploy your own
            </Anchor>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
