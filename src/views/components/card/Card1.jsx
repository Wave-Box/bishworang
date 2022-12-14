import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { catImg } from '../../../siteSetting/siteUrl';

const Card1 = ({ cat }) => {
    return (
        <NavLink to={'/category/' + cat?.id} className='drop-shadow-xl sm:mb-10 overflow-hidden bg-white  sm:mx-o'>
            <figure className=' overflow-hidden flex justify-center'>
                <motion.img
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                    }}
                    exit={{
                        scale: 1,
                        transition: { duration: 0.5 }
                    }}
                    src={catImg + cat?.banner} alt="" className=' w-32 h-32 sm:w-52 sm:h-52' />
            </figure>
            <h3 className='text-center font-normal text-sm text-gray-400 tracking-wider hover:text-[#AD171A] my-3'>{cat?.name}</h3>
        </NavLink>
    );
};

export default Card1;