import React from 'react';
import TextField from '../../components/form/text/TextField';
import Feature from './feature/Feature';
import Hero from './hero/Hero';
import ProductSection from './product_Section/Product_Section';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero />
            <Feature />
            <ProductSection />
            <TextField placeHolder={"Your Email"} name="email" />
        </div>
    );
};

export default Home;