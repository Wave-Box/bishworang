import React from 'react';
import product_1 from '../../../assets/images/product/1.jpg'
import product_2 from '../../../assets/images/product/2.jpg'
import { HeartIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"
import './productCard.css'

const ProductCard = () => {
    return (
        <div className="">
            <div class="card shadow-xl rounded-xl group relative w-80 border border-orange-200">
                <figure className='m-2 overflow-hidden rounded-xl'>
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

                    <div className="absolute  gap-2 top-28 flex justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} />
                        <HoverIcon text={'Add to Wishlist'} />
                        <HoverIcon text={'Compare'} />
                    </div>
                    <div class="badge badge-secondary absolute top-3 left-5">NEW</div>
                </figure>
                <div class="card-body p-4 gap-1 absolute bottom-0 left-0 right-0 bg-white">
                    <p className='text-xs '>Shirt</p>
                    <h2 class="card-title text-black">
                        Plain Color Pocket Shirts
                    </h2>
                    <p>70%</p>
                    <h6 className='text-lg font-semibold  text-orange-400'>
                        $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                    </h6>

                    <div className="absolute bottom-6 right-6">
                        <HoverIcon text={"Add to Cart"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


export const HoverIcon = ({ text }) => {
    return (
        <motion.div
            whileHover={{ y: -7 }}
            className="p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 hover:text-white transition-all duration-500 ease-in-out">
            <HeartIcon className='h-5 w-5 text-2xl font-serif font-bold' />
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ delay: 1 }}
                className="bg-orange-700 rounded-md shadow-sm pb-3 pt-1 font-semibold absolute -top-9 m-1 -left-8 px-2  invisible child_icon translate-y-6 transition-all duration-500 ease-in-out text-center text-xs text-gray-300">{text}</motion.div>
        </motion.div>
    )
}
