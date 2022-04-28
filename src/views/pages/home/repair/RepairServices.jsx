import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import repair from '../../../../assets/images/shop/banner-4.png'
import { primaryColor } from '../../../../constant';

const RepairServices = () => {
    return (
        <div className="relative my-10 group">
            <img src={repair} alt='' className="w-full object-cover object-center block" />
            <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                <div className="">
                    <h6 className='text-lg font-semibold group-hover:translate-x-2 transition-all duration-300 ease-linear' style={{ color: primaryColor }}>Repair Services</h6>
                    <h4 className='font-semibold  text-black mb-4 text-4xl my-1 pb-2'>We're an Apple <br /> Authorised Service Provider</h4>
                    <div className="inline-block ">
                        <NavLink to={'/'} className='flex gap-1 items-center text-white py-2 px-4 rounded-md text-sm link_hover hover:pr-5 transition-all duration-300 ease-linear' style={{ backgroundColor: primaryColor }}>Learn more <ArrowRightIcon className='h-4 w-4 text-xl font-serif font-bold' /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepairServices;