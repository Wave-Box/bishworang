import React from 'react';
import shoes from '../../../../assets/images/shop/banner-10.jpg'
import card_img from '../../../../assets/images/shop/thumbnail-1.jpg'
const HotDeals = () => {
    return (
        <div className="grid md:grid-cols-4 gap-4 my-5">
            <div className="relative">
                <img src={shoes} alt="" className="w-full object-cover object-center block" />
                <div className="absolute top-0 right-0 bottom-0 left-10 flex  justify-start items-center">
                    <div className="text-black">
                        <span>Big Offer</span>
                        <h4>Save 20% on Women's socks</h4>
                        <a href="/">Shop Now </a>
                    </div>
                </div>
            </div>
            <Deals />
            <Deals />
            <Deals />


        </div>
    );
};

export default HotDeals;


const Deals = () => {
    return (
        <div className="">
            <h4>Deals & Outlet</h4>
            <div className="space-y-8">
                {
                    Array.from({ length: 3 }).map((_, id) => <Card key={id} />)
                }
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className="flex gap-4 justify-start items-center">
            <div className="">
                <img src={card_img} width={86} height={86} alt="" />
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h2 className="card-title text-black text-center">
                    Plain Color Pocket
                </h2>
                <h6 className='text-lg font-semibold text-center text-orange-400'>
                    $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                </h6>
            </div>
        </div>
    )
}