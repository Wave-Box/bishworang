
import React from 'react';
import { useSelector } from 'react-redux';
import useTheme from '../../../hooks/useTheme';
import httpReq from '../../../services/http.service';
import { getDiscount } from '../../components/utils/getDiscount';
import { getPrice } from '../../components/utils/getPrice';
import { useForm } from 'react-hook-form'
import { red } from '../../../siteSetting/theme';

const Discount = ({ setCupon, setShipping_area }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { store_id, settings } = useTheme()
    const cartList = useSelector((state) => state.cart.cartList)
    const get_discout = (res) => {
        const priceList = cartList?.map(p => p.qty * getPrice(p.regular_price, p.discount_price, p.discount_type))
        const total = priceList.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
        
        const result = getDiscount(total, res?.discount_amount)
        const dis = total - result
        return parseInt(dis)
    }
    const onSubmit = data => {
        data['store_id'] = store_id

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const res = await httpReq.post('verifycoupon', data)
            if (res.error) {
                setCupon(0)
                return alert(res?.error)
            }
            if (res.id) {
                const result = get_discout(res)
                setCupon(result)

            }




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
                                <label htmlhtmlFor="name" className="block text-xl font-semibold text-gray-700">
                                    Shipping Area
                                </label>
                                <div>

                                    <select onChange={(e) => setShipping_area(e.target.value)} id="country" name="country" autoComplete="country-name"
                                        className="mt-1 block w-full py-2 text-lg font-semibold border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value={0}>--Select Area--</option>
                                        <option value={parseInt(settings?.shipping_area_1_cost)}>{settings?.shipping_area_1}</option>
                                        <option value={parseInt(settings?.shipping_area_2_cost)}>{settings?.shipping_area_2}</option>
                                        <option value={parseInt(settings?.shipping_area_3_cost)}>{settings?.shipping_area_3}</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <div className="flex flex-wrap sm:justify-between sm:items-center pb-3 items-start">
                                <label htmlhtmlFor="name" className="block text-xl font-semibold text-gray-700">
                                    Discount
                                </label>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap justify-center items-start'>
                                    <div className="flex flex-col justify-center">
                                        <input {...register("code", { required: true })} type={'text'} className="border border-gray-400 py-2 px-2 rounded-sm" />
                                        {errors.code && <span className='text-red-500'>Field is empty</span>}
                                    </div>
                                    <input type={'submit'} value={'Apply'} htmlhtmlFor='discount' className={`px-4 py-2 ml-2 font-semibold rounded-sm text-lg bg-[${red}] hover:bg-red-600 hover:text-gray-100 text-white`} />
                                </form>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Discount;