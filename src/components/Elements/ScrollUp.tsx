import { ArrowBendRightUp } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bg-black opacity-75 cursor-pointer'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className='fixed inline-flex items-center px-3 py-2 text-xs text-white transition duration-500 ease-in-out transform bg-black rounded cursor-pointer lg:bottom-7 lg:right-8 hover:bg-opacity-90 hover:-translate-y-1 hover:scale-110'
        >
          Back to top
          <ArrowBendRightUp size={12} weight='bold' className='ml-1 -mr-1' />
        </div>
      )}
    </div>
  )
}

export default ScrollUp
