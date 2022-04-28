import React from 'react';
import { Card1 } from '../../../components/card';
import tshirt from '../../../../assets/images/product/T-Shirt.jpg'
import { Slider1 } from '../../../components/slider';
import { SwiperSlide, } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';

const PopularCategories = () => {
    const prev = 'cat_Prev'
    const next = 'cat_Next'
    return (
        <div className='gap-4 my-5'>
            <div className="my-5 pt-1 flex justify-between items-center">
                <Title text={'Popular'} >Categories</Title>
                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {Array.from({ length: 12 }).map((_, idx) => <SwiperSlide key={idx}>
                    <Card1 img={tshirt} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default PopularCategories;