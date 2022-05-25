import React from 'react';
import { Button1 } from '../../../components/button';
import ProductCard from '../../../components/card/ProductCard';



import product1 from '../../../../assets/images/product/product1.jpg'
import product2 from '../../../../assets/images/product/product2.jpg'
import product3 from '../../../../assets/images/product/product3.jpg'
import product4 from '../../../../assets/images/product/product4.jpg'
import product5 from '../../../../assets/images/product/product5.jpg'
import product6 from '../../../../assets/images/product/product6.jpg'
import product7 from '../../../../assets/images/product/product7.jpg'
import product8 from '../../../../assets/images/product/product8.jpg'


const productImage = [product1, product2, product3, product4, product5, product6, product7, product8]
const Product_Section = () => {
    return (
        <>
            <div className="mx-auto container">
                <div className="flex justify-between items-center my-7 ">
                    <div className="flex gap-2">
                        <Button1 text={"Featured"} active={true} />
                        <Button1 text={"Popular"} />
                        <Button1 text={"New Added"} />
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    productImage.map((img, idx) => (

                        <ProductCard key={idx} img={img} />
                    ))
                }
            </div>
        </>
    );
};

export default Product_Section;