import React from 'react';
import { Card2 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
import { HomePage } from '../../../../services';


const NewArrivals = () => {
    const { data } = HomePage.GetInfo()
    const prev = 'new_Prev'
    const next = 'new_Next'
    return (
       <div className="container my-12 sm:px-0 px-4">
            <div className="flex justify-between items-center">
                <Title text={'New'} >Arrivals</Title>

                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {data?.product?.map((item) => 
                <SwiperSlide key={item?.id}>
                    <Card2 item={item} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
    );
};

export default NewArrivals;