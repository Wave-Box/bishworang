import React from 'react';
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

const Home = () => {
    return (
        <>
            <div className=''>
                <Hero />
                <ProductSection />
                <RepairServices />
                <PopularCategories />
                <Features />
                <LatestSession />
                <Furniture />
                <NewArrivals />
                <TimerSection />
                <FromBlog />
                {/* <ShopToday /> */}
                {/* <Feature /> */}
                <Video />
            </div>
            <Subscribe />
        </>
    );
};

export default Home;