import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../searchPage/Search';
import Address from './address/Address';
import Discount from './Discount';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import YourOrders from './YourOrders/YourOrders';

const CheckOut = () => {
    const [cuponDis, setCuponDis] = useState(null)
    const [selectPayment, setSelectPayment] = useState("")
    const [selectAddress, setSelectAddress] = useState({})
    const searchText = useSelector((state) => state.cart.search)
    // httpReq.get('/customer/address/list').then(res=>console.log(res))

    if (searchText) {
        return (
            <Search />
        )
    }
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6 mt-16 py-8 px-2" style={{ backgroundColor: "#F3F4F6" }}>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />

                        <Discount setCupon={setCuponDis} />


                        <PaymentGateway selectPayment={selectPayment} setSelectPayment={setSelectPayment} />

                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-1">
                        <YourOrders cuponDis={cuponDis} selectAddress={selectAddress} selectPayment={selectPayment} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default CheckOut;