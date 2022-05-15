import { FC } from 'react'

import { Footer, Header } from '@/layouts/site-layout'
import { MetaHead, ScrollUp } from '@/components/elements'

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
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900'>
      <MetaHead title={title} description={description} ogImage={ogImage} noindex={noindex} />
      <Header className='absolute top-0 w-full' />
      <main className='flex-grow'>
        <PageTransition {...props}>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default PageLayout
