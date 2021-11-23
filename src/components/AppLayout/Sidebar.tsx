import { Dialog, Transition } from '@headlessui/react'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { BasicLink } from '@/components/Essentials'

import { classNames } from '@/utils/helper'

type SidebarProps = {
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Team', href: '#', icon: UsersIcon },
  { name: 'Projects', href: '#', icon: FolderIcon },
  { name: 'Calendar', href: '#', icon: CalendarIcon },
  { name: 'Documents', href: '#', icon: InboxIcon },
  { name: 'Reports', href: '#', icon: ChartBarIcon }
]

const secondaryNavigation = [
  { name: 'Website redesign', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' }
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const router = useRouter()

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-40 flex md:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-blue-700'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 pt-2 -mr-12'>
                  <button
                    type='button'
                    className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex items-center flex-shrink-0 px-4'>
                <img
                  className='w-auto h-8'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='flex-1 h-0 mt-5 overflow-y-auto'>
                <nav className='flex-1 px-2 space-y-7' aria-label='Sidebar'>
                  <div className='space-y-1'>
                    {navigation.map((item) => (
                      <BasicLink
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          router.pathname === item.href ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon className='flex-shrink-0 w-6 h-6 mr-4 text-blue-300' aria-hidden='true' />
                        {item.name}
                      </BasicLink>
                    ))}
                  </div>
                  <div className='mx-2 border-t border-opacity-50 border-blue-80'></div>
                  <div className='space-y-4'>
                    <h3 className='px-3 text-xs font-semibold tracking-wider text-gray-100 uppercase' id='projects-headline'>
                      Projects
                    </h3>
                    <div className='space-y-1' role='group' aria-labelledby='projects-headline'>
                      {secondaryNavigation.map((item) => (
                        <BasicLink
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            router.pathname === item.href ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600',
                            'group flex items-center px-3 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <span className='truncate'>{item.name}</span>
                        </BasicLink>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-col flex-grow pt-5 overflow-y-auto bg-blue-700'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <img
              className='w-auto h-8'
              src='https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg'
              alt='Workflow'
            />
          </div>
          <div className='flex flex-col flex-1 mt-5'>
            <nav className='flex-1 px-2 space-y-7' aria-label='Sidebar'>
              <div className='space-y-1'>
                {navigation.map((item) => (
                  <BasicLink
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      router.pathname === item.href ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon className='flex-shrink-0 w-6 h-6 mr-3 text-blue-300' aria-hidden='true' />
                    {item.name}
                  </BasicLink>
                ))}
              </div>
              <div className='mx-2 border-t border-opacity-50 border-blue-80'></div>
              <div className='space-y-4'>
                <h3 className='px-3 text-xs font-semibold tracking-wider text-gray-100 uppercase' id='projects-headline'>
                  Projects
                </h3>
                <div className='space-y-1' role='group' aria-labelledby='projects-headline'>
                  {secondaryNavigation.map((item) => (
                    <BasicLink
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        router.pathname === item.href ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <span className='truncate'>{item.name}</span>
                    </BasicLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
