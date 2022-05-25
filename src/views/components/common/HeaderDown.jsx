import React from 'react';
import logo from '../../../assets/images/headerLogo.png'
import { heart } from '../../../assets/svg';
import { SearchIcon } from '@heroicons/react/outline'

const HeaderDown = () => {
    return (
        <div className="py-1" style={{ background: `white`, position: 'relative' }}>
            <div className=' container mx-auto my-2'>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">


                <div className="col-span-1 flex justify-center items-center">
                    <div className="relative w-full">
                        <input
                            type="text"
                            name={"search"}
                            autoComplete="given-name"
                            placeholder={"Search for items"}
                            className="mt-1 focus:outline-0 focus:border-0 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border py-3 pl-10 placeholder:text-gray-500 bg-gray-50"
                        />

                        <SearchIcon className=' absolute left-2 top-4 bottom-0 font-semibold text-xs h-6 w-6' />
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <div className="">
                        <img src={logo} alt="" width={100} height={150} />
                    </div>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                    <div className="flex ">
                        <a href='/' className="indicator tab tab-lifted  border-0 mr-2 text-black">
                            {heart}
                            <span className="indicator-item badge border-0 bg-orange-400 text-white">8</span>
                        </a>
                       
                    </div>
                </div>


            </div>
        </div>
        </div>
    );
};

export default HeaderDown;