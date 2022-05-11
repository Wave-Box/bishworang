import React from 'react';
import CustomerQuestions from './CustomerQuestions';
import CustomerReviews from './CustomerReviews';

const Reviews = () => {
    return (
        <div className='grid grid-cols-8 gap-4'>
            <div className="col-span-4">
                <CustomerQuestions />
            </div>
            <div className="col-span-4">
                <CustomerReviews />
            </div>

        </div>
    );
};

export default Reviews;