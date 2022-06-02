import React from 'react';
import { motion } from 'framer-motion';
import { HoverIcon } from './ProductCard';

import product_2 from '../../../assets/images/product/4.jpg'
import Price from '../utils/Price';
import { useNavigate } from 'react-router-dom'
import Badge from '../utils/Badge';
import { EyeIcon, HeartIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';

const Card2 = ({ img }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/product/1`)} className="cursor-pointer border  shadow">
            <div className="  group relative">
                <figure className='overflow-hidden'>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={img} width={200} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear ' />
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_2} width={194} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden ' />

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
                    <Badge msg={"NEW"}/>
                </figure>

            </div>
            <div className="my-2 space-y-0 bg-white">
                <p className="tracking-widest font-normal text-sm text-gray-600 text-center">
                    Plain Color Pocket
                </p>
                {/* <div className="text-center">
                    <Rate rating={3.6} />
                </div> */}

                <Price currentPrice={28.80} oldPrice={23.66} />


            </div>
        </div>
    );
};

export default Card2;