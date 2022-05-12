import React, { useState } from 'react';
import { primaryColor } from '../../../../constant';
import TextField from '../../../components/form/text/TextField';
import InputRate from '../../../components/utils/InputRate';
import Title from './Title';

const AddReview = () => {
    const [GiveRate, setGiveRate] = useState(null)
    // console.log(GiveRate);
    return (
        <>
            <Title text="Add a review" />
            <InputRate 
            value={GiveRate}
            setValue={setGiveRate}
             />
            <form className='space-y-3'>
            <textarea
                type="text"
                rows="7"
                name={'review'}
                id={'review'}
                autoComplete="given-name"
                placeholder={`Write Comment`}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border py-3 px-2 placeholder:text-gray-500"
            />
                <div className="flex gap-4">
                    <TextField placeHolder={'Name'} name="name" />
                    <TextField placeHolder={'Email'} name="email" />
                </div>
                <TextField placeHolder={'Website'} name="website" />

                <input type="submit" value={"Submit Review"} style={{backgroundColor:primaryColor}} className={'w-48 text-lg py-3 leading-7 rounded-md text-white'} />
            </form>
        </>
    );
};

export default AddReview;