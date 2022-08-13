import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Controller, Pagination } from 'swiper';

import { Swiper } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


export const SliderOne = ({ children }) => {
    const pagination = {
        clickable: true
       
      };
    return (
        <Swiper
            loop={true}
            pagination={pagination}
            autoplay={{
                delay: 3000
            }}
            modules={[Autoplay, A11y, Controller, Pagination]}

            className="mySwiper"
        >
            {children}
        </Swiper>
    );
};

export default SliderOne;