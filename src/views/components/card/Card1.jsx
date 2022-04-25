import { motion } from 'framer-motion';
import React from 'react';

const Card1 = ({ img }) => {
    return (
        <div className='rounded-3xl border border-orange-200 overflow-hidden'>
            <figure className='m-2 overflow-hidden rounded-xl'>
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
            <h3 className='text-center font-semibold text-black hover:text-orange-400 my-3'>T Shirt</h3>
        </div>
    );
};

export default Card1;