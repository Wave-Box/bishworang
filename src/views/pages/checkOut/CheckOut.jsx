import React, { useState } from 'react';
import Address from './address/Address';
// import Address from './address/Address';
import Discount from './Discount';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import YourOrders from './YourOrders/YourOrders';
// import PaymentGateway from './PaymentGateway/PaymentGateway';
// import YourOrders from './YourOrders/YourOrders';

const CheckOutFour = () => {
    const [cuponDis, setCuponDis] = useState(0)
    const [shipping_area, setShipping_area] = useState(0)
    
    const [selectPayment, setSelectPayment] = useState(null)
    const [selectAddress, setSelectAddress] = useState(null)
    // httpReq.get('/customer/address/list').then(res=>console.log(res))


    return (
        <>
            <div className='' style={{ backgroundColor: "#F3F4F6" }}>
                <h2 className='py-10 text-4xl font-semibold text-center'>Checkout</h2>
                <div className="">
                    <div className="md:grid md:grid-cols-3 md:gap-6 mt-1 py-4 px-2">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />

                            <Discount setCupon={setCuponDis} setShipping_area={setShipping_area} />


                            <PaymentGateway selectPayment={selectPayment} setSelectPayment={setSelectPayment} />

                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-1">
                            <YourOrders cuponDis={cuponDis} selectAddress={selectAddress} selectPayment={selectPayment} shipping_area={shipping_area} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutFour;