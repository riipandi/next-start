import { Anchor, MetaHead } from '@/components/elements'
import { LogoIpsum } from '@/components/elements'

const Maintenance = () => {
  return (
    <>
      <MetaHead title={`>We are under maintenance`} noindex />
      <div className='flex min-h-screen flex-col pb-12'>
        <main className='mx-auto flex w-full max-w-6xl grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
          <div className='flex shrink-0 justify-center'>
            <LogoIpsum className='h-8 w-auto' />
          </div>
          <div className='py-12'>
            <div className='text-center'>
              <p className='text-sm font-semibold uppercase tracking-wide text-primary-600'>
                Hey, we are here
              </p>
              <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                Almost ready ...
              </h1>
              <p className='mt-6 text-lg text-gray-600'>
                We appreciate your interest, but be patient we are preparing everything.
              </p>
              <div className='mt-6'>
                <Anchor
                  href='https://twitter.com/riipandi'
                  className='text-base font-medium text-primary-600 hover:text-primary-400'
                  newTab
                >
                  Meanwhile, you can subscribe to the latest updates{' '}
                  <span aria-hidden='true'> &rarr;</span>
                </Anchor>
              </div>
            </div>
          </div>
        </main>
        <footer className='mx-auto w-full max-w-6xl shrink-0 px-4 sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <Anchor
              href='https://ripandis.com'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
              newTab
            >
              Aris Ripandi
            </Anchor>
            <span className='inline-block border-l border-gray-300' aria-hidden='true' />
            <Anchor
              href='https://github.com/riipandi'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
              newTab
            >
              Github
            </Anchor>
            <span className='inline-block border-l border-gray-300' aria-hidden='true' />
            <Anchor
              href='https://twitter.com/riipandi'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
              newTab
            >
              Twitter
            </Anchor>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Maintenance
