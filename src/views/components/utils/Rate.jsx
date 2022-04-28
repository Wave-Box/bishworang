import React from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rate = ({ rating }) => {
    return (

        <Rating className="text-warning text-sm"
            initialRating={rating}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
            readonly></Rating>


    );
};

export default Rate;