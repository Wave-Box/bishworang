import React from 'react';
import Feature from './feature/Feature';
import Hero from './hero/Hero';
import PopularCategories from './PopularCategories/PopularCategories';
import ProductSection from './product_Section/Product_Section';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero />
            <Feature />
            <ProductSection />
            <PopularCategories />
        </div>
    );
};

export default Home;