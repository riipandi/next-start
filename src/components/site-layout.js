import Head from 'next/head'
// import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="overflow-x-hidden bg-gradient-to-r from-primary-500 to-secondary-500">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    {children}
    <style jsx global>{`
      html,
      body {
        @apply font-sans antialiased;
      }
    `}</style>
  </div>
)

export default SiteLayout
