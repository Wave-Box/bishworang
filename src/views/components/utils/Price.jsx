import React from 'react';

const Price = ({currentPrice,oldPrice}) => {
    return (
        <>
            <h6 className='text-lg font-semibold text-center text-orange-400 m-0'>
                    ${currentPrice} <span className='line-through text-sm text-gray-400'> ${oldPrice}</span>
                </h6>
        </>
    );
};

export default Price;