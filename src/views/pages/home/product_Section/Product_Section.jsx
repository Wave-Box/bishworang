import React from 'react';
import { Button1 } from '../../../components/button';
import ProductCard from '../../../components/card/ProductCard';



import useTheme from '../../../../hooks/useTheme';


const Product_Section = () => {

    const { product } = useTheme()
    return (
        <>
            <div className="mx-auto container">
                <div className="flex justify-between items-center my-7 ">
                    <div className="flex justify-center sm:justify-start flex-wrap gap-2">
                        <Button1 text={"Featured"} active={true} />
                        <Button1 text={"Popular"} />
                        <Button1 text={"New Added"} />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center sm:justify-start  gap-4'>
                {
                    product?.slice(0,8).map((i) => (

                        <ProductCard key={i.id} item={i} />
                    ))
                }
            </div>
        </>
    );
};

export default Product_Section;