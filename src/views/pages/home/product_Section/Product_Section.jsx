import React from 'react';
import { Button1 } from '../../../components/button';
import ProductCard from '../../../components/card/ProductCard';

const Product_Section = () => {
    return (
        <>
            <div className="mx-auto container">
                <div className="flex justify-between items-center my-5 ">
                    <div className="flex gap-2">
                        <Button1 text={"Featured"} active={true} />
                        <Button1 text={"Popular"} />
                        <Button1 text={"New Added"} />
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    Array.from({ length: 8 }).map((_, idx) => (

                        <ProductCard key={idx} />
                    ))
                }
            </div>
        </>
    );
};

export default Product_Section;