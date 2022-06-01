import React from 'react';
import Taka from '../utils/Taka';

const CardFour = ({img}) => {
    return (
        <div className="w-full drop-shadow-md mb-3">
        <div className="image relative cursor-pointer">
            <img src={img} className={"w-full h-52 cursor-pointer hover:bg-gray-900"} alt="" />
            <div class="overlay"></div>
        </div>
        <div className="bg-white px-1 py-2">
            <h6 className=' text-left tracking-widest text-sm'>Silk Hand BLock Painted Sari</h6>
            <p className='tracking-widest'> <Taka tk={1400} /></p>
        </div>
    </div>
    );
};

export default CardFour;