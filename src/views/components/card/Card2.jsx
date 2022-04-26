import React from 'react';
import { motion } from 'framer-motion';
import { HoverIcon } from './ProductCard';

import product_1 from '../../../assets/images/product/3.jpg'
import product_2 from '../../../assets/images/product/4.jpg'

const Card2 = ({ img }) => {
    return (
        <div className="">
            <div class="card  rounded-2xl group relative border">
                <figure className='overflow-hidden rounded-xl'>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_1} width={290} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear rounded-xl' />
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_2} width={290} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden rounded-xl' />

                    <div className="absolute hidden group-hover:flex  gap-2 top-28  justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} />
                        <HoverIcon text={'Add to Wishlist'} />
                        <HoverIcon text={'Compare'} />
                    </div>
                    <div class="badge badge-secondary absolute top-3 left-5">NEW</div>
                </figure>

            </div>
            <div class="card-body p-4 gap-1 bg-white">
                <h2 class="card-title text-black text-center">
                    Plain Color Pocket
                </h2>
                <h6 className='text-lg font-semibold text-center text-orange-400'>
                    $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                </h6>


            </div>
        </div>
    );
};

export default Card2;