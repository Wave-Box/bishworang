import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';

const Arrow = ({ nextEl, prevEl }) => {
    return (
        <div className='flex gap-2'>
            <div className={`${prevEl} p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 text-gray-400 hover:text-white transition-all duration-500  ease-linear`}>
                <ArrowLeftIcon className='h-4 w-4 text-2xl font-serif font-bold' />
            </div>
            <div className={`${nextEl} p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 text-gray-400 hover:text-white transition-all duration-500  ease-linear`}>
                <ArrowRightIcon className='h-4 w-4 text-2xl font-serif font-bold' />
            </div>

        </div>
    );
};

export default Arrow;