import React, { useState } from 'react';
import { Button1 } from '../../../components/button';
import ProductCard from '../../../components/card/ProductCard';



import useTheme from '../../../../hooks/useTheme';
const btn = [
    {
        text: "Featured",

    },
    {
        text: "Popular",

    },
    {
        text: "New Added",

    }
]

const Product_Section = () => {
    const [active, setActive] = useState('Featured')
    const { product, popularProduct, featureProduct } = useTheme()
    return (
        <div className=' py-12'>
            <div className="mx-auto container">
                <div className="flex justify-between items-center my-7 ">
                    <div className="flex justify-center sm:justify-start flex-wrap gap-2">
                        {btn?.map((i) => <Button1 setActive={setActive} text={i.text} active={active} key={i.text} />)}

                    </div>
                </div>
           
            <div className='flex flex-wrap justify-center sm:justify-start  gap-2 sm:gap-2 md:gap-2 lg:gap-9 xl:gap-10'>
                {active === 'New Added' &&
                    product?.slice(0, 8).map((i) => (

                        <ProductCard key={i.id} item={i} />
                    ))
                }
                {active === 'Featured' &&
                    featureProduct?.slice(0, 8).map((i) => (

                        <ProductCard key={i.id} item={i} />
                    ))
                }
                {active === 'Popular' &&
                    popularProduct?.slice(0, 8).map((i) => (

                        <ProductCard key={i.id} item={i} />
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Product_Section;