import React from 'react';
// import Swiper core and required modules
import { Navigation, A11y, EffectFade, Autoplay, Controller } from 'swiper';

import { Swiper } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const Slider1 = ({ nextEl, prevEl, children }) => {
    return (

        <Swiper
            loop={true}

            autoplay={{
                delay: 3000
            }}
            modules={[Autoplay, A11y, EffectFade, Navigation, Controller]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
            }}
            navigation={{
                prevEl: `.${prevEl}`,
                nextEl: `.${nextEl}`,
            }}
            className="mySwiper"
        >
            {children}
        </Swiper>

    );
};

export default Slider1;