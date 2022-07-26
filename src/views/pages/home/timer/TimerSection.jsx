import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img2 from '../../../../assets/images/banner/menu-banner-8.jpg'
import { primaryColor } from '../../../../constant';
import Countdown from 'react-countdown';
import { offerImg } from '../../../../siteSetting/siteUrl';
import { HomePage } from '../../../../services';


const TimerSection = () => {
    const { data, isLoading, isFetching } = HomePage.GetInfo()
    if (isLoading || isFetching) {
        return
    }
    return (
        <div className="container mb-14 sm:px-0 px-4">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {Object.keys(data?.offer)?.length && <div className="relative rounded-md">
                    <img alt="gallery" className="w-full min-h-[600px] sm:min-h-full object-cover object-center block" src={offerImg + data?.offer?.image} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        <InnerCard item={data?.offer} />
                    </div>
                </div>}
                <div className="relative rounded-md">
                    <img alt="gallery" className="w-full min-h-[600px] sm:min-h-full object-cover object-center block" src={img2} />
                    <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                        {Object.keys(data?.offer).length && <InnerCard item={data?.offer} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerSection;


const InnerCard = ({ item }) => {

    const end_date = new Date(item?.end_date).setHours(23, 59, 59)
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <div className='text-3xl font-bold text-center'>Time's up!</div>;

        } else {
            // Render a countdown
            return (
                <div className='text-2xl font-semibold flex my-2 justify-start gap-2'>
                    <div className="flex flex-col justify-center ">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{hours}</span>
                        <p className='font-normal text-gray-500 text-lg'>HOURS</p>
                    </div> <span className='mt-2'>:</span>
                    <div className="flex flex-col">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{minutes}</span>
                        <p className='font-normal text-gray-500 text-lg'>MINS</p>
                    </div><span className='mt-2'>:</span>
                    <div className="flex flex-col">
                        <span className='rounded-md text-white p-2 ' style={{ backgroundColor: primaryColor }}>{seconds}</span>
                        <p className='font-normal text-gray-500 text-lg'>SEC</p>
                    </div>

                </div>
            )
        }
    };
    return (
        <div className="">
            <div className="">
                <h2 className='font-semibold text-3xl' style={{ color: primaryColor }}>{item?.name}</h2>
                <h5 className='text-black'>{item?.subtitle}</h5>
            </div>
            {/* <div className="">
                <h6 className='text-2xl text-black w-80 my-0' >{item?.subtitle} </h6>
            </div> */}
            <div className="my-2">
                <h6 className='text-lg font-semibold text-orange-400'> BDT {item?.discount_type === 'fixed' ? item?.discount_amount : item?.discount_amount + " %"}
                </h6>
            </div>
            <div className="flex justify-start space-y-2 flex-col">
                <p className='text-gray-600'>Hurry Up! Offer End In:</p>
                <Countdown date={Date.now() + (end_date - Date.now())} renderer={renderer} />

                <div className="flex ">
                    <NavLink to={'/offer'} className='flex gap-1 px-5 py-3 items-center rounded-md text-sm font-semibold link_hover' style={{ color: primaryColor, border: `1px solid ${primaryColor}` }}>{"Shop Now"}<ArrowRightIcon className='h-4 w-4 text-xl font-serif font-bold' /></NavLink>
                </div>
            </div>
        </div>
    )
}