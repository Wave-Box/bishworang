import React from 'react';
import { motion } from 'framer-motion';

const Subscribe = () => {
    return (
        <div className="" style={{ backgroundColor: '#F27820' }}>
            <div className='grid grid-cols-2 lg:grid-cols-3 py-10  items-center container mx-auto'>
                <div className="col-span-2 md:col-span-1  flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className='text-xl text-black font-semibold'>Sign up to Newsletter</h2>
                </div>
                <div className="hidden md:block md:col-span-1 ">
                    <p className='font-semibold text-black'>...and receive $25 coupon for first shopping.</p>
                </div>
                <form className="col-span-2 lg:col-span-1 ">
                    <input type="text" placeholder='Enter Your Email' className='bg-white text-gray-400  rounded-l-md py-3 px-4 w-3/4 focus:outline-0 hover:border-0 placeholder:text-gray-400' />
                    <motion.input whileHover={{ backgroundColor: '#F27820' }} type="submit" value={"Subscribe"} className='bg-black text-gray-200 rounded-r-md py-3 px-4 text-semibold' />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;