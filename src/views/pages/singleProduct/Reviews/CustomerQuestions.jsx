import React from 'react';
import Title from './Title';
import { profileImg } from '../../../../siteSetting/siteUrl';

const CustomerQuestions = ({ reviews }) => {
    return (
        <div>
            <Title text={"Customer questions & answers"} />
            {reviews?.map((r) => <UserReview review={r} />)}
        </div>
    );
};

export default CustomerQuestions;



const UserReview = ({ review }) => {
    return (
        <div className="flex items-center  border-b pb-5 my-4 border-gray-200 sm:flex-row flex-col">
            <div className="flex flex-col  items-center sm:w-32 sm:h-32 h-20 w-20 sm:mr-10">

                <div className="avatar">
                    <div className="w-20 h-20 rounded-full">
                        <img src={profileImg + review?.image} alt='' />
                    </div>
                </div>
                <h5 className='text-black font-semibold text-center items-center'>{review?.name}</h5>
                <p className='text-xs text-black text-center '>Since {new Date(review?.ucd).getFullYear()}</p>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                {/* <h2 className="text-gray-900 text-lg title-font font-medium"><Rate rating={3.7} /></h2> */}
                <p className="leading-relaxed text-base text-black mb-2">{review?.comment}</p>
                <div className="flex justify-between items-center">
                    <p className='text-sm text-black'>{new Date(review?.cd).toLocaleString()}</p>
                    {/* <NavLink to='/' className="flex flex-row items-center text-sm" style={{ color: primaryColor }}>
                        <span>Reply</span>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </NavLink> */}
                </div>
            </div>
        </div>
    )
}