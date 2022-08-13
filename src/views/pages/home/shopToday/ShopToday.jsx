import React from 'react';
import today from '../../../../assets/images/shop/banner-8.jpg'

const ShopToday = () => {
    return (
        <div className='relative my-5'>
            
            <img src={today} className="w-full object-cover object-center block" style={{ height: "200px" }} alt="" />
            <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-center items-start">
                <h6 className='font-semibold text-base'>Shop Today’s Deals</h6>
                <h2 className='font-semibold text-3xl text-black'>Happy <span style={{ color: "#F27820" }}>Mother's Day.</span> Big Sale Up to 40%</h2>
            </div>
        </div>
    );
};

export default ShopToday;