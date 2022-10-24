import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Price from '../utils/Price';
import { NavLink } from 'react-router-dom'
import Badge from '../utils/Badge';
import { EyeIcon, HeartIcon } from '@heroicons/react/outline';
import { getPrice } from '../utils/getPrice';
import { HoverIcon } from './ProductCard';
import { productImg } from '../../../siteSetting/siteUrl';
import httpReq from '../../../services/http.service';
import { toast } from 'react-toastify';
import QuickView from './QuickView';
import Details from '../../pages/singleProduct/Details';

const Card2 = ({ item }) => {
    const [open, setOpen] = useState(false)
    const secondImg = item?.image[1] ? item?.image[1] : item?.image[0];
    const add_to_favourite = (id) => {
        httpReq.post('favourite', { product_id: id })
            .then(({ error, success }) => {
                if (success) {
                    toast(success, { type: "success",
                    autoClose: 1000, });
                }
                if (error) {
                    toast(error, { type: 'error',
                    autoClose: 1000, });
                }
            })
    }
    return (
        <div className="cursor-pointer border shadow">
            <div className=" group">
                <figure className='overflow-hidden h-[245px] relative'>
                    <NavLink to={'/product/' + item?.id}>
                        <motion.img whileHover={{
                            scale: 1.25,
                            transition: { duration: 1 },
                        }}
                            exit={{
                                scale: 1,
                                transition: { duration: 1 }
                            }} src={productImg + item?.image[0]} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear w-full h-full' />
                    </NavLink>
                    <NavLink to={'/product/' + item?.id}>
                        <motion.img whileHover={{
                            scale: 1.25,
                            transition: { duration: 1 },
                        }}
                            exit={{
                                scale: 1,
                                transition: { duration: 1 }
                            }} src={productImg + secondImg} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden w-full h-full' />
                    </NavLink>
                    <div className="absolute hidden group-hover:flex  gap-2 top-28  justify-center left-0 right-0">
                        
                        <div onClick={() => setOpen(!open)}>
                        <HoverIcon text={"Quick View"} >
                            <EyeIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                        </HoverIcon>
                        </div>
                        <div onClick={() => add_to_favourite(item?.id)}>
                            <HoverIcon text={"Fevorite"} >
                                <HeartIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                            </HoverIcon>
                        </div>
                        {/* <HoverIcon text={"Quick View"} >
                            <SwitchHorizontalIcon className='h-4 w-4 text-2xl font-serif font-bold' />
                        </HoverIcon> */}
                    </div>
                    <Badge msg={"NEW"} />
                </figure>

            </div>
            <div className="py-2 space-y-0 bg-white">
                <NavLink to={'/product/' + item?.id} className="tracking-wider font-normal text-sm text-gray-600 flex justify-center">
                    {item?.name?.slice(0, 16)} {item?.name?.length > 16 ? "..." : null}
                </NavLink>


                <Price currentPrice={parseInt(getPrice(item?.regular_price, item?.discount_price, item?.discount_type))} />


            </div>
            <QuickView open={open} setOpen={setOpen} >
                <Details item={{ product_id: item?.id }} />
            </QuickView>
        </div>
    );
};

export default Card2;