import React from 'react';
import Feature from './feature/Feature';
import Hero from './hero/Hero';
import NewArrivals from './NewArrivals/NewArrivals';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero />
            <Feature />
            <ProductSection />
            <PopularCategories />
            <NewArrivals />
        </div>
    );
};

export default Home;