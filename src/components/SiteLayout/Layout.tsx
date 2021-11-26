import { motion } from 'framer-motion'
import Head from 'next/head'

import { ScrollUp } from '@/components/Essentials'
import { Footer, Header } from '@/components/SiteLayout'

import { siteMeta } from '@/config/site'

const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
}

interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  fullTitle?: string
  description?: string
  ogImage?: string
  animate?: boolean
  withHeader?: boolean
  withFooter?: boolean
}

const Layout = ({ children, title, fullTitle, description, ogImage, animate, withHeader, withFooter, ...props }: Props) => {
  const defaultTitle = fullTitle || title ? `${title} - ${siteMeta.defaultTitle}` : `${siteMeta.defaultTitle}`
  const pageTitle = fullTitle ? fullTitle : defaultTitle
  const pageDescription = description || siteMeta.description

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900'>
      <Head>
        <meta name='description' content={pageDescription} />
        <meta property='og:locale' content='id_ID' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={siteMeta.siteUrl} />
        <meta property='og:site_name' content={siteMeta.defaultTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:image' content={ogImage || siteMeta.imageUrl} />
        <title>{pageTitle}</title>
      </Head>

      {withHeader && <Header />}

      <main className='flex-grow'>
        {(animate && (
          <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
            {...props}
          >
            {children}
          </motion.div>
        )) || <div {...props}>{children}</div>}
      </main>

      {withFooter && <Footer />}
      <ScrollUp />
    </div>
  )
}

export default Layout
