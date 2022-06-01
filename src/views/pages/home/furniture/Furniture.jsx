import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderOne from '../latestSession/SliderOne';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import SliderTwo from '../latestSession/SliderTwo';
import CardFour from '../../../components/card/CardFour';
import product1 from '../../../../assets/images/product/product1.jpg'
import product2 from '../../../../assets/images/product/product2.jpg'
import product3 from '../../../../assets/images/product/product3.jpg'
import product4 from '../../../../assets/images/product/product4.jpg'
import product5 from '../../../../assets/images/product/product5.jpg'
import product6 from '../../../../assets/images/product/product6.jpg'
import product7 from '../../../../assets/images/product/product7.jpg'
import product8 from '../../../../assets/images/product/product8.jpg'


const productImage = [product1, product2, product3, product4, product5, product6, product7, product8]

const Furniture = () => {
    return (
        <div className='container'>

            <h5 className='text-center text-3xl font-normal tracking-widest font-serif text-gray-700 my-8'>HOME DECOR & FURNITURE</h5>
            <p className='text-center text-lg font-normal my-8 tracking-wide font-sans sm:mx-10'>Get your home ready for the season of spring in mellow hues & lightweight fabrics
            </p>
            <SliderOne>
                {Array.from({ length: 5 }).map((_, id) => <SwiperSlide key={id}>
                    <img className=' object-cover  w-full h-full' src={"https://www.fabindia.com/file/general/hp-hdf-24may22-4.jpg"} alt="" />
                </SwiperSlide>)}
            </SliderOne>
            <div className="my-5 w-full relative">

                <DownSlider prev={"furniturePrev"} next={"furnitureNext"} />

            </div>


        </div>
    );
};

export default Furniture;

const DownSlider = () => {
    const prev = "furniturPrev"
    const next = "furniturNext"
    return (
        <>
            <ChevronLeftIcon className={prev + " absolute left-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />
            <ChevronRightIcon className={next + " absolute right-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />
            <SliderTwo nextEl={next} prevEl={prev} breakpoint={
                {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    }
                }
            }>
                <div className="grid grid-cols-3 gap-8">
                    {
                     productImage.map((i, id) =>
                            <SwiperSlide key={id}>
                                <CardFour img={i} />
                            </SwiperSlide>)
                    }
                </div>
            </SliderTwo>
        </>
    );
};
