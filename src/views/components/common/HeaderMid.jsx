
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    MinusIcon,
    PhoneIcon,
    PlusIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'


import { NavLink } from 'react-router-dom'
import { catImg, imgUrl } from '../../../siteSetting/siteUrl'
import { Search } from './HeaderDown'
import { logout } from '../../../redux/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import SetLoaing from '../Loader/SetLoaing'
import { HomePage } from '../../../services'
// import SingleCat from './SingleCat'
import HoverCat from './HoverCat'



export default function HeaderMid() {
    const { data, isLoading } = HomePage.GetInfo()
    const [isShowing, setIsShowing] = useState(false)
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    return (
        <Popover style={{ background: `white`, position: 'relative' }} className="relative bg-gray-50 shadow-lg mb-2">
            <div className="lg:px-6 mx-auto px-4 ">
                <div className="flex justify-between items-center py-0 md:justify-between ">
                    <div className="flex justify-start ">
                        <div className="relative">


                            <button
                                onMouseEnter={() => setIsShowing(true)}
                                onMouseLeave={() => setIsShowing(false)}
                                className={'group  rounded-md inline-flex items-center text-base font-medium hover:text-orange-400 gap-1 py-3'}
                            >
                                <ViewGridIcon
                                    className={

                                        ' h-5 w-5 group-hover:text-orange-400'
                                    }
                                    aria-hidden="true"
                                />
                                <span>Categories</span>
                            </button>


                            {isShowing && (
                                <div onMouseEnter={() => setIsShowing(true)}
                                    onMouseLeave={() => setIsShowing(false)} className="absolute z-10 -ml-4 mt-0 transform px-2 w-screen max-w-max sm:px-0 lg:ml-0 lg:left-0 ">
                                    <div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden rounded">
                                        {isLoading ? <SetLoaing /> : <div className="relative grid gap-3  py-6 sm:gap-8 px-4 sm:p-8 bg-[#fff] text-black">
                                            {data?.category?.map((item) => (
                                                <SingleCat key={item?.id} item={item} />
                                                // <NavLink
                                                //     to={"/category/" + item?.id} key={item?.id}

                                                //     className="-m-3 p-3 flex items-start hover:text-gray-200 "
                                                // >
                                                //     {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                                                //     <img src={catImg + item?.icon} className={"h-6 w-6 flex-shrink-0"} alt="" />
                                                //     <div className="ml-4">
                                                //         <p className="text-base font-medium">{item?.name}</p>

                                                //     </div>
                                                // </NavLink>
                                            ))}
                                        </div>}

                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden flex items-center">
                        <div className="block sm:hidden">
                            <Search />
                        </div>
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-7 w-7" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden lg2:flex items-center flex-wrap xl:space-x-6 gap-3 ">


                        <div className="flex justify-center items-center h-full">
                            <NavLink to='/' className="xl:text-base lg:text-sm font-medium text-gray-500 hover:text-gray-900 py-3">
                                Home
                            </NavLink>
                        </div>
                        {data?.category?.map(item => <HoverCat key={item?.id} item={item} />)}



                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:max-w-fit group gap-1 py-3">
                        <PhoneIcon className='xl:ml-2 h-5 w-5 group-hover:text-orange-400' />
                        <a href={"https://api.whatsapp.com/send?phone=" + data?.settings?.whatsapp_phone} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-orange-400">
                            Hotline <span className='text-orange-400'>{data?.settings?.phone}</span>
                        </a>

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
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white bg-opacity-90 divide-y-2 divide-gray-50">
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
                                        <SingleCat key={item?.id} item={item} />
                                        // <NavLink
                                        //     to={"/category/" + item?.id}
                                        //     key={item?.id}
                                        //     className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        // >
                                        //     <div className="flex-shrink-0 h-6 w-6" aria-hidden="true" >
                                        //         <img src={catImg + item?.icon} className={"w-full h-full"} alt="" />
                                        //     </div>
                                        //     <span className="ml-3 text-xs sm:text-base font-semibold text-gray-900">{item.name}</span>
                                        // </NavLink>
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
    )
}


const SingleCat = ({ item }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="w-full flex items-center rounded-md hover:bg-gray-50 px-2">
                <NavLink to={'/category/' + item.id} className="flex-1 flex gap-x-2 items-center text-gray-600 hover:ml-2 py-3 duration-300 " >
                    <div className="flex-shrink-0 h-6 w-6" aria-hidden="true" >
                        <img src={catImg + item?.icon} className={"w-full h-full"} alt="" />
                    </div>
                    <p>{item.name}</p></NavLink>
                {item?.subcategory.length ? <div className="h-full mt-8 pl-5">
                    {show ? <MinusIcon onClick={() => setShow(!show)} className='h-4 w-4 text-gray-800 cursor-pointer' /> :
                        <PlusIcon onClick={() => setShow(!show)} className='h-4 w-4 text-gray-800 cursor-pointer' />}
                </div> : null}
            </div>

            {show && <>
                <div className="ml-2">
                    {
                        item?.subcategory?.map((sub) =>
                            <SingleSub key={sub?.id} item={sub} />)
                    }
                </div>
            </>}
        </>
    )
}
const SingleSub = ({ item }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="w-full flex items-center px-4 py-3">
                <NavLink to={'/category/' + item.id} className="flex-1 text-gray-600 hover:ml-2 duration-300" > <p>{item.name}</p></NavLink>
                {item?.subsubcategory.length ? <div className="px-4 h-full">
                    {open ? <MinusIcon onClick={() => setOpen(!open)} className='h-4 w-4 text-gray-800 cursor-pointer' /> :
                        <PlusIcon onClick={() => setOpen(!open)} className='h-4 w-4 text-gray-800 cursor-pointer' />}
                </div> : null}
            </div>

            {open && <>
                <div className="ml-8">
                    {
                        item?.subsubcategory?.map((sub) =>
                            <div className='py-2'>
                                <NavLink to={'/category/' + sub.id} className="flex-1 text-gray-600 !hover:ml-10 duration-300" > <p>{sub.name}</p></NavLink>
                            </div>)
                    }
                </div>

            </>}
        </>
    )
}
