import React from 'react';
import Rate from '../../../components/utils/Rate';
import Title from './Title';
import './single.css'
// import { primaryColor } from '../../../../constant';
import Percentage from '../../../components/utils/Percentage';

const CustomerReviews = () => {
    return (
        <div>
            <Title text={'Customer reviews'} />
            <div className="flex justify-start items-center gap-2 "><p className='text-xl'><Rate rating={4.8} /></p> <p className='text-black font-semibold text-sm'>{'4.8 out of 5'}</p></div>
            <div className="space-y-3">
                <Percentage star={5} value={90} />
                <Percentage star={4} value={80} />
                <Percentage star={3} value={70} />
                <Percentage star={2} value={30} />
                <Percentage star={1} value={10} />
            </div>

            <p className='text-sm mt-6'>How are ratings calculated?</p>
        </div>
    );
};

export default CustomerReviews;