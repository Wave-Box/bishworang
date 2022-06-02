import React from 'react';
import FromBlog from './blog/FromBlog';
import Feature from './feature/Feature';
import Features from './features/Features';
import Furniture from './furniture/Furniture';
import Hero from './hero/Hero';
// import HotDeals from './hotDeals/HotDeals';
import LatestSession from './latestSession/LatestSession';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';
import RepairServices from './repair/RepairServices';
import ShopToday from './shopToday/ShopToday';
import Subscribe from './subscribe/Subscribe';
import TimerSection from './timer/TimerSection';
import Video from './video/Video';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Hero />
                <Feature />
                <ProductSection />
                <RepairServices />
                <PopularCategories />
                <Features />
                <LatestSession />
                <Furniture />
                <NewArrivals />
                <TimerSection />
                <FromBlog />
                <ShopToday />
                <Video />
                {/* <HotDeals /> */}
            </div>
            <Subscribe />
        </>
    );
};

export default Home;