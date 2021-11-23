import { BasicLink } from '@/components/Essentials'
import { Layout } from '@/components/SiteLayout'

export default function About() {
  return (
    <Layout title='About' animate>
      <div className='flex items-center justify-center min-h-screen py-20 lg:py-40'>
        <div className='container relative px-4 mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='mt-6 mb-6 text-4xl font-bold lg:text-5xl text--gradient text--shadow lg:mb-10'>
              Sample About Page
            </h1>
            <p className='mb-6 text-xl leading-8 text-gray-900 dark:text-gray-400 lg:mb-12'>
              This is a starter for Next.js with Tailwind CSS and Typescript, already pre-configured with TailwindUI and some
              additional components.
            </p>
            <BasicLink
              href='/'
              className='inline-block w-full px-10 py-3 mb-2 mr-4 text-sm font-medium leading-normal transition duration-200 rounded text-gray-50 bg-brand-400 md:w-auto hover:bg-brand-300'
            >
              Back to homepage
            </BasicLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}
