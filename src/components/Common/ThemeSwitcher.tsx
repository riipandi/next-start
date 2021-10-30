import { Switch } from '@headlessui/react'
import { LightBulbIcon, MoonIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

import { classNames } from '@/utils/helper'

type Props = {
  className?: string
  asToggle?: boolean
}

const ThemeSwitcher = ({ asToggle = false, ...props }: Props) => {
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
          theme === 'dark' ? 'bg-primary-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500'
        )}
        {...props}
      >
        <span className='sr-only'>Dark Mode</span>
        <span
          className={classNames(
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-light-50 shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
          <span
            className={classNames(
              theme === 'dark' ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <LightBulbIcon className='w-3 h-3 text-gray-400' />
          </span>
          <span
            className={classNames(
              theme === 'dark' ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <MoonIcon className='w-3 h-3 text-secondary-600' />
          </span>
        </span>
      </Switch>
    )
  }

  return (
    <button type='button' onClick={handleChange} {...props}>
      {isDark ? (
        <MoonStars className='w-5 h-5 dark:text-primary-50 dark:hover:text-primary-200' />
      ) : (
        <SunDim className='w-5 h-5 text-gray-700 hover:text-primary-400' />
      )}
    </button>
  )
}

export default ThemeSwitcher
