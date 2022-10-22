import React from 'react';

const SizeSelect = ({ setSelect, select, selectSize, setVariant, data }) => {
    return (
        <>
            <div onClick={() => {
                setVariant(data)
                setSelect(selectSize)
            }} className={`border border-gray-300 w-auto px-1 rounded cursor-pointer ${select === selectSize ? "bg-orange-500 text-white " : null}`}>
                <p className={`text-lg text-center ${select === selectSize ? "bg-orange-500 text-white" : 'text-black'}`}>{selectSize}</p>
            </div>

        </>
    );
};

export default SizeSelect;