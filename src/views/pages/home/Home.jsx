import React, { Suspense } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderImg } from '../../../siteSetting/siteUrl';

// import { sliderImg } from "../../../../siteSetting/siteUrl";

import FromBlog from './blog/FromBlog';
import Features from './features/Features';
import Furniture from './furniture/Furniture';
import Hero from './hero/Hero';
import LatestSession from './latestSession/LatestSession';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';
import RepairServices from './repair/RepairServices';
import Subscribe from './subscribe/Subscribe';
import TimerSection from './timer/TimerSection';
import Video from './video/Video';

// const FromBlog = React.lazy(() => import('./blog/FromBlog'));
// const Features = React.lazy(() => import('./features/Features'));
// const Furniture = React.lazy(() => import('./furniture/Furniture'));
// const Hero = React.lazy(() => import('./hero/Hero'));
// const LatestSession = React.lazy(() => import('./latestSession/LatestSession'));
// const NewArrivals = React.lazy(() => import('./NewArrivals/NewArrivals'));
// const PopularCategories = React.lazy(() => import('./PopularCategories/PopularCategories'));
// const ProductSection = React.lazy(() => import('./product_Section/Product_Section'));
// const RepairServices = React.lazy(() => import('./repair/RepairServices'));
// const Subscribe = React.lazy(() => import('./subscribe/Subscribe'));
// const TimerSection = React.lazy(() => import('./timer/TimerSection'));
// const Video = React.lazy(() => import('./video/Video'));


const Home = ({data}) => {
    return (
        <>
            
                <Hero data={data.slider} />
                {/* <Swiper
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
                    {data?.slider?.map((i, id) => <SwiperSlide key={id}>
                        
                        <a href={i.link} target="_blank" rel="noopener noreferrer"><img alt="" className={"w-full "} src={sliderImg + i.image} /></a>
                    </SwiperSlide>)}

                </Swiper> */}
           
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <ProductSection data={data.product.slice(0,8)} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <RepairServices data={data.singleBanner} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <PopularCategories data={data.category} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <Features data={data.banner} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <LatestSession/>
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <Furniture/>
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <NewArrivals data={data.product.slice(0,15)} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <TimerSection data1={data.offer} data2={data.offer2} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <FromBlog/>
            {/* </Suspense> */}
            {/* <ShopToday /> */}
            {/* <Feature /> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <Video data={data.settings} />
            {/* </Suspense> */}
            {/* <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}> */}
                <Subscribe />
            {/* </Suspense> */}
        </>
    );
};

export default Home;