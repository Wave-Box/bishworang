import React from 'react';
import {
    NavLink,
    useLocation
} from "react-router-dom";

const LeftSide = () => {
    const location = useLocation()
    return (
        <>


            <div className="mt-5 md:mt-0 md:col-span-1">
                {/* <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                        <h3 className='border-dotted border-b-gray-300 border-b-2 pb-4 tracking-wider font-semibold'>Wallet Points</h3>


                        <div className="flex divide-x divide-dashed justify-between">
                            <div className="flex flex-col space-x-2 items-center px-4">
                                <p>0</p>
                                <p>Total</p>
                            </div>
                            <div className="flex flex-col space-x-2 items-center px-4">
                                <p>0</p>
                                <p>Used</p>
                            </div>
                            <div className="flex flex-col space-x-2 items-center px-4">
                                <p>0</p>
                                <p>Available</p>
                            </div>
                        </div>

                    </div>

                </div> */}

                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className=" py-5 bg-white space-y-3  flex flex-col">

                        <NavLink to='/profile' className={`${location.pathname === '/profile' ? " active_color" : "border-white "}  border-l-4 text-md font-semibold  pl-5 py-1 tracking-wider`}>Profile</NavLink>

                        <NavLink to='/profile/order' className={`${location.pathname === '/profile/order' ? " active_color" : "border-white "}  border-l-4 text-md font-semibold  pl-5 py-1 tracking-wider`}>Your Order</NavLink>






                    </div>

                </div>
            </div>
        </>
    );
};

export default LeftSide;