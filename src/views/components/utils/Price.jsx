import React from 'react';
import Taka from './Taka';

const Price = ({ currentPrice, oldPrice }) => {
    return (
        <>
            <h6 className='text-lg font-medium text-center  m-0'>
                <Taka tk={currentPrice} /> <span className='line-through text-sm '>  <Taka tk={oldPrice} /></span>
            </h6>
        </>
    );
};

export default Price;