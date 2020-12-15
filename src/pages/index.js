import { ChevronRightSolid } from '@graywolfai/react-heroicons'
import Head from 'next/head'
import SiteLayout from '../components/site-layout'

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>Next.js Tailwind Starter</title>
      </Head>
      <div className="flex items-center min-h-screen text-white">
        <div className="container flex flex-wrap items-center p-4 mx-auto">
          <div className="w-full p-4 text-center md:w-5/12">
            <img src="/dev-animate.svg" alt="Welcome" />
          </div>
          <div className="w-full p-8 font-sans text-center md:w-7/12 md:text-left md:p-12">
            <div className="text-6xl font-bold tracking-wide">Hello</div>
            <div className="my-4 text-xl font-semibold tracking-tight md:text-3xl">
              We are still build something amazing for you.
            </div>
            <div className="mb-8 text-lg md:text-2xl">
              Nothing to see here yet! Please come back soon.
            </div>
            <a
              href="https://github.com/riipandi/next-tailwind-starter"
              className="inline-flex items-center px-8 py-3 font-sans text-base font-medium text-white transition duration-500 ease-in-out transform border border-transparent rounded-md shadow-sm hover:scale-110 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:from-orange-500 focus:to-pink-500"
            >
              <span>Back to project page</span>
              <ChevronRightSolid className="w-6 h-6 ml-1 -mr-1" />
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
