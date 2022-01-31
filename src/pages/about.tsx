import { Anchor } from '@/components/Elements'
import { Layout } from '@/components/SiteLayout'

export default function About() {
  return (
    <Layout title='About' animate>
      <div className='flex items-center justify-center min-h-screen py-20 lg:py-40'>
        <div className='container relative px-4 mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='mt-6 mb-6 text-4xl font-bold lg:text-5xl text--gradient text--shadow lg:mb-10'>
              This page are coming soon
            </h1>
            <p className='mb-6 text-xl leading-8 text-gray-900 dark:text-gray-400 lg:mb-12'>
              This page is currently a draft. Look back later to see what&rsquo;s changed.
            </p>
            <Anchor href='/' className='inline-block px-5 text-sm btn btn--primary btn--md'>
              Back to homepage
            </Anchor>
          </div>
        </div>
      </div>
    </Layout>
  )
}
