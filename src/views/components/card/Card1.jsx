import { motion } from 'framer-motion';
import React from 'react';

const Card1 = ({ img }) => {
    return (
        <div className='drop-shadow-xl sm:mb-10 overflow-hidden bg-white mx-8 sm:mx-o'>
            <figure className='m-2 overflow-hidden '>
                <motion.img
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        scale: 1,
                        transition: { duration: 0.5 }
                    }}
                    src={img} alt="" className='' />
            </figure>
            <h3 className='text-center font-normal text-sm text-gray-400 tracking-wider hover:text-orange-400 my-3'>T Shirt</h3>
        </div>
    );
};

export default Card1;