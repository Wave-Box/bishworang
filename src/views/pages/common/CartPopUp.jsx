import React, { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi'
import { useSelector } from 'react-redux';
import Drawer from '../../components/common/Drawer';
import Taka from '../../components/utils/Taka';
import { useLocation } from 'react-router-dom'

const CartPopUp = () => {
    const [open, setOpen] = useState(false)
    const cartList = useSelector((state) => state.cart.cartList)
    const priceList = cartList?.map(p => p?.qty * p?.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    const location = useLocation()

    return (
        <div>
        {cartList.length > 0 && <div className={`${location?.pathname === "/checkout" && "hidden"}`}>
            <div onClick={() => setOpen(!open)} className={`${open ? "hidden" : "hidden md:block"} `}>
                <div className='fixed z-[120] p-2  right-0 top-1/2  shadow-lg rounded-l-md cursor-pointer md:block w-24 pb-3 bg-gray-500'>
                    <div className="flex flex-col items-center space-y-1">
                        <div className="flex justify-center gap-x-1 items-center mb-2">
                            <GiShoppingBag className='font-semibold text-sm text-white' />
                            <div className="flex flex-col leading ">
                                <span className='font-semibold text-white text-sm mt-1'>{cartList?.length} Item
                                </span>

                            </div>

                        </div>

                        <div className="bg-white  text-center py-1  w-full mx-2 rounded-md hover:bg-gray-200">
                            <span className=' text-xs text-center text-black font-semibold tracking-wider '><Taka tk={parseInt(total)} /></span>
                        </div>
                    </div>
                </div>




            </div>
            <Drawer open={open} setOpen={setOpen} />
        </div>}
        </div>
    );
};

export default CartPopUp;