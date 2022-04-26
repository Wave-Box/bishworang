import React from 'react';
import FromBlog from './blog/FromBlog';
import Feature from './feature/Feature';
import Hero from './hero/Hero';
import HotDeals from './hotDeals/HotDeals';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';
import Subscribe from './subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Hero />
                <Feature />
                <ProductSection />
                <PopularCategories />
                <NewArrivals />
                <HotDeals />
                <FromBlog />
            </div>
            <Subscribe />
        </>
    );
};

export default Home;