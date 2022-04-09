import React from 'react';

const TextField = ({ placeHolder, name }) => {
    return (
        <>
            <input
                type="text"
                name={name}
                id={name}
                autoComplete="given-name"
                placeholder={`${placeHolder}`}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border py-3 px-2 placeholder:text-gray-500"
            />
        </>
    );
};

export default TextField;