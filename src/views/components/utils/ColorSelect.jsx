import React from 'react';

const ColorSelect = ({ setSelect, select, selectColor, bg, getColor }) => {
    console.log(bg,"bg");

    return (
        <>
            <div onClick={() => {
                getColor(bg)
                setSelect(selectColor)
            }} className={`avatar ${select === selectColor ? "online" : null}`}>
                {bg !== 'multicolor' && <div className={`text-neutral-content rounded-full w-8 cursor-pointer `} style={{ backgroundColor: bg }}>
                </div>}
                {bg === 'multicolor' && <div className={`text-neutral-content bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-8 cursor-pointer`}>
                </div>}
            </div>
        </>
    );
};

export default ColorSelect;