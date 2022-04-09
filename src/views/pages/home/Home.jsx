import React from 'react';
import TextField from '../../components/form/text/TextField';
import Hero from './hero/Hero';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero />
            <TextField placeHolder={"Your Email"} name="email" />
        </div>
    );
};

export default Home;