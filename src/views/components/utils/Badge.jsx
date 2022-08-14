import React from 'react';

const Badge = ({ msg }) => {
    return (
        <div className='custom_badge'>
         <p className='uppercase pl-2 pr-8'>{msg}</p>
        </div>
    );
};

export default Badge;