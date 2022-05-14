import React, { useState } from 'react';
import ColorSelect from './ColorSelect';

const SelectColor = () => {

    const [selectColor, setSelectColor] = useState('black')
    return (
        <>
            <div className="flex flex-col items-start gap-3  mt-6 mb-2">
                <h6 className='text-md font-semibold text-gray-700'>Color</h6>
                <div className="flex gap-2 items-center justify-start">
                    <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'pink'} bg={'bg-pink-300'} />
                    <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'black'} bg={'bg-black'} />
                    <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'orange'} bg={'bg-orange-300'} />

                </div>
            </div>
        </>
    );
};

export default SelectColor;