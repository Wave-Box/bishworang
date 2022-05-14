import React from 'react';
import { Link } from 'react-router-dom';
import { Link1 } from '../../components/links';
import Title from '../../components/utils/Title';


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
                <div className="grid grid-cols-12 px-4">
                    <div className="col-span-3">
                        <div className="border border-gray-100 p-4">
                            <Title text={"Category"} />

                            <nav className="list-none mb-10 space-y-2 px-4">

                                {Categories.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}

                            </nav>
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

                        {/* paroduct secton  */}
                    </div>

                </div>
            </div>


        </>
    );
};

export default Shop;