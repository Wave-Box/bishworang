import React, { useState } from 'react';
import single from '../../../assets/images/product/1.jpg'
import single2 from '../../../assets/images/product/2.jpg'
import single3 from '../../../assets/images/product/3.jpg'
import ImageZoom from '../../components/utils/ImageZoom'

// import Swiper core and required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const ImageSection = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const imagess = [single, single2, single3, single, single2, single3, single2, single]
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
                {imagess.map((item, index) => <SwiperSlide key={index}>
                    <div className="w-full">
                    <ImageZoom img={item} />
                    </div>
                    {/* <img src={item} width={475} alt={''} /> */}
                </SwiperSlide>)}
            </Swiper>
            <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            onNavigationHide={true}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={1}
                slidesPerView={5}
                freeMode={true}
                navigation={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper my-3 mx-1"
            >
                {imagess.map((item, index) => <SwiperSlide key={index}>
                    <img src={item} width={94} alt={''} />
                </SwiperSlide>)}
            </Swiper>
        </>
    );
};

export default ImageSection;