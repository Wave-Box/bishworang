import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CardFour from '../../../components/card/CardFour';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';

// import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';
import SetLoaing from '../../../components/Loader/SetLoaing';
import { HomePage } from '../../../../services';



const LatestSession = () => {
    const { data, isLoading } = HomePage.GetSeason()
    return (
        <div className='container my-10 sm:px-0 px-4' >
            <h6 className='text-center font-medium font-sans text-3xl tracking-widest text-gray-700'>LATEST FROM THE SEASON</h6>
            {isLoading ? <SetLoaing /> : <div className="grid grid-cols-2 gap-8 my-5">
                {
                    data?.slice(0, 2).map((s) =>
                        <Single key={s.id} title={s.title} link={s.link} shortTitle={s.subtitle} slider={s?.slider} product={s?.product} />
                    )
                }
            </div>}

        </div >
    );
};

export default LatestSession;

const Single = ({ title, shortTitle, slider, product, link }) => {
    return (
        <div className="col-span-2 sm:col-span-1 ">
            <h5 className='text-center text-2xl font-normal tracking-widest font-serif text-gray-700 my-5 uppercase'>{title}</h5>
            <p className='text-center text-base font-normal my-5 tracking-wide font-sans sm:mx-16 mx-2'>{shortTitle}</p>

            <UpSlider slider={slider} link={link} />

            <div className="my-5 w-full relative">
                <DownSlider prev={"rightDownSliderPrev"} next={"rightDownSliderNext"} product={product} />
            </div>
        </div>
    )
}

const UpSlider = ({ slider, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <SliderOne>
            {slider?.map((slide, id) => <SwiperSlide key={id}>
                <div className="image relative cursor-pointer">
                <img className=' object-cover  w-full h-full' style={{ maxWidth: '710px', maxHeight: '600px' }} src={bannerImg + slide} alt="" />
                    <div className="overlay"></div>
                </div>
            </SwiperSlide>)}
        </SliderOne>
        </a>
    )
}

export const DownSlider = ({ prev, next, product }) => {

    return (
        <>
           {product !== undefined &&  <ChevronLeftIcon className={prev + " absolute left-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />}
           {product !== undefined && <ChevronRightIcon className={next + " absolute right-0 top-24 bg-gray-600 z-10"} height={30} width={18} color={"white"} />}
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
