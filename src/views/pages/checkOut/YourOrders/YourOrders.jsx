
// import { primary } from 'daisyui/src/colors';
import React from 'react';
import { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown, MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCartList, clearCartList, decrementQty, removeToCartList } from '../../../../redux/slices/productslice';
import { HomePage } from '../../../../services';
import httpReq from '../../../../services/http.service';
import { productImg } from '../../../../siteSetting/siteUrl';
import { red } from '../../../../siteSetting/theme';
import { getPrice } from '../../../components/utils/getPrice';
import Taka from '../../../components/utils/Taka';


const YourOrders = ({ cuponDis, coupon, selectAddress, selectPayment, shipping_area }) => {
// console.log(shipping_area,"area");
    const cartList = useSelector((state) => state.cart.cartList)
    const { user } = useSelector((state) => state.auth)
    const { data } = HomePage.GetInfo()
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    const tax = (parseFloat(data?.settings?.tax).toFixed(2) / 100) * parseFloat(total).toFixed(2)

    // const alert = useAlert()
    
    const handleCheckout = () => {
        setLoading(true);
        const cart = cartList.map(item => ({
            id: item.id,
            quantity: item.qty,
            discount: item.regular_price - getPrice(item.regular_price, item.discount_price, item.discount_type),
            price: item.price,
            size: item.size,
            color: item.color,
            additional_price: item.additional_price,
            unit: item.unit,
            volume: item.volume,
        }))


        const data = {
            uid: user?.id,
            name: selectAddress?.name,
            phone: selectAddress?.phone,
            payment_type: selectPayment,
            address: selectAddress?.address,
            subtotal: total,
            shipping: parseInt(shipping_area),
            total: (total + tax + parseInt(shipping_area)) - cuponDis,
            discount: cuponDis ? cuponDis : 0,
            product: cart,
            tax: 0,
            coupon: coupon ? coupon : null,
        }


        if (!data.address) {
            toast("Please Select The Address", {
                type: 'danger',
                autoClose: 1000,

            })
        }
        if (!data.payment_type) {
            toast("Please Select Payment Method", {
                type: 'danger',
                autoClose: 1000,

            })
        }
        if (!shipping_area || shipping_area === "Select Method") {
            toast("Please Select Shipping Address", {
                type: 'danger',
                autoClose: 1000,

            })
        }
        if (data.total && data.payment_type && data.product && shipping_area && data.address) {

            httpReq.post(`placeorder`, data)
                .then((response) => {
                    if (response?.order) {
                        toast(`Your #${response?.order?.reference_no} order complete successfully!`, {
                            type: "success"
                        });
                        dispatch(clearCartList())
                        navigate("/profile/order")

                    }
                    if (response?.payment) {
                        localStorage.setItem("easy", response?.payment)
                        window.location.replace(response?.payment)
                    }

                    if (response?.user) {
                        localStorage.setItem("user", JSON.stringify(response.user));
                    }
                    if (response?.error) {
                        toast(response?.error, {
                            type: "warning"
                        });
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    const { errors, message } = error.response.data
                    console.log(errors);
                    console.log(message);
                    // error.response.data?.errors.map(i => alert.show(i.message, { type: 'error' }))

                })
        } else {
            setLoading(false);
        }
    }


    return (
        <div>
            {/* {error && <SnackBar open={true} msg={error} />} */}

            <h3 className='text-center font-semibold text-lg text-black'>Your Items</h3>
            {cartList ? <>

                <div className="my-1">
                    <div className=" flex flex-col justify-between bg-white shadow-xl mt-5 pt-5">


                        {/* Replace with your content */}
                        <div className="px-4 sm:px-2 h-[285px] overflow-y-scroll rounded-md">
                            {
                                cartList?.map((item) =>

                                    <Single key={item.cartId} item={item} />
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
                    <p><Taka tk={parseInt(total)} /></p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Discount</p>
                    <p><Taka tk={cuponDis ? cuponDis : 0} /></p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Tax{" ( " + data?.settings?.tax + "% )"}</p>
                    <p><Taka tk={parseInt(tax)} /></p>
                </div>
                {/* <div className="flex justify-between items-center">
                    <p>Estimated Shipping</p>
                    {shipping_area === "--Select Area--" ? <p><Taka /> 0</p> : <p><Taka tk={shipping_area ? shipping_area : 0} /></p>}
                </div> */}
                <div className="flex justify-between items-center">
                    <p>Estimated Shipping</p>
                    {shipping_area === "Select Method" ? <p>BDT 0.00</p> : <p><Taka tk={shipping_area ? shipping_area : 0} /></p>}
                </div>
                {/* <div className="flex justify-between items-center text-black font-semibold">
                    <p>Total</p>
                    {shipping_area === "--Select Area--" || shipping_area === null ? <p>{total < 500 ? parseInt(total) : <Taka tk={(parseInt(total + tax)) - couponDis} />}</p> : <p>{total < 500 ? parseInt(total) : <Taka tk={(parseInt(total + tax) + parseInt(shipping_area)) - couponDis} />}</p>}
                </div> */}
                <div className="flex justify-between items-center">
                    <p>Total</p>
                    {/* <p><Taka tk={(parseInt(total + tax) + parseInt(shipping_area)) - cuponDis} /></p> */}
                    {shipping_area === "Select Method" || shipping_area === null ? <p>{<Taka tk={(parseInt(total + tax)) - cuponDis} />}</p> : <p>{<Taka tk={(parseInt(total + tax) + parseInt(shipping_area)) - cuponDis} />}</p>}
                </div>
            </div>

            {loading ? <button
                className={`font-semibold tracking-wider my-1 rounded-sm border border-gray-300 w-full py-3  text-white transition-all duration-200 ease-linear bg-[${red}] hover:bg-red-600 hover:text-gray-100 hover:shadow-lg rounded-md`}
            >
                Loading
            </button> : <button
                className={`font-semibold tracking-wider my-1 rounded-sm border border-gray-300 w-full py-3  text-white transition-all duration-200 ease-linear bg-[${red}] hover:bg-red-600 hover:text-gray-100 hover:shadow-lg rounded-md`}
                onClick={() => handleCheckout()}
            >
                Place Order
            </button>}

            {/* <button
                className={`font-semibold tracking-wider my-1 rounded-sm border border-gray-300 w-full py-3  text-white transition-all duration-200 ease-linear bg-[${red}] hover:bg-red-600 hover:text-gray-100 hover:shadow-lg rounded-md`}
                style={{ backgroundColor: primary }}
                onClick={() => handleCheckout()}
            >
                Place Order
            </button> */}
        </div>
    );
};

export default YourOrders;



const Single = ({ item }) => {
    const dispatch = useDispatch()

    // const price = getPrice(item.regular_price, item.discount_price, item.discount_type)

    return <div key={item.id} className="flex justify-between space-y-2 space-x-1 items-center last:border-0 border-b border-gray-400 py-2">
        <div className="w-14">
            <img className='w-14 h-14 ' src={productImg + item.image[0]} alt="" />

        </div>
        <div className="flex flex-col gap-x-2 gap-y-1 pl-2">
            <h3 className='text-black text-md  font-normal'><NavLink to={`/product/${item.id}`}>{item?.name?.slice(0, 30)}</NavLink></h3>
            <p className='text-sm'><Taka tk={parseInt(item?.price)} /> </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
            <MdOutlineKeyboardArrowUp onClick={() => dispatch(addToCartList({ ...item }))} />
            <p>{item.qty}</p>
            <MdKeyboardArrowDown onClick={() => dispatch(decrementQty(item.cartId))} />
        </div>
        <div className="text-md font-semibold"><Taka tk={parseInt(item?.price * item.qty)} /></div>
        <div className="">
            <MdDelete onClick={() => dispatch(removeToCartList(item.cartId))} className='text-2xl cursor-pointer' />
        </div>
    </div>
}