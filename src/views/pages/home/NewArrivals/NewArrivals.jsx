import React from 'react';
import { Card2 } from '../../../components/card';
import tshirt from '../../../../assets/images/product/T-Shirt.jpg'
import { Slider1 } from '../../../components/slider';
import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
const NewArrivals = () => {
    const prev = 'new_Prev'
    const next = 'new_Next'
    return (
        <div className='gap-4 my-5'>
            <div className="my-5 pt-1 flex justify-between items-center">
                <Title text={'New'} >Arrivals</Title>

                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {Array.from({ length: 12 }).map((_, idx) => <SwiperSlide key={idx}>
                    <Card2 img={tshirt} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default NewArrivals;