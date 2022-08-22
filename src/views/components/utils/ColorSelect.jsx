import React from 'react';

const ColorSelect = ({ setSelect, select, selectColor, bg, getColor }) => {

    return (
        <>
            <div onClick={() => {
                getColor(bg)
                setSelect(selectColor)
            }} className={`avatar ${select === selectColor ? "online" : null}`}>
                <div className={`text-neutral-content rounded-full w-8 cursor-pointer`} style={{ backgroundColor: bg }}>
                </div>
            </div>
        </>
    );
};

export default ColorSelect;