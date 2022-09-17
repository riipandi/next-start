import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import { Anchor } from '@/components/elements'
import { PageLayout } from '@/components/site-layout'

export default function EmptyPage() {
  return (
    <PageLayout title='Empty page' className='content-wrapper flex flex-col lg:mt-10'>
      <section className='mx-auto w-full'>
        <h1 className='text-2xl font-bold text-primary-500 lg:text-3xl'>
          This page are coming soon
        </h1>
        <p className='mt-4 text-lg'>
          This page is currently a draft. Look back later to see what&rsquo;s changed.
        </p>
        <div className='mt-8'>
          <Anchor href='/' className='btn btn--primary btn--sm inline-flex items-center'>
            <ArrowLeftIcon strokeWidth={1.8} className='-ml-1 h-4 w-4' />
            <span>Back to homepage</span>
          </Anchor>
        </div>
      </section>
    </PageLayout>
  )
}
