import React from 'react';
import {GiShoppingBag} from 'react-icons/gi'
import { primaryColor } from '../../../constant';
import Taka from '../../components/utils/Taka';

const CartPopUp = ({open,setOpen}) => {
    return (
        <>
            <div onClick={()=>setOpen(!open)} className={`${open ? "hidden" : "hidden md:block"} `}>
                <div  className='fixed z-20 p-2  right-0 top-1/2  shadow-lg rounded-l-md cursor-pointer md:block w-24 pb-3' style={{ backgroundColor:primaryColor }}>
                    <div className="flex flex-col items-center space-y-1">
                        <div className="flex justify-center gap-x-1 items-center mb-2">
                            <GiShoppingBag className='font-semibold text-sm' />
                            <div className="flex flex-col leading ">
                                <span className='font-semibold text-black text-sm mt-1'>{0} Item
                                </span>

                            </div>

                        </div>

                        <div className="bg-white  text-center py-1  w-full mx-2 rounded-md hover:bg-gray-200">
                            <span className=' text-xs text-center text-black font-semibold tracking-wider '> <Taka tk={25} /></span>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
};

export default CartPopUp;