import React, { Fragment, useState } from 'react';
import logo from '../../../assets/images/headerLogo.png'
import { HeartIcon, SearchIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { logOut } from '../../../redux/slices/userSlice';
import { profileImg } from '../../../siteSetting/siteUrl';
import { motion } from 'framer-motion'
import SearchBox from './SearchBox';
import useTheme from '../../../hooks/useTheme';

const HeaderDown = () => {
    const { user } = useSelector((state) => state.auth)
    const { userData, favourite } = useTheme()
    return (
        <div className="py-1" style={{ background: `white`, position: 'relative' }}>

            <div className=' container mx-auto my-2 px-4 sm:px-0'>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-2">


                    <div className="col-span-1 sm:flex justify-center items-center hidden">

                    </div>
                    <div className="col-span-1 flex justify-start sm:justify-center items-center">
                        <NavLink to={'/'}>
                            <img src={logo} alt="" width={120} height={200} />
                        </NavLink>
                    </div>
                    <div className="col-span-1 flex justify-end items-center space-x-2">
                        <div className="hidden sm:block">
                            <Search />
                        </div>
                        <div className="flex items-center space-x-3">
                            <NavLink to='/favourite' className="relative">
                                <HeartIcon width={30} />
                                <span className="absolute -top-2 -right-1 bg-[#AD171A] text-white rounded-full px-1 py-0 font-serif text-2xs">{favourite?.length}</span>
                            </NavLink>

                            {/* Profile dropdown */}
                            {user?.verify && <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="bg-gray-800 flex h-[30px] w-[30px] text-sm rounded-full focus:outline-none focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open user menu</span>
                                        {userData?.image ? user?.authby === 'google' ? <img src={userData?.image} alt='' className='object-cover h-full w-full rounded-full' /> : <img src={profileImg + userData?.image} alt='' className=' h-full w-full rounded-full' /> : <div className='flex justify-center items-center w-full h-full'><UserIcon className='w-full h-full p-1' color={'white'} /></div>}
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
                                        {/* <Menu.Item>

                                            <div
                                                onClick={() => logOut()}
                                                className={'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer'}
                                            >
                                                Sign out
                                            </div>

                                        </Menu.Item> */}
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



export const Search = () => {
    const [show, setshow] = useState(false)
    const [text, setText] = useState(null)

    return (

        <>
            {text && <div className="absolute top-0 z-0  w-screen h-screen" onClick={() => setText('')}></div>}
            <div className="relative w-full">
                {show && <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.6 }} 
            
                >

                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        name={"search"}
                        autoComplete="given-name"
                        placeholder={"Search for items"}
                        defaultValue={text}
                        className={`mt-1 focus:outline-0 focus:ring-0 focus:border-0 block w-full shadow-sm text-xs sm:text-sm border-gray-300 rounded-md border py-1 sm:py-3 pl-10 placeholder:text-gray-500 bg-gray-50`}
                    />

                    <SearchIcon className='w-5 h-5 sm:w-6 sm:h-6 absolute left-1 sm:left-2 top-1 sm:top-4 bottom-0 font-semibold text-xs' />
                    <XIcon onClick={() => {
                        setText('')
                        setshow(!show)
                    }} className=' absolute right-1 sm:right-2 top-1 sm:top-4 bottom-0 font-semibold text-xs w-5 h-5 sm:w-6 sm:h-6' />

                </motion.div>
                }
                {text && <SearchBox search={text} setSearch={setText} />}
            </div>
            {!show && <SearchIcon onClick={() => setshow(!show)} className='h-5 w-5 sm:h-7 sm:w-7' />}
        </>
    )
}