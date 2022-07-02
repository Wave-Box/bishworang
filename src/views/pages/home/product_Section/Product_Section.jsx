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
            <div className="mx-auto container px-4 sm:px-0">
                <div className="flex justify-between items-center my-7 ">
                    <div className="flex justify-center sm:justify-start flex-wrap gap-2">
                        {btn?.map((i) => <Button1 setActive={setActive} text={i.text} active={active} key={i.text} />)}

                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
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