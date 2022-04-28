import React from 'react';
import banner1 from '../../../../assets/images/shop/banner-1.png'
import banner2 from '../../../../assets/images/shop/banner-2.png'
import banner3 from '../../../../assets/images/shop/banner-3.png'
import { motion } from 'framer-motion';

const Features = () => {
    return (
        <div className="py-5">
            <div className='grid sm:grid-cols-3 gap-6'>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner1} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card />
                    </div>
                </div>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner2} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card />
                    </div>
                </div>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner3} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;

export const Card = () => {
    return (
        <div className=" w-44 ">
            <span className='text-sm'>Big Offer</span>
            <motion.h4 whileHover={{
                x: 8,
                transition: { duration: 0.5 },
            }} className='font-semibold text-xl text-black mb-4'>Save 20% on Women's socks</motion.h4>
            <a href="/" className='text-sm'>Shop Now </a>
        </div>
    )
}