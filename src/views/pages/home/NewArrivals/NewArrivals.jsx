import React from 'react';
import { Card2 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
import useTheme from '../../../../hooks/useTheme';


const NewArrivals = () => {
    const { product } = useTheme()
    const prev = 'new_Prev'
    const next = 'new_Next'
    return (
       <div className="container">
         <div className='gap-4 sm:my-10 my-16'>
            <div className="my-5 pt-1 flex justify-between items-center">
                <Title text={'New'} >Arrivals</Title>

                <Arrow prevEl={prev} nextEl={next}></Arrow>
            </div>
            <Slider1
                prevEl={prev}
                nextEl={next}
            >
                {product?.map((item) => <SwiperSlide key={item?.id}>
                    <Card2 item={item} />
                </SwiperSlide>
                )}
            </Slider1>
        </div>
       </div>
    );
};

export default NewArrivals;