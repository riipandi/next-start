import { TriangleLeft } from 'akar-icons'

import { PageLayout } from '@/layouts/site-layout'
import { Anchor } from '@/components/elements'

export default function About() {
  return (
    <PageLayout title='Empty page' className='flex flex-col content-wrapper lg:mt-10'>
      <section className='w-full mx-auto'>
        <h1 className='text-2xl font-bold lg:text-3xl text-primary-500'>This page are coming soon</h1>
        <p className='mt-4 text-lg'>
          This page is currently a draft. Look back later to see what&rsquo;s changed.
        </p>
        <div className='mt-8'>
          <Anchor href='/' className='inline-flex items-center btn btn--primary btn--sm'>
            <TriangleLeft strokeWidth={1.8} className='w-4 h-4 -ml-1' />
            <span>Back to homepage</span>
          </Anchor>
        </div>
      </section>
    </PageLayout>
  )
}
