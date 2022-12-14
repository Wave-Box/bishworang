import React, { useEffect, useState } from 'react';
import { HeartIcon, EyeIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"
import './productCard.css'
import { BsBagPlus } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Badge from '../utils/Badge';
import { productImg } from '../../../siteSetting/siteUrl';
import { getPrice } from '../utils/getPrice';
import Taka from '../utils/Taka';
import { toast } from 'react-toastify';
import httpReq from '../../../services/http.service';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartList, incrementQty } from '../../../redux/slices/productslice';
import useTheme from '../../../hooks/useTheme';
import Details from '../../pages/singleProduct/Details';
import QuickView from './QuickView';
import { HomePage } from '../../../services';

const NewProductCard = ({ item }) => {
    const { data } = HomePage.GetInfo();

    const [open, setOpen] = useState(false)
    const [result, setResult] = useState({})
    const { makeid } = useTheme()
    const price = getPrice(item?.regular_price, item?.discount_price, item?.discount_type)
    const secondImg = item?.image[1] ? item?.image[1] : item?.image[0];

    const dispatch = useDispatch()
    const cartList = useSelector((state) => state.cart.cartList)


    // offer implement
    const cat = item?.category_id;
    const subCat = parseInt(item?.subcategory_id);
    const subSubCat = parseInt(item?.subsubcategory_id);

    const offer = data?.offer?.category?.find(o => parseInt(o) === cat || parseInt(o) === subCat || parseInt(o) === subSubCat)
    const offer2 = data?.offer2?.category?.find(o => parseInt(o) === cat || parseInt(o) === subCat || parseInt(o) === subSubCat)


    useEffect(() => {
        setResult(cartList?.find(c => c.id === item.id))

    }, [cartList, item.id])

    const add_to_favourite = (id) => {
        httpReq.post('favourite', { product_id: id })
            .then(({ error, success }) => {
                if (success) {
                    toast(success, { type: "success" });
                }
                if (error) {
                    toast(error, { type: 'error' });
                }
            })
    }

    // const add_to_cart = (item) => {
    //     const cartItem = {
    //         cartId: makeid(100),
    //         price: price,
    //         color: null,
    //         size: null,
    //         additional_price: null,
    //         ...item

    //     }
    //     dispatch(addToCartList({ ...cartItem }))
    // }

    const add_to_cart = (item) => {

        const productPrice = parseInt(getPrice(item?.regular_price, item?.discount_price, item?.discount_type))
        const offerPrice = parseInt(getPrice(productPrice, data?.offer?.discount_amount || data?.offer2?.discount_amount, data?.offer?.discount_type || data?.offer2?.discount_type))


        if (offer || offer2 !== undefined) {

            dispatch(addToCartList({
                cartId: makeid(100),
                price: offerPrice,
                ...item
            }))

        }

        else {
            dispatch(addToCartList({ cartId: makeid(100), price: productPrice, color: null, size: null, additional_price: null, ...item }))

        }

    }

    return (
        <div className="group cursor-pointer">
            <div className="drop-shadow-xl w-full ">
                <figure className='w-full h-[360px] relative overflow-hidden '>
                    <NavLink to={'/product/' + item?.id}>
                        <motion.img whileHover={{
                            scale: 1.25,
                            transition: { duration: 1 },
                        }}
                            exit={{
                                scale: 1,
                                transition: { duration: 1 }

                            }} src={productImg + item?.image[0]} alt="Shoes" className='w-full h-full object-cover group-hover:hidden group-hover:scale-105 transition-all duration-500 ease-linear ' />


                    </NavLink>
                    <NavLink to={'/product/' + item?.id} >
                        <motion.img whileHover={{
                            scale: 1.25,
                            transition: { duration: 1 },
                        }}
                            exit={{
                                scale: 1,
                                transition: { duration: 1 }
                            }} src={productImg + secondImg} alt="Shoes" className='w-full h-full object-cover group-hover:block group-hover:scale-105 transition-all duration-500 ease-linear hidden ' />


                    </NavLink>
                    <div className="absolute hidden gap-2 top-[45%] group-hover:flex justify-center left-0 right-0">
                        <div onClick={() => setOpen(!open)} className="">
                            <HoverIcon text={"Quick View"} >
                                <EyeIcon className='h-5 w-5 text-2xl font-serif font-semibold' />
                            </HoverIcon>
                        </div>
                        <div className="" onClick={() => add_to_favourite(item?.id)}>
                            <HoverIcon text={"Favorite"} >
                                <HeartIcon className='h-5 w-5 text-2xl font-serif font-semibold' />
                            </HoverIcon>
                        </div>
                        {/* <HoverIcon text={"Compaire"} >
                            <BsShuffle className='h-5 w-5 text-2xl font-serif font-semibold' />
                        </HoverIcon> */}

                    </div>
                    {/* <div className="badge badge-secondary absolute top-2 left-3">NEW</div> */}
                    <Badge msg={"New"} />
                    {/* {item.discount_price === '0.00' ? '' : <Badge msg={`${item.discount_type === "fixed" ? "BDT" : ''} ${Math.trunc(item.discount_price)} ${item.discount_type === "percent" ? "%" : ''}`} />} */}

                    {/* {item.discount_price === '0.00' ?  '' : <div className='absolute text-xs px-2 py-1 bg-color text-white top-2 right-2 '>
                <p>- {item.discount_type === "fixed" ? "BDT" : ''} {Math.trunc(item.discount_price)} {item.discount_type === "percent" ? "%" : ''}</p>
            </div>} */}
                </figure>

                <div className="card-body p-4 bg-white">
                    <NavLink to={'/product/' + item?.id}>
                        <p className='text-xs '>{item?.name?.slice(0, 18)} {item?.name?.length > 18 ? "..." : null}</p>
                    </NavLink>
                    <h2 className="tracking-widest font-normal text-sm text-gray-600">
                        <p>{item?.description?.slice(0, 18)} {item?.description?.length > 18 ? "..." : null}</p>
                    </h2>

                    <h6 className='text-lg font-medium '>
                        {item.discount_price === '0.00' ? " " : <p className='line-through text-sm text-[#AD171A]'> <Taka tk={item?.regular_price} /></p>}
                        <Taka tk={price} />
                    </h6>

                    {result?.qty ? <div onClick={() => dispatch(incrementQty(result?.cartId))} className="absolute bottom-6 right-6">
                        <HoverIcon text={"Add to Cart"} >
                            <BsBagPlus className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>
                    </div> : !parseInt(item?.variant) ?
                        <div onClick={() => add_to_cart(item)} className="absolute bottom-6 right-6">
                            <HoverIcon text={"Add to Cart"} >
                                <BsBagPlus className='h-5 w-5 text-2xl font-serif font-bold' />
                            </HoverIcon>
                        </div> : <NavLink to={'/product/' + item?.id} className="absolute bottom-6 right-6">
                            <HoverIcon text={"Add to Cart"} >
                                <BsBagPlus className='h-5 w-5 text-2xl font-serif font-bold' />
                            </HoverIcon>
                        </NavLink>}
                </div>
            </div>

            <QuickView open={open} setOpen={setOpen} >
                <Details data={{ product_id: item?.id }} />
            </QuickView>
        </div>
    );
};

export default NewProductCard;


export const HoverIcon = ({ text, children }) => {
    return (
        <motion.div
            whileHover={{ y: -7 }}
            className="p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 hover:text-white transition-all duration-500  ease-linear">
            {children}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ delay: 1 }}
                className="bg-orange-700 rounded-md shadow-sm pb-3 pt-1 font-semibold absolute -top-9 m-1 -left-8 px-2  invisible child_icon translate-y-6 transition-all duration-500 ease-in-out text-center text-xs text-gray-300">{text}</motion.div>
        </motion.div>
    )
}

