
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Taka from '../utils/Taka'
import { useDispatch, useSelector } from 'react-redux'
import { productImg } from '../../../siteSetting/siteUrl'
import { addToCartList, decrementQty, removeToCartList } from '../../../redux/slices/productslice'
import { NavLink } from 'react-router-dom'

export default function Drawer({ open, setOpen }) {

    const cartList = useSelector((state) => state.cart.cartList)
    const priceList = cartList?.map(p => parseInt(p.qty) * p?.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0  bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute cursor-pointer top-10 left-0 flex pt-4 pr-2 sm:ml-2 sm:pr-2">

                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col z-20 bg-white py-8 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium text-gray-900 text-right border-b pb-2 border-black font-serif ">Item(s) added to your bag </Dialog.Title>
                                            <div className=' divide-black'></div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <ChevronRightIcon onClick={() => setOpen(false)} height={48} width={20} className={"absolute z-10 left-0 bg-gray-400 bottom-1/2 cursor-pointer"} />
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full flex flex-col justify-between border-gray-200" aria-hidden="true">
                                                    <div className="overflow-y-scroll">
                                                        {cartList?.map((item) =>

                                                            <SingleItem key={item.cartId} item={item} />
                                                        )}

                                                    </div>
                                                    <div className="border-t border-black space-y-3 pt-3">
                                                        <h6 className='text-right font-serif font-semibold text-lg'>Total : <Taka tk={parseInt(total)} /></h6>
                                                        <NavLink to="/checkout" className='w-full bg-orange-200 py-2 rounded font-semibold outline-0 border-0'>Proceed to pay</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}




const SingleItem = ({ item }) => {
    const dispatch = useDispatch()
   
    // const price = getPrice(item?.regular_price, item?.discount_price, item?.discount_type)
    return (
        <div className="md:flex items-center py-4 border-b border-gray-300 last:border-b-0 scroll-smooth bg-scroll">
            <div className="w-1/4">
                <img src={productImg + item?.image[0]} className="w-full h-20 object-center object-cover" alt=' ' />
            </div>
            <div className="md:pl-3 md:w-3/4 w-full">
                {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                <div className="flex items-center justify-between w-full pt-1">
                    <NavLink to={'/product/' + item?.id} className="text-base font-black leading-none text-gray-800">{item?.name}</NavLink>

                </div>
                {/* <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p> */}
                <div className="flex items-center justify-between w-full">
                    {item?.color && <p className="text-xs leading-3 text-gray-600 py-1">Color: {item?.color}</p>}
                    {item?.size && <p className="text-xs leading-3 text-gray-600 py-1">Size: {item.size}</p>}
                    <div className="flex justify-around border border-gray-300 w-20 rounded-md ">
                        <div className="flex justify-center items-center">
                            <p className='text-black'>{item.qty}</p>
                        </div>
                        <div className="flex flex-col justify-around items-center text-black">
                            <ChevronUpIcon height={14} onClick={() => dispatch(addToCartList({ ...item }))} />
                            <ChevronDownIcon height={14} onClick={() => dispatch(decrementQty(item?.cartId))} />
                        </div>
                    </div>
                </div>
                {/* <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p> */}
                <div className="flex items-center justify-between pt-1">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => dispatch(removeToCartList(item?.cartId))}>Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800"><Taka tk={item?.price} /></p>
                </div>
            </div>
        </div>
    )
}