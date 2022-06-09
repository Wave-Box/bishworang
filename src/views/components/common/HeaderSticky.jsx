/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    RefreshIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'

import logo from '../../../assets/images/headerLogo.png'
import { NavLink } from 'react-router-dom'
import { yellow } from '../../../siteSetting/theme'

const solutions = [
    {
        name: 'New Arrival',

        href: '/shop',
        icon: ChartBarIcon,
    },
    {
        name: "Women's Wear",

        href: '/shop',
        icon: CursorClickIcon,
    },
    {
        name: "Men's Wear",

        href: '/shop',
        icon: CursorClickIcon,
    },
    {
        name: " kid's Wear",

        href: '/shop',
        icon: CursorClickIcon,
    },
    {
        name: " Festival",

        href: '/shop',
        icon: CursorClickIcon,
    },


    {
        name: 'Exclusive',

        href: '/shop',
        icon: ViewGridIcon,
    },
    {
        name: 'Eid',

        href: '/shop',
        icon: RefreshIcon,
    },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const HeaderSticky = () => {
    return (
        <>

            <Popover style={{ backgroundColor: yellow, position: 'relative' }} className="relative shadow-lg mb-2">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <div className="">
                                <img src={logo} alt="" width={100} />
                            </div>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden lg:flex flex-wrap xl:space-x-10 space-x-3">


                            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                New Arrival
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Women's Wear
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Men's Wear
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                kid's Wear
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Festival
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Exclusive
                            </NavLink>
                            <NavLink to="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Sale
                            </NavLink>


                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 group gap-1">
                            <PhoneIcon className='ml-2 h-5 w-5 group-hover:text-orange-400' />
                            <NavLink to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-orange-400">
                                Hotline <span className='text-orange-400'> 1900 - 888</span>
                            </NavLink>

                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">

                                <div>
                                    <NavLink
                                        to="/login"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </NavLink>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <NavLink to="/login" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        </>
    );
};

export default HeaderSticky;