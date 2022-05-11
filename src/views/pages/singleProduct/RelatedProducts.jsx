import React from 'react';
import { ProductCard } from '../../components/card';
import Title from './Reviews/Title';

const RelatedProducts = () => {
    return (
        <div className='my-7'>
            <div className="my-3">
                <Title text={"Related products"} />
            </div>
            <div className="grid grid-cols-4 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
};

export default RelatedProducts;