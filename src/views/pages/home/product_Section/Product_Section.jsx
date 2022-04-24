import React from 'react';
import ProductCard from '../../../components/card/ProductCard';

const Product_Section = () => {
    return (
        <div className='grid md:grid-cols-4 gap-4'>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default Product_Section;