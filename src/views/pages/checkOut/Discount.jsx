import axios from 'axios';
import React, { useState } from 'react';
import { apiUrl } from '../../siteSetting/ApiUrl';
import { yellow } from '../../siteSetting/theme';

const Discount = ({setCupon }) => {
   const [cuponCode,setCuponCode] = useState('')
    const handleCupon = (e) => {
        e.preventDefault()
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        axios.get(`${apiUrl}/coupon/apply?code=${cuponCode}`, { headers: headers })
        .then(res => {
            const {discount} = res.data
            setCupon(discount)
        })
        .catch(err => {
            console.log(err.response.data)
            const { errors, message } = err.response.data
            console.log(errors);
            console.log(message);
        })
    }
    return (
        <>
            <div className="shadow sm:rounded-md sm:overflow-hidden my-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                    <div className="col-span-6 sm:col-span-4">
                        <div className="flex justify-between items-center pb-3">
                            <label htmlFor="name" className="block text-xl font-semibold text-gray-700">
                                Discount
                            </label>
                            <div>
                                <input type={'text'} name="discount" className="border border-gray-400 py-2 px-2  rounded-sm" onChange={e => setCuponCode(e.target.value)} />
                                <label style={{backgroundColor:`${yellow}`}} htmlFor='discount' className='px-4 py-3 ml-2 font-semibold rounded-sm text-lg' onClick={(e) => handleCupon(e)}>Apply</label>
                            </div>
                        </div>


                    </div>


                </div>

            </div>
        </>
    );
};

export default Discount;