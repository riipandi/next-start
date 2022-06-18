import { IconArrowUp } from '@tabler/icons'

import useIsScrolled from '@/hooks/useIsScrolled'

const ScrollUp = () => {
  const isScrolled = useIsScrolled(400)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className='fixed z-30 cursor-pointer bg-black opacity-75'>
      {isScrolled && (
        <div
          onClick={scrollToTop}
          className='fixed bottom-5 right-6 inline-flex cursor-pointer items-center rounded bg-black px-3 py-2 text-xs text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black/90'
        >
          Back to top
          <IconArrowUp strokeWidth={2} className='ml-1 -mr-1 h-4 w-4' />
        </div>
      )}
    </div>
  )
}

export default ScrollUp
