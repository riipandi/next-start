import { usePlausible } from 'next-plausible'

import { Anchor, Image } from '@/components/elements'
import { PageLayout } from '@/components/site-layout'

import { siteMeta } from '@/config/general'

import Banner from '~/images/banner.svg'

export default function Home() {
  const plausible = usePlausible()

  return (
    <PageLayout title='>Welcome to your Next site!'>
      <div className='content-wrapper flex min-h-screen flex-col items-center justify-center'>
        <div className='mx-auto mb-6'>
          <Image src={Banner} width={400} height={120} alt='Banner' />
        </div>
        <div className='container relative mx-auto px-4'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='my-4 text-xl leading-8 text-gray-900 dark:text-gray-300 lg:mb-6'>
              {siteMeta.description}. <br />
              Pre-configured with TailwindUI and some additional components.
            </p>
            <div className='mx-auto flex justify-center space-x-4 py-8'>
              <Anchor
                href='/empty'
                className='btn btn--primary btn--md inline-block px-5 text-sm'
              >
                Empty page
              </Anchor>
              <Anchor
                href='https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-tailwind-starter&project-name=next-tailwind-starter&repo-name=next-tailwind-starter&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE'
                className='btn btn--outline btn--md inline-block w-full px-5 text-sm'
                onClick={() => plausible('Deploy to Vercel')}
              >
                Deploy your own
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
