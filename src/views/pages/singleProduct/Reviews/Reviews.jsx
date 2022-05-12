import React from 'react';
import AddReview from './AddReview';
import CustomerQuestions from './CustomerQuestions';
import CustomerReviews from './CustomerReviews';

const Reviews = () => {
    return (
        <>
        
        <div className='grid md:grid-cols-8 grid-cols-1 gap-8'>
            <div className="md:col-span-4">
                <CustomerQuestions />
            </div>
            <div className="md:col-span-4">
                <CustomerReviews />
            </div>

        </div>
        <div className="divider"></div>
        <div className='grid md:grid-cols-8 grid-cols-1 gap-4'>
            <div className="md:col-span-4">
            <AddReview />
            </div>
            

        </div>

     
        </>
    );
};

export default Reviews;