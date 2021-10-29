import { Switch } from '@headlessui/react'
import { LightBulbIcon, MoonIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

import { classNames } from '@/utils/helper'

const ToggleDarkMode = ({ ...props }) => {
  const [enabled, setEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setEnabled(theme === 'dark')
  }, [theme])

  const handleChange = () => {
    setEnabled(!enabled)
    setTheme(enabled && theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={classNames(
        enabled ? 'bg-primary-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500'
      )}
      {...props}
    >
      <span className='sr-only'>Dark Mode</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-light-50 shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <LightBulbIcon className='w-3 h-3 text-gray-400' />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
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

export default ToggleDarkMode
