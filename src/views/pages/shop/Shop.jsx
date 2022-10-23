import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { primaryColor } from '../../../constant';
import { ProductCard } from '../../components/card';
import Card3 from '../../components/card/Card3.';
// import { Link1 } from '../../components/links';
import Title from '../../components/utils/Title';
import banner3 from '../../../assets/images/shop/banner-11.jpg'
import { ViewGridIcon, ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'
import TitleBorder from '../../components/utils/TitleBorder';
import httpReq from '../../../services/http.service';
import { getPrice } from '../../components/utils/getPrice';
import Taka from '../../components/utils/Taka';
import { HomePage } from '../../../services';
import Pagination from './Pagination';



const Shop = () => {
    const [val, setVal] = useState(0)
    const [store, setStore] = useState([])
    const [products, setProducts] = useState([])
    const [page, setPage] = useState("?page=1")
    const [paginate, setPaginate] = useState({})
    const { data } = HomePage.GetInfo()
    const params = useParams()
    const [loading, setloading] = useState(false)


    useEffect(() => {
        setloading(true)
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await httpReq.post(`getcatproduct${page}`, { id: params?.id });

            // console.log(data, "data");

            // set state with the result
            setProducts(data?.data);
            setStore(data?.data);
            setloading(false)
            setPaginate(data)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch((error) => {
                setloading(false)
                console.log(error);
            }).finally(() => setloading(false))
    }, [params?.id, page])




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

            <div className="lg:container mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-12 sm:space-x-4">
                    <div className=" sm:col-span-5 md:col-span-4 lg:col-span-3 col-span-12">
                        <div className="flex flex-col gap-4">
                            <div className="border border-gray-100 p-4  bg-white rounded shadow hidden sm:block">
                                <Title text={"Category"} color={'black'} />
                                <TitleBorder />

                                <nav className="list-none mb-6 space-y-3 px-4">

                                    {data?.category?.map((item) => <SingleCat key={item?.id} item={item} />)}

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
                                    min="1" max="50000"
                                    defaultValue={0}
                                    onChange={(e) => {
                                        setVal(e.target.value)
                                        setProducts(store?.filter(p => getPrice(p.regular_price, p.discount_price, p.discount_type) < e.target.value))
                                    }}
                                    id="range"
                                    type="range"
                                    className="mb-6 w-full h-2 rounded-lg bg-gray-300 cursor-pointer"></input>

                            </div>

                            <div className="relative hidden sm:block">
                                <img alt="gallery" className="w-full object-cover object-center block" src={banner3} />
                                <div className="absolute top-0 bottom-0 left-4 flex justify-start items-center ">
                                    <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9">
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
                                            <li onClick={() => setProducts(store.slice(0, 10))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>10</li>
                                            <li onClick={() => setProducts(store.slice(0, 20))} className='px-4 py-1 hover:text-white hover:bg-orange-500'>20</li>
                                            
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
                                <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                                    {products?.map((i) => <ProductCard key={i.id} item={i} />)}
                                </div> : <div className="flex justify-center h-[400px] items-center">
                                    <h3 className=" font-sans font-semibold text-3xl text-gray-400 ">Product Not Found!</h3>
                                </div>

                        }

                        <div className='my-5'>
                            <Pagination setPage={setPage} paginate={paginate} />
                        </div>
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


const SingleCat = ({ item }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="w-full flex py-3">
                <NavLink to={'/category/' + item.id} className="flex-1 text-gray-600 hover:ml-2 duration-300" > <p>{item.name}</p></NavLink>
                {item?.subcategory.length ? <div className="px-4 h-full">
                    {show ? <MinusIcon onClick={() => setShow(!show)} className='h-4 w-4 text-gray-800 cursor-pointer' /> :
                        <PlusIcon onClick={() => setShow(!show)} className='h-4 w-4 text-gray-800 cursor-pointer' />}
                </div> : null}
            </div>

            {show && <>
                <div className="ml-2">
                    {
                        item?.subcategory?.map((sub) =>
                            <SingleSub key={sub?.id} item={sub} />)
                    }
                </div>
            </>}
        </>
    )
}
const SingleSub = ({ item }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="w-full flex px-4 py-3">
                <NavLink to={'/category/' + item.id} className="flex-1 text-gray-600 hover:ml-2 duration-300" > <p>{item.name}</p></NavLink>
                {item?.subsubcategory.length ? <div className="px-4 h-full">
                    {open ? <MinusIcon onClick={() => setOpen(!open)} className='h-4 w-4 text-gray-800 cursor-pointer' /> :
                        <PlusIcon onClick={() => setOpen(!open)} className='h-4 w-4 text-gray-800 cursor-pointer' />}
                </div> : null}
            </div>

            {open && <>
                <div className="ml-8">
                    {
                        item?.subsubcategory?.map((sub) =>
                            <div key={sub?.id} className='py-2'>
                                <NavLink to={'/category/' + sub.id} className="flex-1 text-gray-600 !hover:ml-10 duration-300" > <p>{sub.name}</p></NavLink>
                            </div>)
                    }
                </div>

            </>}
        </>
    )
}






