import React from 'react';
import logo from '../../../assets/images/logo.png'
import { bag, heart } from '../../../assets/svg';
import TextField from '../form/text/TextField';

const HeaderDown = () => {
    return (
        <div className='flex container mx-auto justify-between items-center my-2'>
            <div className="">
                <TextField placeHolder={"Search for items"} name="search" />
            </div>
            <div className="">
                <img src={logo} alt="" width={150} height={150} />
            </div>
            <div className="flex ">
                <a href='/' className="indicator tab tab-lifted bg-white border-0 text-black">
                    {heart}
                    <span className="indicator-item badge border-0 bg-orange-400 text-white">8</span>
                </a>
                <a href='/' className="indicator tab tab-lifted border-0 text-black">
                    {bag}
                    <span className="indicator-item badge border-0 bg-orange-400 text-white">8</span>
                </a>
            </div>
        </div>
    );
};

export default HeaderDown;