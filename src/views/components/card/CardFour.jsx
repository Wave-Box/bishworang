import React from 'react';
import { productImg } from '../../../siteSetting/siteUrl';
import { getPrice } from '../utils/getPrice';
import Taka from '../utils/Taka';

const CardFour = ({ pro }) => {
    return (
        <div className="w-full drop-shadow-md mb-3">
            <div className="image relative cursor-pointer">
                <img src={productImg + pro?.image[0]} className={"w-full h-52 cursor-pointer hover:bg-gray-900"} alt="" />
                <div className="overlay"></div>
            </div>
            <div className="bg-white px-1 py-2">
                <h6 className=' text-left tracking-widest text-sm'>{pro?.name}</h6>
                <p className='tracking-widest'> <Taka tk={getPrice(pro?.regular_price, pro?.discount_price, pro?.discount_type)} /></p>
            </div>
        </div>
    );
};

export default CardFour;