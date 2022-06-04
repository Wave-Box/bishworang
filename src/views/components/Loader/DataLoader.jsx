import React from 'react';
import { Triangle } from 'react-loader-spinner';

const DataLoader = () => {
    return (
        <div className='h-96 w-full flex justify-center items-center'>
            <Triangle ariaLabel="loading-indicator"
                height="60"
                width="60"
                color='green'
            />
        </div>
    );
};

export default DataLoader;