import { motion } from 'framer-motion';
import React from 'react';
import { catImg } from '../../../siteSetting/siteUrl';

const Card1 = ({ cat }) => {
    return (
        <div className='drop-shadow-xl sm:mb-10 overflow-hidden bg-white  sm:mx-o'>
            <figure className=' overflow-hidden '>
                <motion.img
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        scale: 1,
                        transition: { duration: 0.5 }
                    }}
                    src={catImg + cat?.banner} alt="" className=' w-52 h-52' />
            </figure>
            <h3 className='text-center font-normal text-sm text-gray-400 tracking-wider hover:text-orange-400 my-3'>{cat?.name}</h3>
        </div>
    );
};

export default Card1;