import React from 'react';
import { motion } from 'framer-motion';

import Price from '../utils/Price';
import { NavLink } from 'react-router-dom'
import Badge from '../utils/Badge';
import { EyeIcon, HeartIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';
import { getPrice } from '../utils/getPrice';
import { HoverIcon } from './ProductCard';
import { productImg } from '../../../siteSetting/siteUrl';

const Card2 = ({ item }) => {
    console.log(item?.image[1]);
    const secondImg = item?.image[1] ? item?.image[1] : item?.image[0];
    return (
        <NavLink to={'/product/' + item?.id} className="cursor-pointer border shadow">
            <div className=" group">
                <figure className='overflow-hidden relative'>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={productImg + item?.image[0]} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear w-full h-auto' />

                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={productImg + secondImg} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden w-full h-auto' />

                    <div className="absolute hidden group-hover:flex  gap-2 top-28  justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} >
                            <EyeIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                        </HoverIcon>
                        <HoverIcon text={"Quick View"} >
                            <HeartIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                        </HoverIcon>
                        <HoverIcon text={"Quick View"} >
                            <SwitchHorizontalIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                        </HoverIcon>
                    </div>
                    <Badge msg={"NEW"} />
                </figure>

            </div>
            <div className="py-2 space-y-0 bg-white">
                <p className="tracking-widest font-normal text-sm text-gray-600 text-center">
                    {item?.name}
                </p>


                <Price currentPrice={parseInt(getPrice(item?.regular_price, item?.discount_price, item?.discount_type))} oldPrice={item?.regular_price} />


            </div>
        </NavLink>
    );
};

export default Card2;