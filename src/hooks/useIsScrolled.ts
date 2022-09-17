import { useEffect, useState } from 'react'

export default function useIsScrolled(rowHeight?: number) {
  const [isScrolled, setIsScrolled] = useState(false)
  const row = rowHeight || 200

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrolled(window.pageYOffset > row ?? false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [row])

  return isScrolled
}
