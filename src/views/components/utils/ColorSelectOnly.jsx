import React from 'react';

const ColorSelectOnly = ({ setSelect, select, selectColor, setVariant, data, bg }) => {
    return (
        <>
            <div onClick={() => {
                setVariant(data)
                setSelect(selectColor)
            }} className={`avatar ${select === selectColor ? "online" : null}`}>
                 <div className={`text-neutral-content rounded-full w-8 cursor-pointer`} style={{ backgroundColor: bg }}>
                </div>
            </div>

        </>
    );
};

export default ColorSelectOnly;