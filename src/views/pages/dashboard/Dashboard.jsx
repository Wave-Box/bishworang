import React from 'react';
import LeftSide from './LeftSide/LeftSide';
// import Profile from './Profile/Profile';
import {
    Outlet
} from "react-router-dom";
// import { useSelector } from 'react-redux';
// import Search from '../searchPage/Search';

const Dashboard = () => {
    // const searchText = useSelector((state) => state.cart.search)

    // if (searchText) {
    //     return(
    //         <Search />
    //     )
    // }
    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6 mt-16 py-8 px-2">
                <LeftSide />
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;