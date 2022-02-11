import Head from 'next/head'

import { siteMeta } from '@/libraries/config'

import { ScrollUp } from '@/components/elements'
import { Footer, Header } from '@/components/layouts'

import PageTransition from './PageTransition'

interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  fullTitle?: string
  description?: string
  ogImage?: string
  animate?: boolean
  variant?: 'default' | 'plain'
}

interface IMetaHeader {
  pageTitle: string
  pageDescription: string
  ogImage?: string
}

const PageLayout = ({
  children,
  title,
  fullTitle,
  description,
  ogImage,
  animate = true,
  variant = 'default',
  ...props
}: Props) => {
  const defaultTitle = fullTitle || title ? `${title} - ${siteMeta.defaultTitle}` : `${siteMeta.defaultTitle}`
  const pageTitle = fullTitle ? fullTitle : defaultTitle
  const pageDescription = description || siteMeta.description

  if (variant === 'plain') {
    return (
      <>
        <MetaHeader pageTitle={pageTitle} pageDescription={pageDescription} ogImage={ogImage} />
        {(animate && <PageTransition {...props}>{children}</PageTransition>) || (
          <div {...props}>{children}</div>
        )}
      </>
    )
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900'>
      <MetaHeader pageTitle={pageTitle} pageDescription={pageDescription} ogImage={ogImage} />
      <Header className='absolute top-0 w-full' />
      <main className='flex-grow'>
        {animate ? <PageTransition {...props}>{children}</PageTransition> : <div {...props}>{children}</div>}
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

const MetaHeader = ({ pageTitle, pageDescription, ogImage }: IMetaHeader) => (
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
)

export default PageLayout
