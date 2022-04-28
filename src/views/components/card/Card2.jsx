import React from 'react';
import { motion } from 'framer-motion';
import { HoverIcon } from './ProductCard';

import product_1 from '../../../assets/images/product/3.jpg'
import product_2 from '../../../assets/images/product/4.jpg'
import Rate from '../utils/Rate';

const Card2 = ({ img }) => {
    return (
        <div className="">
            <div className="card  rounded-2xl group relative">
                <figure className='overflow-hidden rounded-xl'>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_1} width={194} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear rounded-xl' />
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_2} width={194} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden rounded-xl' />

                    <div className="absolute hidden group-hover:flex  gap-2 top-28  justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} />
                        <HoverIcon text={'Add to Wishlist'} />
                        <HoverIcon text={'Compare'} />
                    </div>
                    <div className="badge badge-secondary absolute top-3 left-5 text-xs">NEW</div>
                </figure>

            </div>
            <div className="my-2 space-y-0 bg-white">
                <h2 className="font-semibold text-base text-black text-center">
                    Plain Color Pocket
                </h2>
                <div className="text-center">
                    <Rate rating={3.6} />
                </div>
                <h6 className='text-lg font-semibold text-center text-orange-400 m-0'>
                    $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                </h6>


            </div>
        </div>
    );
};

export default Card2;