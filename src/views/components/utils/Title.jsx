import React from 'react';
import { primaryColor } from '../../../constant';

const Title = ({ text, children,color }) => {
    return (
        <h3 style={{ fontSize: '22px' }} className='font-semibold flex gap-1 text-black'>
            <span style={{ color: color ? color : primaryColor }}>
                {text}
            </span>
            {children}
        </h3>
    );
};

export default Title;