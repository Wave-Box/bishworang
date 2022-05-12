import React from 'react';
import { NavLink } from 'react-router-dom';
import { mobile, location, Language, userIcon } from '../../../assets/svg';
import { primaryColor } from '../../../constant';

const HeaderTop = () => {
    return (
        <div className=" w-full py-2 text-sm hidden md:block" style={{backgroundColor:primaryColor}}>
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
                   <NavLink to='/login'> <HeaderTopMenu icon={userIcon} doc={"Log In/Sign Up"} /></NavLink>
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