import { Menu, Transition } from '@headlessui/react'
import { BellIcon, CogIcon, LogoutIcon, MenuAlt2Icon, UserIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

import { Breadcrumbs } from '@/components/AppLayout'
import { BasicLink } from '@/components/Essentials'

import { classNames } from '@/utils/helper'

type TopbarProps = {
  setSidebarOpen: (value: boolean) => void
}

const userNavigation = [
  { name: 'Your Profile', href: '#', icon: UserIcon },
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Sign out', href: '#', icon: LogoutIcon }
]

const Topbar = ({ setSidebarOpen }: TopbarProps) => {
  return (
    <div className='sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow lg:px-4'>
      <button
        type='button'
        className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
      </button>
      <div className='flex justify-between flex-1 px-4'>
        <div className='flex flex-1'>
          <Breadcrumbs />
          {/* <SearchBox /> */}
        </div>
        <div className='flex items-center ml-4 md:ml-6'>
          <button type='button' className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none'>
            <span className='sr-only'>View notifications</span>
            <BellIcon className='w-6 h-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button className='z-40 flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                <span className='sr-only'>Open user menu</span>
                <img className='w-8 h-8 rounded-full' src='https://doodleipsum.com/700x700/avatar-2' alt='User Avatar' />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-50 w-48 mt-2 origin-top-right bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item, index, row) => (
                  <Menu.Item key={item.name}>
                    <BasicLink
                      href={item.href}
                      className={classNames(
                        index != row.length - 1 ? 'border-b' : 'rounded-md',
                        'inline-flex w-full items-center px-5 py-3 text-sm text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      <item.icon className='flex-shrink-0 w-5 h-5 mr-2 -ml-1 text-gray-500' aria-hidden='true' />
                      <span>{item.name}</span>
                    </BasicLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Topbar
