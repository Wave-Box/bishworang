import React from 'react';

const ColorSelect = ({setSelect,select,selectColor,bg}) => {
    
    return (
        <>
            <div onClick={() => setSelect(selectColor)} class={`avatar ${select === selectColor ? "online" : null}`}>
                <div class={`${bg} text-neutral-content rounded-full w-8`}>
                </div>
            </div>
        </>
    );
};

export default ColorSelect;