import React from 'react';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../../constant';
import { ProductCard } from '../../components/card';
import Card3 from '../../components/card/Card3.';
import { Link1 } from '../../components/links';
import SelectColor from '../../components/utils/SelectColor';
import SelectSize from '../../components/utils/SelectSize';
import Title from '../../components/utils/Title';
import banner3 from '../../../assets/images/shop/banner-11.jpg'
import { ViewGridIcon, ChevronDownIcon } from '@heroicons/react/outline'
import TitleBorder from '../../components/utils/TitleBorder';

const Categories = [
    { name: "Shoes & bags", link: '/' },
    { name: "Dresses ", link: '/' },
    { name: "Swimwear ", link: '/' },
    { name: "Beauty ", link: '/' },
    { name: "Shoes & bags", link: '/' },
    { name: "Dresses ", link: '/' },
    { name: "Swimwear ", link: '/' },

]

const Shop = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-sm breadcrumbs md:mt-6 my-4 ">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-12 space-x-4">
                    <div className="col-span-3">
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"Category"} color={'black'} />
                                <TitleBorder />

                                <nav className="list-none mb-6 space-y-3 px-4">

                                    {Categories.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}

                                </nav>
                            </div>
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"FILTER BY PRICE"} color={'black'} />
                                <TitleBorder />

                                <nav className="list-none mb-6 px-4">
                                    <ul className='list-none space-y-2'>
                                        {Categories.map((item, idx) => <li className='cursor-pointer' key={idx} style={{ color: primaryColor }}>{item.name}</li>)}
                                    </ul>

                                </nav>

                                <div className="divider mx-8"></div>
                                <SelectColor />
                                <SelectSize />


                            </div>

                            <div className="relative">
                                <img alt="gallery" className="w-full object-cover object-center block" src={banner3} />
                                <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                                    <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div className="flex justify-between my-2 px-4">
                            <div className="flex justify-start items-center">
                                <p className='text-base'>We found <span style={{ color: primaryColor, fontWeight: 600 }}>688</span> items for you!</p>
                            </div>
                            <div className="flex items-center gap-3">

                                <div className="">
                                    <div class="dropdown dropdown-end">
                                        <label tabindex="0" class=" m-0">
                                            <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-100 flex justify-start items-center gap-2">
                                                <ViewGridIcon className='h-6 w-6 text-gray-400' />
                                                <span> Show: 50</span>
                                                <ChevronDownIcon className='h-3 w-3' />
                                            </div>
                                        </label>
                                        <ul tabindex="0" class="dropdown-content menu  py-4 text-lg text-gray-500  shadow-lg bg-base-100 w-36 space-y-2">
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>50</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>100</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>150</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>200</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>250</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <div class="dropdown dropdown-end">
                                        <label tabindex="0" class=" m-1">
                                            <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-100 flex justify-start items-center gap-2">
                                                <ViewGridIcon className='h-6 w-6 text-gray-400' />
                                                <span> Short By: Featured</span>
                                                <ChevronDownIcon className='h-3 w-3' />
                                            </div>
                                        </label>
                                        <ul tabindex="0" class="dropdown-content menu  py-4 text-lg text-gray-500  shadow-lg bg-base-100  w-52 space-y-2">
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>Featured</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>Price: Low to High</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>Price: High to Low</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>Release Date</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>Avg. Rating</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* main products in here  */}
                        <div className="grid  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 space-y-3">
                            {
                                Array.from({ length: 9 }).map((_, id) => <ProductCard key={id} />)
                            }
                        </div>
                        {/* paroduct secton  */}
                    </div>

                </div>

                <div className="flex justify-center my-5">
                    <div class="flex gap-3 items-center">
                        <button class="p-2">«</button>
                        <button class=" p-2">1</button>
                        <button class=" p-2">2</button>
                        <button class=" p-2">2</button>
                        <button class=" p-2">3</button>
                        <button class="p-2">»</button>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Shop;