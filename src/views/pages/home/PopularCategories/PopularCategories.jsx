import React from 'react';
import { Card1 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide, } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
import useTheme from '../../../../hooks/useTheme';


const PopularCategories = () => {
    const { category } = useTheme()
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
                    {category?.map((cat) => <SwiperSlide key={cat?.id}>
                        <Card1 cat={cat} />
                    </SwiperSlide>
                    )}
            </Slider1>
        </div>
    );
};

export default PopularCategories;