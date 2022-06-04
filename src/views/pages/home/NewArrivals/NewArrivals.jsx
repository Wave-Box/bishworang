import React from 'react';
import { Card2 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide } from 'swiper/react';
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
const NewArrivals = () => {
    const prev = 'new_Prev'
    const next = 'new_Next'
    return (
        <div className='gap-4 sm:my-10 my-16'>
            <div className="my-5 pt-1 flex justify-between items-center">
                <Title text={'New'} >Arrivals</Title>

                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {productImage.map((img, idx) => <SwiperSlide key={idx}>
                    <Card2 img={img} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default NewArrivals;