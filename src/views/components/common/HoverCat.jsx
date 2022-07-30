import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HoverCat = ({ item }) => {
    const [isShowing, setIsShowing] = useState(false)
    return (
        <div className='relative h-full'

            onMouseEnter={() => setIsShowing(item?.subcategory?.length ? true : false)}
            onMouseLeave={() => setIsShowing(false)}
        >
            <div className="flex justify-center items-center h-full"
                onMouseEnter={() => setIsShowing(item?.subcategory?.length ? true : false)}
            >
                <NavLink

                    to={'/category/' + item?.id} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    {item?.name}
                </NavLink></div>


            {isShowing && <ShowSubCategory setIsShowing={setIsShowing} item={item} />}
        </div>
    );
};

export default HoverCat;

const ShowSubCategory = ({ setIsShowing, item }) => {
    const [subSubCat, setSubSubCat] = useState(null)
    const [icon, setIcon] = useState(0)
    return (
        <div
            onMouseEnter={() => setIsShowing(true)}
            className="absolute z-10 top-10 left-0 px-2 min-w-[150px] max-w-[400px] min-h-[150px] max-h-max flex bg-[#AD171A] rounded ">

            <div className="relative flex flex-col py-2 rounded-md text-white w-max">
                {item?.subcategory?.map((item) => <SingleSubCat key={item?.id} item={item} setSubSubCat={setSubSubCat} setIcon={setIcon} icon={icon} />)}
            </div>
            {subSubCat?.length !== 0 && <div className="relative flex flex-col py-2 rounded-md text-white w-max">
                {subSubCat?.map((item) => <SingleSubSubCat key={item?.id} item={item} />)}
            </div>}
        </div>
    )
}

const SingleSubSubCat = ({ item }) => {
    return (
        <>

            <NavLink

                to={"/category/" + item?.id} key={item?.id}
                className="py-3 px-6 flex items-start hover:bg-[#ce1b1e] rounded-md w-full"
            >
                <div className="">
                    <p className="text-base font-medium">{item?.name}</p>
                </div>
            </NavLink>
        </>
    )
}
const SingleSubCat = ({ item, setSubSubCat, setIcon, icon }) => {

    return (
        <>

            <NavLink
                onMouseEnter={() => {
                    setSubSubCat(item?.subsubcategory?.length ? item?.subsubcategory : null)
                    setIcon(item?.subsubcategory?.length ? item?.id : 0)
                }}
                to={"/category/" + item?.id} key={item?.id}
                className="py-3 px-6 flex items-center hover:bg-[#ce1b1e] rounded-md w-full  justify-between"
            >
                <div className="">
                    <p className="text-base font-medium">{item?.name}</p>
                </div>
                {icon === item?.id && <ChevronRightIcon color='white' className='h-4 w-4 ml-4' />}
            </NavLink>
        </>
    )
}