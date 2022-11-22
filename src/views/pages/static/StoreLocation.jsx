import React from 'react';
import Aside from './aside';
// import { ImLocation2 } from "react-icons/im";

const StoreLocation = () => {
    return (
        <>

            <div className="flex  gap-6 px-4">
                <div className="min-w-max md:block hidden">
                    <Aside />

                </div>
                <div className='min-h-[600px] mt-10 w-full'>
                    <h3 className='border-b border-black pb-2 text-2xl font-semibold'>BISHWO RANG OUTLETS</h3>
                    <div className='mt-10 '>
                        <div className='flex flex-col gap-4 bg-gray-100 p-5 rounded-lg mb-5'>
                            {/* <div className='text-center font-bold text-4xl text-gray-700'>
                                <h1>Dhaka Zone</h1>
                            </div> */}
                            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5'>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Wari</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>A. K. Famous Tower, 2nd floor, 41, Rankin Street, Wari, Dhaka</p>
                                    <p>Contact Number: 01730068023</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Banasree</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>House No: C-4, Block- C, 1st Floor, Banasree Main Road, Rumpura, Dhaka</p>
                                    <p>Contact Number: 01730068032</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Baily Road</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>Baily Fiesta, 2nd floor, Baily Road, Dhaka</p>
                                    <p>Contact Number: 01730068098</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Sunrise Plaza</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>Sunrise Plaza, 2nd floor, Block-A, Lalmatia, Dhaka</p>
                                    <p>Contact Number: 01730068012</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Jamuna Future Park</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>GC-014 A, Zone-C, Ground Floor, Jamuna Future Park, Dhaka</p>
                                    <p>Contact Number: 01730068048</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Basundhara City</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>Basundhara City, Label-3, Block-D, Shop No-31.32.33, Dhaka</p>
                                    <p>Contact Number: 01730068026</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>EASTERN PLAZA</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>EASTERN PLAZA, 1/19, Ground Floor, Dhaka</p>
                                    <p>Contact Number: 01730068028</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Orchard Point</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>Orchard Point, 2nd floor, Road-7, Dhanmondi, Dhaka</p>
                                    <p>Contact Number: 01730068073</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Uttara</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>House-96, Lake Drive Road, Sector-7, Uttara Model Town, Dhaka-1230</p>
                                    <p>Contact Number: 01730068040</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Banani</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>House-26, 2nd floor, Road-11, Banani, Dhaka</p>
                                    <p>Contact Number: 01730068016</p>
                                </div>
                                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg'>
                                    <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Mirpur</h1>
                                    {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                    <p>Plot-C-13, Road-1,Block-Ka & Kha, Section-6, Mirpur-2, Dhaka-1216</p>
                                    <p>Contact Number: 01730068024</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-9 rounded-lg '>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Narayanganj </h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>Santana Market, 1st-2nd floor, Chashara, Narayangonj</p>
                                <p>Contact Number: 01730068011</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Sylhet</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>Asgar Square (1st floor), BarutKhana Point, East Zindabazar, Sylhet</p>
                                <p>Contact Number: 01730068018</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Sunamgonj (Franchise)</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>London Mansion, Trafik Point, Muktarpara, Sunamgonj</p>
                                <p>Contact Number: 01797416442</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Rajshahi</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>Shohidullah Tower, 2nd floor, Holding-7500, Gonok para, Ranibazar, Rajshahi-6100</p>
                                <p>Contact Number: 01841068033</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Comilla</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>Kandirpar, Nazrul Islam Avenue, Near Troma Hospital, Comilla</p>
                                <p>Contact Number: 01730068039</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Chittagong</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>AFMI Plaza, Level-3, 1/A Bayazid Bostami Road, Pachlish, Chittagong</p>
                                <p>Contact Number: 01730068025</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Mymensingh</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>41/1 Rambabu Road , Natun Bazar , Mymensingh</p>
                                <p>Contact Number: 01730068016</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Dinajpur</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>Alamin Tower, 1st Floor, Nimtola, Dinajpur</p>
                                <p>Contact Number: 01730068031</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Barisal</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>House No-968, North Bagura Road. Near Nouton Bazar, Barisal</p>
                                <p>Contact Number: 01730068037</p>
                            </div>
                            <div className='flex flex-col gap-3 bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-center font-bold border-b border-black pb-2 w-max'>Faridpur</h1>
                                {/* <ImLocation2 className='text-4xl text-gray-700'/> */}
                                <p>86/93 Alipur moor Mujib sharak Faridpur_7800,<br/> New Market Faridpur</p>
                                <p>Contact Number: 01730068027</p>
                            </div>
                        </div>
                    </div>
                    {/* <ul className='mt-10 list-none'> */}
                        {/* <li>01. Santana Market, 1st-2nd floor, Chashara, Narayangonj, Ph- 01730068011</li> */}
                        {/* <li>02. Sunrise Plaza, 2nd floor, Block-A, Lalmatia, Dhaka, Ph- 01730068012</li> */}
                        {/* <li>03. Orchard Point, 2nd floor, Road-7, Dhanmondi, Dhaka, Ph- 01730068073</li> */}
                        {/* <li>04. House-26, 2nd floor, Road-11, Banani, Dhaka, Ph- 01730068016</li> */}
                        {/* <li>05. Baily Fiesta, 2nd floor, Baily Road, Dhaka. Ph- 01730068098</li> */}
                        {/* <li>06. Asgar Square (1st floor), BarutKhana Point, East Zindabazar, Sylhet, Ph -01730068018</li> */}
                        {/* <li>07. House-96, Lake Drive Road, Sector-7, Uttara Model Town, Dhaka-1230, Ph- 01730068040</li> */}
                        {/* <li>08. London Mansion, Trafik Point, Muktarpara, Sunamgonj, Ph- 01797416442</li> */}
                        {/* <li>09. GC-014 A, Zone-C, Ground Floor, Jamuna Future Park, Ph- 01730068048</li> */}
                        {/* <li>10. Shohidullah Tower, 2nd floor, Holding-7500, Gonok para, Ranibazar, Rajshahi-6100, Ph: 01841068033</li> */}
                        {/* <li>11. Kandirpar, Nazrul Islam Avenue, Near Troma Hospital, Comilla, Ph : 01730068039</li> */}
                        {/* <li>12. A. K. Famous Tower, 2nd floor, 41, Rankin Street, Wari, Dhaka, Ph: 01730068023</li> */}
                        {/* <li>13. Plot-C-13, Road-1,Block-Ka & Kha, Section-6, Mirpur-2, Dhaka-1216 , Ph : 01730068024</li> */}
                        {/* <li>(Besides 4 no gate share e bangla national stadium)</li> */}
                        {/* <li>14. AFMI Plaza, Level-3, 1/A Bayazid Bostami Road, Pachlish, Chittagong, Ph: 01730068025</li> */}
                        {/* <li>15. Basundhara City, Label-3, Block-D, Shop No-31.32.33. Ph: 01730068026</li> */}
                        {/* <li>16. 41/1 Rambabu Road , Natun Bazar , Mymensingh , Ph – 01730068016</li> */}
                        {/* <li>17. Alamin Tower, 1st Floor, Nimtola, Dinajpur ph: 01730068031</li> */}
                        {/* <li>18. House No: C-4, Block- C, 1st Floor, Banasree Main Road, Rumpura, Dhaka, Ph: 01730068032</li> */}
                        {/* <li>19. EASTERN PLAZA, 1/19, Ground Floor, Ph: 01730068028</li> */}
                        {/* <li>20. House No-968, North Bagura Road. Near Nouton Bazar, Barisal Ph : 01730068037</li> */}
                    {/* </ul> */}


                </div>
            </div>
        </>
    );
};

export default StoreLocation;