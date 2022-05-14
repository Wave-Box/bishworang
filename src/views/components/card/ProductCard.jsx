import React from 'react';
import product_1 from '../../../assets/images/product/1.jpg'
import product_2 from '../../../assets/images/product/2.jpg'
import { HeartIcon, EyeIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"
import './productCard.css'
import { BsShuffle, BsBagPlus } from "react-icons/bs";
import Rate from '../utils/Rate';
import { useNavigate } from 'react-router-dom';
const ProductCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/product/1`)} className="cursor-pointer">
            <div className="card shadow-md rounded-2xl group relative lg:w-72 ">
                <figure className='m-2 overflow-hidden rounded-xl'>
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_1} width={280} alt="Shoes" className='group-hover:hidden group-hover:scale-125 transition-all duration-1000 ease-linear rounded-xl' />
                    <motion.img whileHover={{
                        scale: 1.25,
                        transition: { duration: 1 },
                    }}
                        exit={{
                            scale: 1,
                            transition: { duration: 1 }
                        }} src={product_2} width={280} alt="Shoes" className='group-hover:block group-hover:scale-125 transition-all duration-500 ease-linear hidden rounded-xl' />

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
                    <div className="badge badge-secondary absolute top-3 left-5">NEW</div>
                </figure>
                <div className="card-body p-4 gap-1 absolute bottom-0 left-0 right-0 bg-white">
                    <p className='text-xs '>Shirt</p>
                    <h2 className="font-semibold text-base text-black">
                        <a href="/"> Plain Color Pocket Shirts</a>
                    </h2>
                    <p className='flex items-start gap-2 text-sm'>
                        <Rate rating={4.3} />
                        <span style={{ marginTop: '-2px' }}>70%</span>
                    </p>
                    <h6 className='text-lg font-semibold text-orange-400'>
                        $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                    </h6>

                    <div className="absolute bottom-6 right-6">
                        <HoverIcon text={"Add to Cart"} >
                            <BsBagPlus className='h-5 w-5 text-2xl font-serif font-bold' />
                        </HoverIcon>
                    </div>
                </div>
            </div>
        </div>
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

