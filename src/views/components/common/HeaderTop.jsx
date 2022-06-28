import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mobile, location, userIcon, logoutIcon } from '../../../assets/svg';
import useTheme from '../../../hooks/useTheme';
import { logout } from '../../../redux/slices/auth';
import Marquee from "react-fast-marquee";

const HeaderTop = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout());
    };
    const { topdeals } = useTheme()
    return (
        <div className=" w-full py-0 text-sm hidden md:block" style={{ backgroundColor: '#AD171A' }}>
            <div className='container mx-auto text-white flex justify-between items-center'>
                <div className="flex items-center divide-x">
                    <HeaderTopMenu icon={mobile} doc={"+88 01730 068 036"} />
                    <NavLink to="/location"> <HeaderTopMenu icon={location} doc={"Our Outlates"} /></NavLink>
                </div>
                <div className="">
                    {/* {topdeals?.map((i) => <marquee direction="up" scrollamount="2">{i}</marquee>)} */}
                    <Marquee pauseOnHover direction='left' delay={2} speed={30} >
                        <ul className='space-x-8'>

                            {topdeals?.map((i) => <li key={i?.id} style={{ float: 'left' }}> <a href={i?.link}>{i?.title}</a> </li>)}
                        </ul>

                    </Marquee>
                </div>
                <div className="flex items-center divide-x gap-x-4">
                    <select className=' bg-transparent border-0 outline-0 text-white'>
                        <option className='text-black' value="">BDT</option>
                        <option className='text-black' value="">USD</option>
                    </select>
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