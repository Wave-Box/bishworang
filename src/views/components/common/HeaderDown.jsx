import React, { Fragment, useState } from 'react';
import logo from '../../../assets/images/headerLogo.png'
import { heart } from '../../../assets/svg';
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut } from '../../../redux/slices/userSlice';
import { profileImg } from '../../../siteSetting/siteUrl';

const HeaderDown = () => {
    const { user } = useSelector((state) => state.auth)
    return (
        <div className="py-1" style={{ background: `white`, position: 'relative' }}>
            <div className=' container mx-auto my-2'>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2">


                    <div className="col-span-1 flex justify-center items-center">
                        {/* <div className="relative w-full">
                            <input
                                type="text"
                                name={"search"}
                                autoComplete="given-name"
                                placeholder={"Search for items"}
                                className="mt-1 focus:outline-0 focus:border-0 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border py-3 pl-10 placeholder:text-gray-500 bg-gray-50"
                            />

                            <SearchIcon className=' absolute left-2 top-4 bottom-0 font-semibold text-xs h-6 w-6' />
                        </div> */}
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <div className="">
                            <img src={logo} alt="" width={150} height={200} />
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-end items-center">
                        <Search />
                        <div className="flex ">
                            <a href='/' className="indicator tab tab-lifted  border-0 mr-2 text-black">
                                {heart}
                                <span className="indicator-item badge border-0 bg-orange-400 text-white">8</span>
                            </a>

                            {/* Profile dropdown */}
                            {user?.otp === 'NULL' && <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open user menu</span>
                                        {user?.image ? user?.authby === 'google' ? <img src={user?.image} alt='' className='object-cover h-10 w-10 rounded-full' /> : <img src={profileImg + user?.image} alt='' className='object-cover h-10 w-10 rounded-full' /> : <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                        <Menu.Item>
                                            <NavLink
                                                to="/profile"
                                                className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'}
                                            >
                                                Your Profile
                                            </NavLink>

                                        </Menu.Item>
                                        <Menu.Item>

                                            <NavLink
                                                to="/profile/order"
                                                className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'}
                                            >
                                                Order
                                            </NavLink>

                                        </Menu.Item>
                                        <Menu.Item>

                                            <div
                                                onClick={() => logOut()}
                                                className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer'}
                                            >
                                                Sign out
                                            </div>

                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HeaderDown;



const Search = () => {
    const [show, setshow] = useState(false)
    return (

        <>
            <div className="relative w-full">
                {show && <>

                    <input
                        type="text"
                        name={"search"}
                        autoComplete="given-name"
                        placeholder={"Search for items"}
                        className={`mt-1 focus:outline-0 focus:border-0 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border py-3 pl-10 placeholder:text-gray-500 bg-gray-50 ${show ? "opacity-100 visible  transition-all duration-[3000ms] ease-linear" : "opacity-0 invisible  transition-all duration-[3000ms] ease-linear"}`}
                    />

                    <SearchIcon className=' absolute left-2 top-4 bottom-0 font-semibold text-xs h-6 w-6' />
                    <XIcon onClick={() => setshow(!show)} className=' absolute right-2 top-4 bottom-0 font-semibold text-xs h-6 w-6' />

                </>
                }
            </div>
            {!show && <SearchIcon onClick={() => setshow(!show)} width={30} fontWeight={900} className='mt-[6px]' />}
        </>
    )
}