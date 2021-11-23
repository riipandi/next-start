import Head from 'next/head'
import { useState } from 'react'

import { Sidebar, Topbar } from '@/components/AppLayout'

import { siteMeta } from '@/config/site'

interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  fullTitle?: string
}

const Layout = ({ children, title, fullTitle, ...props }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const defaultTitle = fullTitle || title ? `${title} - ${siteMeta.defaultTitle}` : `${siteMeta.defaultTitle}`
  const pageTitle = fullTitle ? fullTitle : defaultTitle

  return (
    <>
      <Head>
        <meta name='googlebot' content='noindex, nofollow, noarchive' />
        <meta name='robots' content='noindex, nofollow, noarchive' />
        <meta property='og:title' content={pageTitle} />
        <meta name='twitter:title' content={pageTitle} />
        <title>{pageTitle}</title>
      </Head>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className='flex flex-col flex-1 md:pl-64'>
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main {...props}>{children}</main>
      </div>
    </>
  )
}

export default Layout
