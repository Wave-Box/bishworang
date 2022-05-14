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
                <div className="grid grid-cols-12 px-4 space-x-4">
                    <div className="col-span-3">
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"Category"} />

                                <nav className="list-none mb-6 space-y-3 px-4">

                                    {Categories.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}

                                </nav>
                            </div>
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"FILTER BY PRICE"} />

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
                            <div className="">
                                <p>We found 688 items for you!</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <select class="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Normal</option>
                                        <option>Normal Apple</option>
                                        <option>Normal Orange</option>
                                        <option>Normal Tomato</option>
                                    </select>
                                </div>
                                <div className="">
                                    <select class="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Normal</option>
                                        <option>Normal Apple</option>
                                        <option>Normal Orange</option>
                                        <option>Normal Tomato</option>
                                    </select>
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
            </div>


        </>
    );
};

export default Shop;