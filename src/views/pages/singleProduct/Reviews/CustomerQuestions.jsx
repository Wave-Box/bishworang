import React from 'react';
import Title from './Title';
import imgg from '../../../../assets/images/features/feature-2.png'
import Rate from '../../../components/utils/Rate';
import { NavLink } from 'react-router-dom';
import { primaryColor } from '../../../../constant';

const CustomerQuestions = () => {
    return (
        <div>
            <Title text={"Customer questions & answers"} />
            <UserReview />
            <UserReview />
            <UserReview />
        </div>
    );
};

export default CustomerQuestions;



const UserReview = () => {
    return (
        <div class="flex items-center lg:w-3/5 border-b pb-5 border-gray-200 sm:flex-row flex-col">
            <div className="flex flex-col justify-center items-center ">

                <div className="flex justify-center">
                    <img src={imgg} class="sm:w-20 sm:h-20 h-15 w-15 sm:mr-10 bg-gray-300 rounded-full" alt="" />
                </div>
                <h5 className='text-black font-semibold text-center items-center'>Jacky Chon</h5>
                <p className='text-xs text-black text-center '>Since 2012</p>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium"><Rate rating={3.7} /></h2>
                <p class="leading-relaxed text-base text-black">Thank you very fast shipping from Poland only 3days.</p>
                <div className="flex justify-between items-center">
                    <p className='text-sm text-black'>December 4, 2020 at 3:12 pm</p>
                    <NavLink to='/' class="flex items-center text-sm" style={{color:primaryColor}}>Reply
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}