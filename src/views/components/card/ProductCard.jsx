import React from 'react';
import { HeartIcon, EyeIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"
import './productCard.css'
import { BsShuffle, BsBagPlus } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Badge from '../utils/Badge';
import { productImg } from '../../../siteSetting/siteUrl';
import { getPrice } from '../utils/getPrice';

const ProductCard = ({ item }) => {
   
    const price = getPrice(item?.regular_price, item?.discount_price, item?.discount_type)
    const secondImg = item?.image[1] ? item?.image[1] : item?.image[0];

    return (
        <NavLink to={'/product/' + item?.id} className="group cursor-pointer">
            <div className="drop-shadow-xl w-full ">
                <figure className='w-full h-auto relative overflow-hidden '>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={productImg + item?.image[0]} alt="Shoes" className='w-full h-auto group-hover:hidden group-hover:scale-105 transition-all duration-500 ease-linear ' />
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={productImg + secondImg} alt="Shoes" className='w-full h-auto group-hover:block group-hover:scale-105 transition-all duration-500 ease-linear hidden ' />

                    <div className="absolute hidden gap-2 top-28 group-hover:flex justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} >
                            <EyeIcon className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>
                        <HoverIcon text={"Quick View"} >
                            <HeartIcon className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>
                        <HoverIcon text={"Quick View"} >
                            <BsShuffle className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>

                    </div>
                    {/* <div className="badge badge-secondary absolute top-2 left-3">NEW</div> */}
                    <Badge msg={"New"} />
                </figure>
                <div className="card-body p-4 bg-white">
                    <p className='text-xs '>{item?.name}</p>
                    <h2 className="tracking-widest font-normal text-sm text-gray-600">
                        <p> {item?.description}</p>
                    </h2>

                    <h6 className='text-lg font-semibold text-orange-400'>
                        ${price} <span className='line-through text-sm text-gray-400'> ${item?.regular_price}</span>
                    </h6>

                    <div className="absolute bottom-6 right-6">
                        <HoverIcon text={"Add to Cart"} >
                            <BsBagPlus className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;


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

