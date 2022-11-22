import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sliderImg } from "../../../../siteSetting/siteUrl";
// import { HomePage } from "../../../../services";
const Hero = ({data}) => {
    // const { data } = HomePage.GetInfo()
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000
                }}
                spaceBetween={30}
                effect={"fade"}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
                className="mySwiper"
            >
                {data?.map((i, id) => <SwiperSlide key={id}>
                    <a href={i.link} target="_blank" rel="noopener noreferrer"><img alt="" className={"w-full "} src={sliderImg + i.image} /></a>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
};

export default Hero;