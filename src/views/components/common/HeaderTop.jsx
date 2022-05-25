import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mobile, location, Language, userIcon, logoutIcon } from '../../../assets/svg';
import { logout } from '../../../redux/slices/auth';

const HeaderTop = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout());
    };
    return (
        <div className=" w-full py-2 text-sm hidden md:block" style={{ backgroundColor: '#AD171A' }}>
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
                    {isLoggedIn ?
                        <div className='cursor-pointer' onClick={() => logOut()}> <HeaderTopMenu icon={logoutIcon} doc={"Logout"} /></div> :
                        <NavLink to='/login'> <HeaderTopMenu icon={userIcon} doc={"Log In/Sign Up"} /></NavLink>
                    }
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