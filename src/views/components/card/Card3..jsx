import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { primaryColor } from '../../../constant';
import { ArrowRightIcon } from '@heroicons/react/outline';
const Card3 = ({ offerType, title, link }) => {
    return (
        <>
            <div className="w-44">
                <span className='text-sm'>{offerType}</span>
                <motion.h4 whileHover={{
                    x: 8,
                    transition: { duration: 0.5 },
                }} className='font-semibold text-xl text-black mb-4'>{title}</motion.h4>
                <div className="inline-block ">
                    <NavLink to={'/'} className='flex gap-1 items-center rounded-md text-sm link_hover' style={{ color: primaryColor }}>{link}<ArrowRightIcon className='h-4 w-4 md:text-xl font-serif font-bold' /></NavLink>
                </div>
            </div>
        </>
    );
};

export default Card3;