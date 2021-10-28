import { motion } from 'framer-motion'
import Head from 'next/head'

import { Footer, Header } from '@/components/Common'

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

const SiteLayout = ({
  children,
  title,
  fullTitle,
  description,
  ogImage,
  animate,
  withHeader,
  withFooter,
  ...props
}: Props) => {
  const defaultTitle = fullTitle || title ? `${title} - ${process.env.siteMeta.title}` : `${process.env.siteMeta.title}`
  const pageTitle = fullTitle ? fullTitle : defaultTitle
  const pageDescription = description || process.env.siteMeta.description
  const pageImage = ogImage || process.env.siteMeta.imageUrl

  return (
    <div {...props} className='flex flex-col min-h-screen bg-white dark:bg-black'>
      <Head>
        <meta name='description' content={pageDescription} />
        <meta property='og:locale' content='id_ID' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={process.env.siteMeta.url} />
        <meta property='og:site_name' content={process.env.siteMeta.title} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:image' content={pageImage} />
        <title>{pageTitle}</title>
      </Head>

      {withHeader && <Header />}

      <main className='flex-grow'>
        {(animate && (
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
            {children}
          </motion.div>
        )) ||
          children}
      </main>

      {withFooter && <Footer />}
    </div>
  )
}

export default SiteLayout
