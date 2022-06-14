import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../../../assets/images/banner/menu-banner-7.jpg'
import img2 from '../../../../assets/images/banner/menu-banner-8.jpg'
import { primaryColor } from '../../../../constant';
import { useTime } from 'react-timer-hook';


const TimerSection = () => {
    return (
        <div className="container mb-14">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div className="relative rounded-md">
                    <img alt="gallery" className="w-full min-h-[600px] sm:min-h-full object-cover object-center block" src={img1} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <InnerCard />
                    </div>
                </div>
                <div className="relative rounded-md">
                    <img alt="gallery" className="w-full min-h-[600px] sm:min-h-full object-cover object-center block" src={img2} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <InnerCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerSection;


const InnerCard = () => {

    const {
        seconds,
        minutes,
        hours,
        ampm,
    } = useTime({ format: '12-hour' });
    return (
        <div className="">
            <div className="">
                <h2 className='font-semibold text-3xl' style={{ color: primaryColor }}>Deal of the Day</h2>
                <h5 className='text-black'>Limited quantities</h5>
            </div>
            <div className="">
                <h6 className='text-2xl text-black w-80 my-3' >Lorem, ipsum dolor sit amet consectetur adipisicing </h6>
            </div>
            <div className="my-2">
                <h6 className='text-lg font-semibold text-orange-400'>
                    $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                </h6>
            </div>
            <div className="flex justify-start space-y-2 flex-col">
                <p className='text-gray-600'>Hurry Up! Offer End In:</p>

                <div className='text-2xl font-semibold flex MY-2 justify-start items-center  gap-2'>
                    <div className="flex flex-col justify-center ">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{hours}</span>
                        <p className='font-normal text-gray-500 text-lg'>HOURS</p>
                    </div>:
                    <div className="flex flex-col">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{minutes}</span>
                        <p className='font-normal text-gray-500 text-lg'>MINS</p>
                    </div>:
                    <div className="flex flex-col">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{seconds}</span>
                        <p className='font-normal text-gray-500 text-lg'>SEC</p>
                    </div>
                    <p>:</p>
                    <div className="flex flex-col">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{ampm}</span>
                        <p className='font-normal text-gray-500 text-lg'>{ampm}</p>
                    </div>
                </div>
                <div className="flex ">
                    <NavLink to={'/'} className='flex gap-1 px-5 py-3 items-center rounded-md text-sm font-semibold link_hover' style={{ color: primaryColor, border: `1px solid ${primaryColor}` }}>{"Shop Now"}<ArrowRightIcon className='h-4 w-4 text-xl font-serif font-bold' /></NavLink>
                </div>
            </div>
        </div>
    )
}