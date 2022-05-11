import React from 'react';
import banner1 from '../../../../assets/images/shop/banner-1.png'
import banner2 from '../../../../assets/images/shop/banner-2.png'
import banner3 from '../../../../assets/images/shop/banner-3.png'
import Card3 from '../../../components/card/Card3.';

const Features = () => {
    return (
        <div className="py-5">
            <div className='grid sm:grid-cols-3 gap-6'>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner1} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                    </div>
                </div>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner2} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                    </div>
                </div>
                <div className="relative">
                    <img alt="gallery" className="w-full object-cover object-center block" src={banner3} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;
