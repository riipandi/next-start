import Container from '@/components/BaseLayout'
import { Anchor, Image } from '@/components/Elements'

export default function ErrorPage() {
  return (
    <Container fullTitle='Something wrong!'>
      <div className='flex flex-col min-h-screen pb-12 bg-white'>
        <main className='flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='flex justify-center flex-shrink-0'>
            <Image src='https://doodleipsum.com/700/avatar-5' width={180} height={180} alt='Site logo' />
          </div>
          <div className='py-12'>
            <div className='text-center'>
              <p className='text-sm font-semibold tracking-wide uppercase text-primary-600'>Hey, we got some problems!</p>
              <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:mt-6 sm:text-5xl'>
                Server error 500 :-(
              </h1>
              <p className='mt-6 text-lg text-gray-600'>
                We appreciate your interest, but be patient we are fixing everything.
              </p>
              <div className='mt-6'>
                <Anchor
                  href='https://aris.web.id'
                  className='text-base font-medium text-primary-600 hover:text-primary-400'
                  newTab
                >
                  Meanwhile, you can subscribe to the latest updates <span aria-hidden='true'> &rarr;</span>
                </Anchor>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <Anchor href='https://aris.web.id' className='text-sm font-medium text-gray-500 hover:text-gray-600' newTab>
              Homepage
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
    </Container>
  )
}
