import React, { useEffect, useState } from 'react';
import httpReq from '../../../../services/http.service';
// import AddReview from './AddReview';
import CustomerQuestions from './CustomerQuestions';
// import CustomerReviews from './CustomerReviews';

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        httpReq.post('get/review', { product_id: id })
            .then(res => {
                
                if (res.error) {
                    return
                }
                setReviews(res)
            })
        return
    }, [id])

    return (
        <>

            <div className='grid md:grid-cols-8 grid-cols-1 gap-8'>
                <div className="md:col-span-4">
                    {reviews.length === 0 ? 
                    <div className='flex flex-1 justify-start items-center'><h3 className='text-xl font-sans font-bold'>No Found Review</h3></div> : <CustomerQuestions reviews={reviews} />}
                </div>
                <div className="md:col-span-4">
                    {/* <CustomerReviews /> */}
                </div>

            </div>
            {/* <div className="divider"></div>
            <div className='grid md:grid-cols-8 grid-cols-1 gap-4'>
                <div className="md:col-span-4">
                    <AddReview />
                </div>


            </div> */}


        </>
    );
};

export default Reviews;