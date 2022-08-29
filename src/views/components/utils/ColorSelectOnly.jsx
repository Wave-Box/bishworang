import React from 'react';

const ColorSelectOnly = ({ setSelect, select, selectColor, setVariant, data, bg }) => {
    return (
        <>
            <div onClick={() => {
                setVariant(data)
                setSelect(selectColor)
            }} className={`avatar ${select === selectColor ? "ring-2 ring-[#AD171A] ring-offset-2 rounded-full" : null}`}>

                 {bg !== 'multicolor' && <div className={`text-neutral-content rounded-full w-8 cursor-pointer `} style={{ backgroundColor: bg }}>
                </div>}
                {bg === 'multicolor' && <div className={`text-neutral-content bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-8 cursor-pointer`}>
                </div>}

            </div>

        </>
    );
};

export default ColorSelectOnly;