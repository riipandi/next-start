import { usePlausible } from 'next-plausible'

import { siteMeta } from '@/config/general'
import { Anchor } from '@/components/elements'
import { PageLayout } from '@/components/layouts'

import Banner from '~/images/banner.svg'

export default function Home() {
  const plausible = usePlausible()

  return (
    <PageLayout
      fullTitle='Welcome to your Next site!'
      className='flex flex-col items-center justify-center min-h-screen content-wrapper'
    >
      <div className='mx-auto mb-6'>
        <Banner className='border-b' />
      </div>
      <div className='container relative px-4 mx-auto'>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='my-4 text-xl leading-8 text-gray-900 lg:mb-6 dark:text-gray-300'>
            {siteMeta.description}. <br />
            Pre-configured with TailwindUI and some additional components.
          </p>
          <div className='flex justify-center py-8 mx-auto space-x-4'>
            <Anchor href='/empty' className='inline-block px-5 text-sm btn btn--primary btn--md'>
              Empty page
            </Anchor>
            <Anchor
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Friipandi%2Fnext-tailwind-starter'
              className='inline-block w-full px-5 text-sm btn btn--outline btn--md'
              onClick={() => plausible('Deploy to Vercel')}
            >
              Deploy your own
            </Anchor>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
