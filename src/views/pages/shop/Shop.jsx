import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { primaryColor } from '../../../constant';
import { ProductCard } from '../../components/card';
import Card3 from '../../components/card/Card3.';
import { Link1 } from '../../components/links';
// import SelectColor from '../../components/utils/SelectColor';
// import SelectSize from '../../components/utils/SelectSize';
import Title from '../../components/utils/Title';
import banner3 from '../../../assets/images/shop/banner-11.jpg'
import { ViewGridIcon, ChevronDownIcon } from '@heroicons/react/outline'
import TitleBorder from '../../components/utils/TitleBorder';
import useTheme from '../../../hooks/useTheme';
import httpReq from '../../../services/http.service';
import { getPrice } from '../../components/utils/getPrice';

const price = [
    { name: "10" },
    { name: "100" },
    { name: "1000" },
    { name: "10000" },
    { name: "10000000" },


]

const Shop = () => {
    const [val, setVal] = useState(0)
    const [store, setStore] = useState([])
    const [products, setProducts] = useState([])
    const { category } = useTheme()
    const params = useParams()
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await httpReq.post('getcatproduct', { id: params.id });


            // set state with the result
            setProducts(data);
            setStore(data);
            setloading(false)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch((error) => {
                setloading(false)
                console.log(error);
            }).finally(() => setloading(false))
    }, [params.id])

    // if (loading) {
    //     return <div className="flex justify-center h-screen items-center">
    //     <button className="btn loading">loading</button>
    // </div>
    // }
    return (
        <>
            <div className="">
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

                                    {category?.map((item) => <Link1 key={item?.id} text={item.name} href={"/category/" + item?.id} />)}

                                </nav>
                            </div>
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"FILTER BY PRICE"} color={'black'} />
                                <TitleBorder />

                                <nav className="list-none mb-6 px-4">
                                    <ul className='list-none space-y-2'>
                                        {price.map((item, idx) => <li className='cursor-pointer' onClick={() => setProducts(store?.filter(p => getPrice(p.regular_price, p.discount_price, p.discount_type) < item?.name))} key={idx} style={{ color: primaryColor }}>{item.name}</li>)}
                                    </ul>
                                    <input type="range" min="1" max="100" defaultValue={1} onChange={(e) => setProducts(store?.filter(p => getPrice(p.regular_price, p.discount_price, p.discount_type) < e.target.value))}></input>
                                    <p>{val}</p>

                                </nav>

                                {/* <div className="divider mx-8"></div>
                                <SelectColor />
                                <SelectSize /> */}


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
                                <p className='text-base'>We found <span style={{ color: primaryColor, fontWeight: 600 }}>{products?.length ? products.length : 0}</span> items for you!</p>
                            </div>
                            <div className="flex items-center gap-3">

                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className=" m-0">
                                            <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-100 flex justify-start items-center gap-2">
                                                <ViewGridIcon className='h-6 w-6 text-gray-400' />
                                                <span> Show: 50</span>
                                                <ChevronDownIcon className='h-3 w-3' />
                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="dropdown-content menu  py-4 text-lg text-gray-500  shadow-lg bg-base-100 w-36 space-y-2">
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>50</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>100</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>150</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>200</li>
                                            <li className='px-4 py-2 hover:text-white hover:bg-orange-500'>250</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className=" m-1">
                                            <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-100 flex justify-start items-center gap-2">
                                                <ViewGridIcon className='h-6 w-6 text-gray-400' />
                                                <span> Short By: Featured</span>
                                                <ChevronDownIcon className='h-3 w-3' />
                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="dropdown-content menu  py-4 text-lg text-gray-500  shadow-lg bg-base-100  w-52 space-y-2">
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
                        {loading ? <div className="flex justify-center h-[400px] items-center">
                            <button className="btn loading">loading</button>
                        </div> :


                            products.length ?
                                <div className="flex flex-wrap gap-6">
                                    {products?.map((i) => <ProductCard key={i.id} item={i} />)}
                                </div> : <div className="flex justify-center h-[400px] items-center">
                                    <h3 className=" font-sans font-semibold text-3xl text-gray-400 ">Product Not Found!</h3>
                                </div>

                        }
                        {/* paroduct secton  */}
                    </div>

                </div>

                <div className="flex justify-center my-5">
                    <div className="flex gap-3 items-center">
                        <button className="p-2">«</button>
                        <button className=" p-2">1</button>
                        <button className=" p-2">2</button>
                        <button className=" p-2">2</button>
                        <button className=" p-2">3</button>
                        <button className="p-2">»</button>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Shop;