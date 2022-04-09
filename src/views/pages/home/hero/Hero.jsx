import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import images 
import banner1 from '../../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../../assets/images/banner/banner4.jpg'

const Hero = () => {
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
                <SwiperSlide>
                    <img alt="" width={"100%"} style={{ height: "70vh" }} src={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" width={"100%"} style={{ height: "70vh" }} src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" width={"100%"} style={{ height: "70vh" }} src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt="" width={"100%"} style={{ height: "70vh" }} src={banner4} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;