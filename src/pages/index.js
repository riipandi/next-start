import { ChevronRightSolid } from '@graywolfai/react-heroicons'
import { motion } from 'framer-motion'
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
          <motion.div
            className="w-full p-4 text-center md:w-5/12"
            initial={{ scale: 0 }}
            animate={{ rotate: -10, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileTap={{ scale: 1, rotate: 0, borderRadius: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
          >
            <img src="/dev-animate.svg" alt="Welcome" />
          </motion.div>
          <div className="w-full p-8 font-sans text-center md:w-7/12 md:text-left md:p-12">
            <div className="text-6xl font-bold tracking-wide">Hello</div>
            <div className="my-4 text-xl font-semibold md:text-3xl">
              We are still build something amazing for you.
            </div>
            <div className="mb-8 text-lg md:text-2xl">
              Nothing to see here yet! Please come back soon.
            </div>
            <a
              href="https://github.com/riipandi/next-tailwind-starter"
              className="inline-flex items-center px-8 py-3 font-sans text-base font-medium text-white transition duration-500 ease-in-out transform rounded-md shadow-sm hover:scale-110 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 focus:outline-none"
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
