import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { CloudMoon, MoonStars, Sun, SunDim } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

import { classNames } from '@/utils/helper'

interface Props {
  className?: string
  asToggle?: boolean
  iconSize?: number
}

const ThemeSwitcher = ({ asToggle = false, iconSize = 5, ...props }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => setMounted(true), [])

  const handleChange = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  if (!mounted) return null

  if (asToggle) {
    return (
      <Switch
        checked={isDark}
        onChange={handleChange}
        className={classNames(
          theme === 'dark' ? 'bg-brand-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500'
        )}
        {...props}
      >
        <span className='sr-only'>Dark Mode</span>
        <span
          className={classNames(
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-gray-50 shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
          <span
            className={classNames(
              theme === 'dark' ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <Sun weight='bold' className='w-3 h-3 text-gray-400' />
          </span>
          <span
            className={classNames(
              theme === 'dark' ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <MoonStars weight='regular' className='w-3 h-3 text-accent-600' />
          </span>
        </span>
      </Switch>
    )
  }

  return (
    <button type='button' onClick={handleChange} {...props}>
      <span className='sr-only'>Toggle Dark Mode</span>
      {isDark ? (
        <CloudMoon
          weight='duotone'
          className={classNames(
            iconSize ? `w-${iconSize} h-${iconSize}` : 'w-5 h-5',
            'dark:text-brand-50 dark:hover:text-brand-200'
          )}
        />
      ) : (
        <SunDim
          weight='duotone'
          className={classNames(iconSize ? `w-${iconSize} h-${iconSize}` : 'w-5 h-5', 'text-gray-700 hover:text-brand-400')}
        />
      )}
    </button>
  )
}

export default ThemeSwitcher
