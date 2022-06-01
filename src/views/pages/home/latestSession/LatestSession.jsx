import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CardFour from '../../../components/card/CardFour';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';

import product1 from '../../../../assets/images/product/product1.jpg'
import product2 from '../../../../assets/images/product/product2.jpg'
import product3 from '../../../../assets/images/product/product3.jpg'
import product4 from '../../../../assets/images/product/product4.jpg'
import product5 from '../../../../assets/images/product/product5.jpg'
import product6 from '../../../../assets/images/product/product6.jpg'
import product7 from '../../../../assets/images/product/product7.jpg'
import product8 from '../../../../assets/images/product/product8.jpg'


const productImage = [product1, product2, product3, product4, product5, product6, product7, product8]


const LatestSession = () => {
    const data = [
        {
            title: "FOR HER",
            short: "Serve the freshest looks for the season with intricately designed apparel & accessories.",
            img: product7,
        },
        {
            title: "FOR HIM",
            short: "Give your wardrobe a spring refresh with the freshest styles of the season.",
            img: product5
        }
    ]


    return (
        <div className='container my-10'>


            <h6 className='text-center font-medium font-sans text-3xl tracking-widest text-gray-700'>LATEST FROM THE SEASON</h6>
            <div className="grid grid-cols-2 gap-8 my-5">
                {
                    data.map((i, id) =>
                        <Single key={id} title={i.title} shortTitle={i.short} img={i.img} />
                    )
                }


            </div>

        </div >
    );
};

export default LatestSession;

const Single = ({ title, shortTitle,img }) => {
    return (
        <div className="col-span-2 sm:col-span-1 ">
            <h5 className='text-center text-2xl font-normal tracking-widest font-serif text-gray-700 my-5 uppercase'>{title}</h5>
            <p className='text-center text-base font-normal my-5 tracking-wide font-sans sm:mx-16 mx-2'>{shortTitle}</p>

            <UpSlider img={img} />

            <div className="my-5 w-full relative">
                <DownSlider prev={"rightDownSliderPrev"} next={"rightDownSliderNext"} />
            </div>
        </div>
    )
}

const UpSlider = ({img}) => {
    return (
        <SliderOne>
            {Array.from({ length: 5 }).map((_, id) => <SwiperSlide key={id}>
                <div className="image relative cursor-pointer">
                    <img className=' object-cover  w-full h-full' style={{ maxWidth: '710px', maxHeight: '600px' }} src={img} alt="" />
                    <div class="overlay"></div>
                </div>
            </SwiperSlide>)}
        </SliderOne>
    )
}

export const DownSlider = ({ prev, next }) => {

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
