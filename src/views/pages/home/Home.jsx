import React from 'react';
import FromBlog from './blog/FromBlog';
import Feature from './feature/Feature';
import Features from './features/Features';
import Hero from './hero/Hero';
import HotDeals from './hotDeals/HotDeals';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';
import RepairServices from './repair/RepairServices';
import ShopToday from './shopToday/ShopToday';
import Subscribe from './subscribe/Subscribe';
import TimerSection from './timer/TimerSection';

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
                <NewArrivals />
                <TimerSection />
                <FromBlog />
                <ShopToday />
                <HotDeals />
            </div>
            <Subscribe />
        </>
    );
};

export default Home;