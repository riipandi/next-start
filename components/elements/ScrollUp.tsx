import { ArrowUp } from 'akar-icons'

import useIsScrolled from '@/hooks/useIsScrolled'

const ScrollUp = () => {
  const isScrolled = useIsScrolled(400)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className='fixed z-30 bg-black opacity-75 cursor-pointer'>
      {isScrolled && (
        <div
          onClick={scrollToTop}
          className='fixed inline-flex items-center px-3 py-2 text-xs text-white transition duration-500 ease-in-out transform bg-black rounded cursor-pointer bottom-5 right-6 hover:bg-opacity-90 hover:-translate-y-1 hover:scale-110'
        >
          Back to top
          <ArrowUp strokeWidth={2} className='w-4 h-4 ml-1 -mr-1' />
        </div>
      )}
    </div>
  )
}

export default ScrollUp
