import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Logo = '/images/melody_ai_logo.png'

const product = [
  {
    name: 'Analytics',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { 
    name: 'Security', 
    href: '#', 
    icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    href: '#',
    icon: ArrowPathIcon,
  },
]

const company = [
  {
    name: 'About Us',
    href: '#',
    icon: InformationCircleIcon,
  },
  {
    name: 'Contact',
    href: '#',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Careers',
    href: '#',
    icon: BriefcaseIcon,
  },
  { 
    name: 'Press', 
    href: '#', 
    icon: NewspaperIcon 
  },
]

const resources = [
  {
    name: 'Blog',
    href: '#',
    icon: PencilSquareIcon,
  },
  {
    name: 'Documentation',
    href: '#',
    icon: DocumentTextIcon,
  },
  {
    name: 'Events',
    href: '#',
    icon: CalendarDaysIcon,
  },
  { 
    name: 'Resource Library', 
    href: '#', 
    icon: BuildingLibraryIcon 
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-zinc-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Melody AI</span>
              <img src={Logo} alt='Melody AI logo'/>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-white focus:outline-none focus:ring-2'
                    )}
                  >
                    <span>Product</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'ml-2 h-5 w-5 group-hover:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {product.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-300">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        </div>
                      </div>
                    </Popover.Panel>
                </>
              )}
            </Popover>

            <a href="/" className="text-base font-medium text-white hover:text-gray-300">
              Solutions
            </a>
            
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-white focus:outline-none focus:ring-2'
                    )}
                  >
                    <span>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'ml-2 h-5 w-5 hover:text-gray-300'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-300">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        </div>
                      </div>
                    </Popover.Panel>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-gray-300 '
                    )}
                  >
                    <span>Company</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'ml-2 h-5 w-5 hover:text-gray-300'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {company.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
                                <p className="mt-1 text-sm text-white">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="/" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300">
              Log in
            </a>
            <a
              href="/"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent hover:scale-105 duration-200 bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white"
            >
              Request consultation
            </a>
          </div>
        </div>
      </div>
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-stone-900 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/">
                    <span className="sr-only">Melody AI</span>
                      <img src={Logo} alt='Melody AI logo'/>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {product.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-500"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              </div>
              <div>
                <a
                  href="/"
                  className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-white">
                  Existing customer?{' '}
                  <a href="/" className="text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
    </Popover>
  )
}