import { FC } from 'react'

import { MetaHead, ScrollUp } from '@/components/elements'
import { Footer, Header } from '@/components/site-layout'

import PageTransition from '../PageTransition'

interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  ogImage?: string
  noindex?: boolean
}

const PageLayout: FC<Props> = ({ children, ...props }) => {
  const { title, description, ogImage, noindex } = props

  return (
    <div className='flex min-h-screen flex-col bg-white dark:bg-gray-900'>
      <MetaHead title={title} description={description} ogImage={ogImage} noindex={noindex} />
      <Header />
      <main className='grow'>
        <PageTransition {...props}>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default PageLayout
