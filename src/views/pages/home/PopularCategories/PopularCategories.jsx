import React from 'react';
import { Card1 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide, } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
import product1 from '../../../../assets/images/product/product1.jpg'
import product2 from '../../../../assets/images/product/product2.jpg'
import product3 from '../../../../assets/images/product/product3.jpg'
import product4 from '../../../../assets/images/product/product4.jpg'
import product5 from '../../../../assets/images/product/product5.jpg'
import product6 from '../../../../assets/images/product/product6.jpg'
import product7 from '../../../../assets/images/product/product7.jpg'
import product8 from '../../../../assets/images/product/product8.jpg'


const productImage = [product1, product2, product3, product4, product5, product6, product7, product8]

const PopularCategories = () => {
    const prev = 'cat_Prev'
    const next = 'cat_Next'
    return (
        <div className='gap-4 py-5'>
            <div className="my-5 pt-1 flex justify-between items-center">
                <Title text={'Popular'} >Categories</Title>
                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {productImage.map((img, idx) => <SwiperSlide key={idx}>
                    <Card1 img={img} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default PopularCategories;