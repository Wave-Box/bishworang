import React, { useState } from 'react';
import Address from './address/Address';
// import Address from './address/Address';
import Discount from './Discount';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import YourOrders from './YourOrders/YourOrders';
import { useSelector } from 'react-redux'
// import PaymentGateway from './PaymentGateway/PaymentGateway';
// import YourOrders from './YourOrders/YourOrders';

const CheckOutFour = () => {
    const cartList = useSelector((state) => state.cart.cartList)
    const [cuponDis, setCuponDis] = useState(0)
    const [shipping_area, setShipping_area] = useState(null)
    const [coupon, setCoupon] = useState(null)
    const [selectPayment, setSelectPayment] = useState(null)
    const [selectAddress, setSelectAddress] = useState(null)

    if (!cartList?.length) {
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h1 className='text-gray-400 font-bold text-3xl font-sans capitalize'>You have no product in your cart</h1>
            </div>
        )
    }

    return (
        <>
            <div className='' style={{ backgroundColor: "#F3F4F6" }}>
                <h2 className='py-10 text-4xl font-semibold text-center'>Checkout</h2>
                <div className="">
                    <div className="md:grid md:grid-cols-3 md:gap-6 mt-1 py-4 px-2">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <h3 className='text-center font-semibold text-lg text-black'>Shipping Info</h3>
                            <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />

                            <Discount setCupon={setCuponDis} setShipping_area={setShipping_area} setCoupon={setCoupon} />


                            <PaymentGateway selectPayment={selectPayment} setSelectPayment={setSelectPayment} />

                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-1">
                            <YourOrders cuponDis={cuponDis} selectAddress={selectAddress} selectPayment={selectPayment} shipping_area={shipping_area} coupon={coupon} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutFour;