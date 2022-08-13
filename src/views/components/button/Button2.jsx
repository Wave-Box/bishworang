import React from 'react';
import { button1 } from '../../../constant/color';

const Button2 = ({setActive,text,active}) => {
    return (
        <>
            <button
            onClick={setActive(text)}
            className='px-6 py-2 rounded text-base font-semibold text-black hover:text-orange-500'
            style={{ backgroundColor: `${active === text ? button1.hoverButton : button1.defaultButton}`, color: `${active === text && button1.color}` }}
            >
            {text}
        </button> 
        </>
    );
};

export default Button2;