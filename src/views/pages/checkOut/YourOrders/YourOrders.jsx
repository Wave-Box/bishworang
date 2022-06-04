import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown, MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import AlertSuccess from '../../../Components/Alert/AlertSuccess';
import AlertWraning from '../../../Components/Alert/AlertWraning';
import Taka from '../../../Components/utils/Taka';


import { addToCartList, clearCartList, decrementQty, removeToCartList } from '../../../redux/slice/productslice';
import { apiUrl, imgUrl } from '../../../siteSetting/ApiUrl';
import { yellow } from '../../../siteSetting/theme';

const YourOrders = ({ cuponDis, selectAddress, selectPayment }) => {
    const cartList = useSelector((state) => state.cart.cartList)
    const dispatch = useDispatch()
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    const tax = total * .05


    const handleCheckout = () => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const cart = cartList.map(item => ({ product_id: item.id, quantity: item.qty }))
       
        const data = {
            order_amount: total + tax,
            coupon_discount_amount: cuponDis ? cuponDis : 0,
            payment_method: selectPayment,
            delivery_address_id: selectAddress?.id,
            delivery_date: moment().format("YYYY-MM-DD HH:mm:ss"),
            time_slot_id: 1,
            cart: cart
        }
        if (!data.delivery_address_id) {
          AlertWraning("Please Select Delivery Address") 
        }
        if (!data.payment_method) {
          AlertWraning("Please Select Payment Method") 
        }
        if (data.delivery_address_id && data.order_amount && data.payment_method && data.cart) {
            console.log(data);

            axios.post(`${apiUrl}/customer/order/place`, data, {
                headers: headers
            })
                .then((response) => {
                   if (response?.data?.message) {
                        AlertSuccess("Congratulations", response.data.message)
                        dispatch(clearCartList())
                        // Navigate("/profile")
                   }

                })
                .catch((error) => {
                    const { errors, message } = error.response.data
                    console.log(errors);
                    console.log(message);
                    error.response.data?.errors.map(i => null)

                })
        } else {

        }
    }


    return (
        <div>
            <h3 className='text-center font-semibold text-lg text-black'>Your Order</h3>
            {cartList ? <>

                <div className="my-16">
                    <div className=" flex flex-col justify-between bg-white shadow-xl  mt-16 pt-5">


                        {/* Replace with your content */}
                        <div className="px-4 sm:px-2 h-2/3 overflow-y-scroll">
                            {
                                cartList?.map((item) => <div key={item.id} className="flex justify-between space-y-2 space-x-1 items-center last:border-0 border-b border-gray-400 py-2 overflow-y-scroll">
                                    <div className="w-14">
                                        <img className='w-full ' src={`${imgUrl}/storage/app/public/product/${item.image[0]}`} alt="" />
                                        {/* <img className='w-full ' src={`${imgUrl}/public/storage/product/${item.image.split('["')[1].split('"]')[0]}`} alt="" /> */}
                                    </div>
                                    <div className="flex flex-col gap-x-2 gap-y-1 pl-2">
                                        <h3 className='text-black text-md  font-normal'>{item.title}</h3>
                                        <p className='text-sm'>&#2547; {item.price} </p>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-center items-center">
                                        <MdOutlineKeyboardArrowUp onClick={() => dispatch(addToCartList({ ...item }))} />
                                        <p>{item.qty}</p>
                                        <MdKeyboardArrowDown onClick={() => dispatch(decrementQty(item.id))} />
                                    </div>
                                    <div className="text-md font-semibold">{item.price * item.qty}</div>
                                    <div className="">
                                        <MdDelete onClick={() => dispatch(removeToCartList(item.id))} className='text-2xl cursor-pointer' />
                                    </div>
                                </div>
                                )
                            }
                        </div>




                    </div>
                </div>
            </> : <div className="">
                <h3 className='text-center font-semibold text-lg text-black'>No Products Found</h3>
            </div>}
            <hr className='my-5' />
            <div className="my-5 text-gray-500 " style={{ fontWeight: 500 }}>
                <div className="flex justify-between items-center">
                    <p>Sub Total</p>
                    <p><Taka tk={total} /></p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Discount</p>
                    <p><Taka tk={cuponDis ? cuponDis : 0} /></p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Tax</p>
                    <p><Taka tk={tax} /></p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Estimated Shipping</p>
                    <p><Taka tk={(total + tax) - cuponDis} /></p>
                </div>
            </div>

            <button
                className='font-semibold tracking-wider my-1 rounded-sm border border-gray-300 w-full py-3'
                style={{ backgroundColor: `${yellow}` }}
                onClick={() => handleCheckout()}
            >
                Check Availability
            </button>
        </div>
    );
};

export default YourOrders;