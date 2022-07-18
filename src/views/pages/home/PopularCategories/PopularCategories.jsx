import React from 'react';
import { Card1 } from '../../../components/card';
import { Slider1 } from '../../../components/slider';
import { SwiperSlide, } from 'swiper/react';
import Title from '../../../components/utils/Title';
import Arrow from '../../../components/utils/Arrow';
// import useTheme from '../../../../hooks/useTheme';
import { useQuery } from 'react-query'
import SetLoaing from '../../../components/Loader/SetLoaing';
import httpReq from '../../../../services/http.service';

const PopularCategories = () => {
    // const { category } = useTheme()
    const { isLoading, data } = useQuery(['allfrontendcontent'], () => httpReq.get('allfrontendcontent'))
    const prev = 'cat_Prev'
    const next = 'cat_Next'
    return (
        <div className="bg-white">
            <div className='gap-4 py-5 container px-4 sm:px-0'>
                <div className="my-5 pt-1 flex justify-between items-center">
                    <Title text={'Popular'} >Categories</Title>
                    <Arrow prevEl={prev} nextEl={next}></Arrow>
                </div>
               {isLoading ? <SetLoaing /> : <Slider1
                    prevEl={prev}
                    nextEl={next}
                >
                    {data?.category?.map((cat) => <SwiperSlide key={cat?.id}>
                        <Card1 cat={cat} />
                    </SwiperSlide>
                    )}
                </Slider1>}
            </div>
        </div>
    );
};

export default PopularCategories;