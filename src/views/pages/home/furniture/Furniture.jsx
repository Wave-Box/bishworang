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
import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';


const productImage = [product1, product2, product3, product4, product5, product6, product7, product8]

const Furniture = () => {
    const { decore } = useTheme()
    // const { slider, product } = decore[0]
    return (
        <div className='container'>

            <h5 className='text-center text-3xl font-normal tracking-widest font-serif text-gray-700 my-8'>{decore[0]?.title}</h5>
            <p className='text-center text-lg font-normal my-8 tracking-wide font-sans sm:mx-10'>{decore[0]?.subtitle}</p>
            <SliderOne>
                {decore[0]?.slider.map((dec) => <SwiperSlide key={dec}>
                    <img className=' object-cover  w-full h-full max-h-[700px]' src={bannerImg + dec} alt="" />
                </SwiperSlide>)}
            </SliderOne>
            <div className="my-5 w-full relative">

                <DownSlider prev={"furniturePrev"} next={"furnitureNext"} product={decore[0]?.product} />

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
