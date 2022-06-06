
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import httpReq from '../../../services/http.service';
import { getDiscount } from '../../components/utils/getDiscount';
import { getPrice } from '../../components/utils/getPrice';

const Discount = ({ setCupon, setShipping_area }) => {
    
    const [cuponCode, setCuponCode] = useState('')
    // const [load, setLoad] = useState(false)
    // const [res, setRes] = useState({})
    const cartList = useSelector((state) => state.cart.cartList)
    // const dispatch = useDispatch()
    // const price = getPrice(item.regular_price, item.discount_price, item.discount_type)

    const get_discout = (res) => {
        const priceList = cartList?.map(p => p.qty * getPrice(p.regular_price, p.discount_price, p.discount_type))
        const total = priceList.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
        // console.log(total);
        const result = getDiscount(total, res?.discount_amount)
        const dis = total - result
        return parseInt(dis)
    }
    const handleCupon = (e) => {
        e.preventDefault()
        // const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}`
        // }
        // axios.get(``, { headers: headers })
        // .then(res => {
        //     const {discount} = res.data
        //     setCupon(discount)
        // })
        // .catch(err => {
        //     console.log(err.response.data)
        //     const { errors, message } = err.response.data
        //     console.log(errors);
        //     console.log(message);
        // })
        const data = {
            
            code: cuponCode
        }

        // setLoad(true)
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const res = await httpReq.post('verifycoupon', data)
            if (res.error) {
                setCupon(0)
                return alert(res.error)
            }
            if (res.id) {
                console.log(res);
                const result = get_discout(res)
                setCupon(result)
            }



            // console.log(result);
            // setLoad(false)
            // set state with the result

        }

        // call the function
        fetchData()

            // make sure to catch any error
            .catch((er) => {
                // setLoad(false)
                console.log(er);
            });

    }

    return (
        <>
            <div className="shadow sm:rounded-md sm:overflow-hidden my-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            <div className="flex justify-start gap-4 items-center pb-3">
                                <label htmlFor="name" className="block text-xl font-semibold text-gray-700">
                                    Shipping Area
                                </label>
                                <div>
                                    <select onChange={(e) => setShipping_area(e.target.value)} id="country" name="country" autoComplete="country-name"
                                         className="mt-1 block w-full py-2 text-lg font-semibold border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value={0}>--Select Area--</option>
                                        <option value={60}>Indise Dhaka</option>
                                        <option value={120}>Outside Dhaka</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <div className="flex flex-wrap sm:justify-between sm:items-center pb-3">
                                <label htmlFor="name" className="block text-xl font-semibold text-gray-700">
                                    Discount
                                </label>
                                <div className='flex flex-wrap'>
                                    <input defaultValue={'DEMO123'} type={'text'} name="discount" className="border border-gray-400 py-2 px-2  rounded-sm" onChange={e => setCuponCode(e.target.value)} />
                                    <label htmlFor='discount' className='px-4 py-3 ml-2 font-semibold rounded-sm text-lg' onClick={(e) => handleCupon(e)}>Apply</label>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Discount;