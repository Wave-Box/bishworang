import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { primaryColor } from '../../../constant';
import { ProductCard } from '../../components/card';
import Card3 from '../../components/card/Card3.';
import { Link1 } from '../../components/links';
import Title from '../../components/utils/Title';
import banner3 from '../../../assets/images/shop/banner-11.jpg'
import { ViewGridIcon, ChevronDownIcon } from '@heroicons/react/outline'
import TitleBorder from '../../components/utils/TitleBorder';
import httpReq from '../../../services/http.service';
import { getPrice } from '../../components/utils/getPrice';
import Taka from '../../components/utils/Taka';
import { HomePage } from '../../../services';



const Shop = () => {
    const [val, setVal] = useState(0)
    const [store, setStore] = useState([])
    const [products, setProducts] = useState([])
    const { data } = HomePage.GetInfo()
    const params = useParams()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const {data} = await httpReq.post('getcatproduct', { id: params?.id });

            console.log(data);

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
    }, [params?.id])




    return (
        <>
            <div className="">
                <div className="container mx-auto px-4 sm:px-0">
                    <div className="text-sm breadcrumbs md:mt-6 my-4 ">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-0">
                <div className="grid grid-cols-12 sm:space-x-4">
                    <div className="hidden sm:block sm:col-span-3">
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"Category"} color={'black'} />
                                <TitleBorder />

                                <nav className="list-none mb-6 space-y-3 px-4">

                                    {data?.category?.map((item) => <Link1 key={item?.id} text={item.name} href={"/category/" + item?.id} />)}

                                </nav>
                            </div>
                            <div className="border border-gray-100 p-4  bg-white rounded shadow">
                                <Title text={"FILTER BY PRICE"} color={'black'} />
                                <TitleBorder />

                                <div className="flex justify-between items-center">
                                    <label htmlFor="range" className=" mb-2 text-sm font-semibold"><Taka tk={0} /></label>
                                    <label htmlFor="range" className=" mb-2 text-sm font-semibold"><Taka tk={val} /></label>
                                </div>
                                <input
                                    min="1" max="10000"
                                    defaultValue={0}
                                    onChange={(e) => {
                                        setVal(e.target.value)
                                        setProducts(store?.filter(p => getPrice(p.regular_price, p.discount_price, p.discount_type) < e.target.value))
                                    }}
                                    id="range"
                                    type="range"
                                    className="mb-6 w-full h-2 rounded-lg bg-gray-300 cursor-pointer"></input>



                            </div>

                            <div className="relative">
                                <img alt="gallery" className="w-full object-cover object-center block" src={banner3} />
                                <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                                    <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                        <div className="flex justify-between my-2">
                            <div className="flex justify-start items-center">
                                <p className='text-xs sm:text-base'>We found <span style={{ color: primaryColor, fontWeight: 600 }}>{products?.length ? products.length : 0}</span> items for you!</p>
                            </div>
                            <div className="flex items-center gap-3">

                                <div className="text-xs sm:text-base">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className=" m-0">
                                            <div className="border border-gray-300 rounded-full px-4 py-1 bg-gray-100 flex justify-start items-center gap-2">
                                                <ViewGridIcon className='h-4 w-4 sm:h-5 sm:w-5 text-gray-400' />
                                                <span > Show: {products.length ? products.length : 0}</span>
                                                <ChevronDownIcon className='h-3 w-3' />
                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="dropdown-content menu  py-2 text-xs sm:text-base text-gray-500  shadow-lg bg-base-100 w-[120px] sm:w-36 space-y-2 ">
                                            <li onClick={() => setProducts(store.slice(0, 50))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>50</li>
                                            <li onClick={() => setProducts(store.slice(0, 100))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>100</li>
                                            <li onClick={() => setProducts(store.slice(0, 150))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>150</li>
                                            <li onClick={() => setProducts(store.slice(0, 200))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>200</li>
                                            <li onClick={() => setProducts(store.slice(0, 250))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>250</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* main products in here  */}
                        {loading ? <div className="flex justify-center h-[400px] items-center">
                            <button className="btn loading">loading</button>
                        </div> :


                            products?.length ?
                                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
                                    {products?.map((i) => <ProductCard key={i.id} item={i} />)}
                                </div> : <div className="flex justify-center h-[400px] items-center">
                                    <h3 className=" font-sans font-semibold text-3xl text-gray-400 ">Product Not Found!</h3>
                                </div>

                        }
                        {/* paroduct secton  */}
                    </div>

                </div>

                {/* <div className="flex justify-center my-5">
                    <div className="flex gap-3 items-center">
                        <button className="p-2">«</button>
                        <button className=" p-2">1</button>
                        <button className=" p-2">2</button>
                        <button className=" p-2">2</button>
                        <button className=" p-2">3</button>
                        <button className="p-2">»</button>
                    </div>
                </div> */}

            </div>


        </>
    );
};

export default Shop;






