import React from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { primaryColor } from '../../../constant';


const InputRate = ({value,setValue}) => {
    return (
        <>
            <Rating
            initialRating={value}
                className="text-warning text-xl"
                emptySymbol={<AiOutlineStar color={primaryColor} />}
                fullSymbol={<AiFillStar color={primaryColor} />}
                onChange={(rate) => setValue(rate)}
                fractions={2}
               
            />
        </>
    );
};

export default InputRate;