import React from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { primaryColor } from '../../../constant';

const Rate = ({ rating }) => {
    return (

        <Rating className="text-warning text-sm"
            initialRating={rating}
            emptySymbol={<AiOutlineStar color={primaryColor} />}
            fullSymbol={<AiFillStar color={primaryColor} />}
            readonly></Rating>


    );
};

export default Rate;