import React from 'react';
import { primaryColor } from '../../../constant';

const Title = ({ text, children }) => {
    return (
        <h3 style={{ fontSize: '22px' }} className='font-semibold flex gap-1 text-black'>
            <span style={{ color: primaryColor }}>
                {text}
            </span>
            {children}
        </h3>
    );
};

export default Title;