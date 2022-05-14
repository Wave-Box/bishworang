import React, { useState } from 'react';
import SizeSelect from './SizeSelect';

const SelectSize = () => {
    const [selectSize, setSelectSize] = useState('XL')
    return (
        <>
             <div className="flex flex-col items-start gap-3 mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        <div className="flex gap-2 items-center justify-start">
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'S'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'M'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'L'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XL'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XXL'} />
                        </div>


                    </div>
        </>
    );
};

export default SelectSize;