import { siteMeta } from '@/config/general'

import { LogoIpsum, MetaHead } from '@/components/elements'

const CheckIcon = () => (
  <svg
    className='flex-none w-6 h-6 stroke-2 fill-sky-100 stroke-sky-500'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx={12} cy={12} r={11} />
    <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
  </svg>
)

export default function Error404() {
  return (
    <>
      <MetaHead title='Something wrong!' noindex />
      <div className='relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-gray-50 sm:py-12'>
        <img
          src='/images/beams.jpg'
          className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none'
          width={1308}
          alt=''
        />
        <div className='absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
        <div className='relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10'>
          <div className='max-w-md mx-auto'>
            <div className='inline-flex items-center space-x-3'>
              <LogoIpsum className='w-auto h-8' />
              <h1>
                <h1 className='text-2xl font-bold '>Hey, we got some problems!</h1>
              </h1>
            </div>
            <div className='divide-y divide-gray-300/50'>
              <div className='py-8 space-y-6 text-base leading-7 text-gray-600'>
                <p>
                  An unexpected error has occured. Our team has been notified and will resolve this error as
                  soon as possible. Meanwhile, you can get latest updates via:
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-center'>
                    <CheckIcon />
                    <p className='ml-4'>
                      Twitter &rarr;
                      <a
                        href={siteMeta.socials.twitter}
                        className='ml-1 font-mono text-sm font-bold text-gray-900 hover:text-sky-600'
                      >
                        {siteMeta.socials.twitter}
                      </a>
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <CheckIcon />
                    <p className='ml-4'>
                      Github &rarr;
                      <a
                        href={siteMeta.socials.github}
                        className='ml-1 font-mono text-sm font-bold text-gray-900 hover:text-sky-600'
                      >
                        {siteMeta.socials.github}
                      </a>
                    </p>
                  </li>
                </ul>
                <p>We appreciate your interest, but be patient when we are fixing everything.</p>
              </div>
              <div className='pt-6 leading-7'>
                <p className='text-center text-gray-900'>&copy; 2022 - Site owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
