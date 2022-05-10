import React from 'react';

const SizeSelect = ({ setSelect, select,selectSize }) => {
    return (
        <>
            <div onClick={() => setSelect(selectSize)} class={`border border-gray-300 w-10 rounded ${select === selectSize ? "bg-orange-500 text-white" : null}`}>
                    <p class={`text-lg text-center ${select === selectSize ? "bg-orange-500 text-white" : 'text-black'}`}>{selectSize}</p>
                </div>
           
        </>
    );
};

export default SizeSelect;