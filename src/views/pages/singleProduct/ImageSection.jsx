import React, { useState } from 'react';
import ImageZoom from '../../components/utils/ImageZoom'

// import Swiper core and required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { productImg } from '../../../siteSetting/siteUrl';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';


const ImageSection = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                {images?.map((item, index) => <SwiperSlide key={index}>
                    <div className="">
                        <ImageZoom img={productImg + item} />
                    </div>

                </SwiperSlide>)}
            </Swiper>
            <div className="relative">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={1}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper my-3 mx-1"
                    navigation={{
                        prevEl: `.pre`,
                        nextEl: `.nex`,
                    }}
                >

                    {images?.map((item, index) =>
                        <SwiperSlide key={index}>
                            <img src={productImg + item} className={"h-20 w-20"} alt={''} />
                        </SwiperSlide>
                    )}
                </Swiper>
                <ChevronLeftIcon height={22} color={"#fff"} className={'pre absolute -left-5 bottom-8 bg-gray-700 z-10 h-6 w-6 rounded-full'} />
                <ChevronRightIcon height={22} color={"#fff"} className={'nex absolute right-0 bottom-8 bg-gray-700 z-10 h-6 w-6 rounded-full'} />
            </div>
        </>
    );
};

export default ImageSection;