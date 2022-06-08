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

import useTheme from "../../../../hooks/useTheme";
import { sliderImg } from "../../../../siteSetting/siteUrl";

const Hero = () => {

    const { slider } = useTheme()
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
                {slider?.map((i, id) => <SwiperSlide key={id}>
                    <img alt="" width={"100%"} style={{ height: "70vh" }} src={sliderImg + i.image} />
                </SwiperSlide>)}

            </Swiper>
        </>
    );
};

export default Hero;