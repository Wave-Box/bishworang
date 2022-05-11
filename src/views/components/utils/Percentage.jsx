import { primary } from 'daisyui/src/colors';
import React from 'react';

const Percentage = ({star,value}) => {
    return (
        <>
           <div className="flex gap-3 justify-start items-center">
               <p>{star} star</p>
               <progress class="progress w-56 progress-error" style={{backgroundColor:primary}} value={value} max="100"></progress>
           </div> 
        </>
    );
};

export default Percentage;