import React from 'react';

const ColorSelect = ({setSelect,select,selectColor,bg}) => {
    
    return (
        <>
            <div onClick={() => setSelect(selectColor)} className={`avatar ${select === selectColor ? "online" : null}`}>
                <div className={`${bg} text-neutral-content rounded-full w-8`}>
                </div>
            </div>
        </>
    );
};

export default ColorSelect;