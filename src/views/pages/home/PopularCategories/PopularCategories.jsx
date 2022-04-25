import React from 'react';
import { Card1 } from '../../../components/card';
import tshirt from '../../../../assets/images/product/T-Shirt.jpg'
import { Slider1 } from '../../../components/slider';
import { SwiperSlide } from 'swiper/react';

const PopularCategories = () => {
    return (
        <div className='flex gap-4 my-5'>
            <Slider1>
                {Array.from({ length: 12 }).map((_, idx) => <SwiperSlide key={idx}>
                    <Card1 img={tshirt} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default PopularCategories;