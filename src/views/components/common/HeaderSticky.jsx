
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    PhoneIcon,
    XIcon,
} from '@heroicons/react/outline'

import logo from '../../../assets/images/headerLogo.png'
import { NavLink } from 'react-router-dom'
import { yellow } from '../../../siteSetting/theme'
import { motion } from 'framer-motion'
import { catImg, imgUrl } from '../../../siteSetting/siteUrl'
import { logout } from '../../../redux/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import { HomePage } from '../../../services'
import HoverCat from './HoverCat'


const HeaderSticky = () => {
    const { data } = HomePage.GetInfo()

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const [openMenu, setOpenMenu] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY >= 200) {
            setOpenMenu(true);
        }
        else {
            setOpenMenu(false);
        }
    };
    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            {openMenu &&
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="" style={{
                    position: 'sticky',
                    top: 0, zIndex: 111,
                }}>
                    <Popover style={{ backgroundColor: yellow, position: 'relative' }} className="relative shadow-lg mb-2">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="flex justify-between items-center py-2 md:justify-start gap-2">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <NavLink to={'/'}>
                                        <img src={logo} alt="" width={100} />
                                    </NavLink>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:bg-gray-100 focus:outline-none focus:ring-0">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <Popover.Group as="nav" className="hidden lg:flex items-center xl:space-x-10 space-x-3 h-[40px]">


                                    <div className="flex justify-center items-center h-full">
                                        <NavLink to='/' className="xl:text-base lg:text-sm font-medium text-gray-500 hover:text-gray-900 py-2">
                                            Home
                                        </NavLink>
                                    </div>
                                    {data?.category?.map(item => <HoverCat key={item?.id} item={item} />)}


                                </Popover.Group>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:max-w-fit group gap-1">
                                    <PhoneIcon className='ml-2 h-5 w-5 group-hover:text-orange-400' />
                                    <NavLink to="/" className="whitespace-nowrap text-base font-medium text-black hover:text-orange-400">
                                        Hotline <span className='text-orange-400 tracking-tight'> {data?.settings?.phone}</span>
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
                                                    src={imgUrl + data?.settings?.logo}
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-[#AD171A]">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-8">
                                                {data?.category?.map((item) => (
                                                    <NavLink
                                                        to={"/category/" + item?.id}
                                                        key={item?.id}
                                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                    >
                                                        <div className="flex-shrink-0 h-6 w-6" aria-hidden="true" >
                                                            <img src={catImg + item?.icon} className={"w-full h-full"} alt="" />
                                                        </div>
                                                        <span className="ml-3 text-xs sm:text-base font-semibold text-gray-900">{item.name}</span>
                                                    </NavLink>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5 space-y-6">

                                        <div>
                                            {user?.verify ? <button
                                                onClick={() => dispatch(logout())}
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#AD171A] hover:bg-red-600"
                                            >
                                                Logout
                                            </button> : <NavLink
                                                to='/login'
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#AD171A] hover:bg-red-600"
                                            >
                                                Sign in
                                            </NavLink>}

                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </motion.div>}
        </>
    );
};

export default HeaderSticky;