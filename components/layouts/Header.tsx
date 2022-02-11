import { useTheme } from 'next-themes'

import { ThemeSwitcher } from '@/components/elements'

const Header = ({ ...props }) => {
  const { theme } = useTheme()

  return (
    <header {...props}>
      <div className='absolute z-30 flex items-center justify-center w-full py-4 mx-auto lg:justify-end lg:py-8 lg:px-10'>
        <span className='mr-3 -ml-1 font-medium text-gray-900 dark:text-gray-300'>
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </span>
        <ThemeSwitcher iconSize={5} />
      </div>
    </header>
  )
}

export default Header
