import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SliderOne from '../latestSession/SliderOne';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import SliderTwo from '../latestSession/SliderTwo';
import CardFour from '../../../components/card/CardFour';
import { bannerImg } from '../../../../siteSetting/siteUrl';
import { HomePage } from '../../../../services';



const Furniture = () => {
    const { data } = HomePage.GetDecore()
    return (
        <div className="bg-white py-10">
            <div className='container sm:px-0 px-4'>
                <h5 className='text-center text-3xl font-normal tracking-widest font-serif text-gray-700 my-8'>{data?.title}</h5>
                <p className='text-center text-lg font-normal my-8 tracking-wide font-sans sm:mx-10'>{data?.subtitle}</p>
                <SliderOne>
                    {data?.slider.map((dec) => <SwiperSlide key={dec}>
                        <img className=' object-cover  w-full h-full max-h-[700px]' src={bannerImg + dec} alt="" />
                    </SwiperSlide>)}
                </SliderOne>
                <div className="my-5 w-full relative">
                    <DownSlider prev={"furniturePrev"} next={"furnitureNext"} product={data?.product} />
                </div>
            </div>
        </div>
    );
};

export default Furniture;

const DownSlider = ({ product }) => {
    const prev = "furniturPrev"
    const next = "furniturNext"
    return (
        <>
            <ChevronLeftIcon className={prev + " absolute left-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />
            <ChevronRightIcon className={next + " absolute right-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />
            <SliderTwo nextEl={next} prevEl={prev} breakpoint={
                {
                    40: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
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
                        product?.map((p) =>
                            <SwiperSlide key={p?.id}>
                                <CardFour pro={p} />
                            </SwiperSlide>)
                    }
                </div>
            </SliderTwo>
        </>
    );
};
