import React from 'react';
import { mobile, location, Language, userIcon } from '../../../assets/svg';

const HeaderTop = () => {
    return (
        <div className=" w-full bg-orange-500 py-2 text-sm hidden md:block">
            <div className='container mx-auto text-white flex justify-between items-center'>
                <div className="flex items-center divide-x">
                    <HeaderTopMenu icon={mobile} doc={"01521739306"} />
                    <HeaderTopMenu icon={location} doc={"Our Location"} />
                </div>
                <div className="">
                    <p>Super value deals . more cupon</p>
                </div>
                <div className="flex items-center divide-x gap-x-4">
                    <HeaderTopMenu icon={Language} doc={"English"} />
                    <HeaderTopMenu icon={userIcon} doc={"Log In/Sign Up"} />
                </div>

            </div>
        </div>
    );
};

export default HeaderTop;

const HeaderTopMenu = (props) => {
    return (
        <div className="flex items-center gap-1 px-4">
            {props.icon}
            <p>{props.doc}</p>
        </div>
    )
}