
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mobile, location, userIcon, logoutIcon } from '../../../assets/svg';
import useTheme from '../../../hooks/useTheme';
import Marquee from "react-fast-marquee";
import { logout } from '../../../redux/slices/auth';
import { HomePage } from '../../../services';

const HeaderTop = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const { data } = HomePage.GetInfo()
    return (
        <div className=" w-full lg2:py-0 text-sm hidden md:block bg-[#AD171A] py-3">
            <div className='px-2 lg2:px-6 text-white flex xl:flex justify-between lg2:grid grid-cols-10 justify-items-center items-center'>
                <div className="flex items-center lg2:divide-x justify-self-start lg2:col-span-3 xl:col-span-3">
                    <div className="lg2:block hidden">
                        <HeaderTopMenu icon={mobile} doc={"+88 01730 068 036"} />
                    </div>
                    <div>
                        <NavLink to="/location"> <HeaderTopMenu icon={location} doc={"Our Outlets"} /></NavLink>
                    </div>
                </div>
                <div className="lg2:col-span-4 xl:col-span-4">
                    {/* {topdeals?.map((i) => <marquee direction="up" scrollamount="2">{i}</marquee>)} */}
                    <Marquee pauseOnHover direction='left' delay={2} speed={30} >
                        <ul className='space-x-8'>

                            {data?.topdeals?.map((i) => <li key={i?.id} style={{ float: 'left' }}> <a href={i?.link}>{i?.title}</a> </li>)}
                        </ul>

                    </Marquee>
                </div>
                <div className="flex items-center divide-x gap-x-4 justify-self-end lg2:col-span-3">
                    <CurrencyFrom />
                    {user?.verify ?
                        <div className='cursor-pointer' onClick={() => dispatch(logout())}> <HeaderTopMenu icon={logoutIcon} doc={"Logout"} />
                        </div> :
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


const CurrencyFrom = () => {
    const { setCurrency } = useTheme()
    return (
        <select onChange={(e) => setCurrency(e.target.value)} className='bg-transparent lg2:block hidden border-0 outline-0 text-white focus:ring-0 focus:border-0 focus:outline-0'>
            <option className='text-black' value="BDT">BDT</option>
            <option className='text-black' value="USD">USD</option>
        </select>
    )

}