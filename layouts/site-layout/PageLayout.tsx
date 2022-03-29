import { FC } from 'react'
import { siteMeta } from '@/config/general'

import { Footer, Header } from '@/layouts/site-layout'
import { MetaHead, ScrollUp } from '@/components/elements'

import PageTransition from '../PageTransition'

interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  fullTitle?: string
  description?: string
  ogImage?: string
  animate?: boolean
  noindex?: boolean
}

const PageLayout: FC<Props> = ({ children, ...props }) => {
  const { title, fullTitle, description, ogImage, animate, noindex } = props
  const siteTitle = title ? `${title} - ${siteMeta.siteTitle}` : `${siteMeta.siteTitle}`
  const pageTitle = fullTitle ? fullTitle : siteTitle
  const pageDescription = description || siteMeta.description
  const animatePage = animate || true

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900'>
      <MetaHead title={pageTitle} description={pageDescription} ogImage={ogImage} noindex={noindex} />
      <Header className='absolute top-0 w-full' />
      <main className='flex-grow'>
        {animatePage ? (
          <PageTransition {...props}>{children}</PageTransition>
        ) : (
          <div {...props}>{children}</div>
        )}
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default PageLayout
