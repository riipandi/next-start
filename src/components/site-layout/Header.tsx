import { useTheme } from 'next-themes'

import { ThemeSwitcher } from '@/components/elements'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className='absolute top-0 w-full'>
      <div className='absolute z-30 mx-auto flex w-full items-center justify-center py-4 lg:justify-end lg:py-8 lg:px-10'>
        <span className='mr-3 -ml-1 font-medium text-gray-900 dark:text-gray-300'>
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </span>
        <ThemeSwitcher iconSize={5} />
      </div>
    </header>
  )
}

export default Header
