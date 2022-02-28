import { useEffect, useState } from 'react'

export default function useIsScrolled(rowHeight?: number) {
  const [isScrolled, setIsScrolled] = useState(false)
  const row = rowHeight || 200

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > row) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isScrolled
}
