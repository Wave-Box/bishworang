import React, { useEffect, useState } from 'react';
import { CgCrown } from 'react-icons/cg'
import { VscCreditCard } from 'react-icons/vsc'
import { HiOutlineRefresh } from 'react-icons/hi'
import ColorSelect from '../../components/utils/ColorSelect';
import SizeSelect from '../../components/utils/SizeSelect';
import { primaryColor } from '../../../constant';
import { motion } from 'framer-motion'
import ImageSection from './ImageSection';
import { Link, useParams } from 'react-router-dom';
import RelatedProducts from './RelatedProducts';
import Reviews from './Reviews/Reviews';
import Description from './Description/Description';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../../../hooks/useTheme';
import httpReq from '../../../services/http.service';
import { getPrice } from '../../components/utils/getPrice';
import { addToCartList, decrementQty } from '../../../redux/slices/productslice';
import { EyeIcon, HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import sizeImg from '../../../assets/images/size.jpg';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Taka from '../../components/utils/Taka';
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";
import { HomePage } from '../../../services';


const SingleProduct = () => {

    const { data } = HomePage.GetInfo()

    const [selectColor, setSelectColor] = useState('')
    const [selectSize, setSelectSize] = useState('')
    const [tab, setTab] = useState('desc')


    const activeStyle = {
        borderBottom: `2px solid ${primaryColor}`,
        color: primaryColor,
        paddingBottom: '7px',
    }

    const [product, setProduct] = useState({})
    const [variant, setVariant] = useState([])
    const [singleVariant, setSingleVariant] = useState({})
    const [size, setSize] = useState([])

    // const [color, setSelesdctColor] = useState(null)
    const [vrcolor, setVrcolor] = useState([])
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState({})
    const [call, setCall] = useState(false)

    const { makeid } = useTheme()

    // offer implement 
    const cat = product?.category_id;
    const subCat = parseInt(product?.subcategory_id);
    const subSubCat = parseInt(product?.subsubcategory_id);

    const offer = data?.offer?.category?.find(o => parseInt(o) === cat || parseInt(o) === subCat || parseInt(o) === subSubCat )
    const offer2 = data?.offer2?.category?.find(o => parseInt(o) === cat || parseInt(o) === subCat || parseInt(o) === subSubCat )



    const cartList = useSelector((state) => state.cart.cartList)
    console.log(cartList, "");
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        setLoading(true)
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const { product, variant, vrcolor } = await httpReq.post('product-details', { product_id: params?.id });


            // set state with the result
            setProduct(product);
            setVariant(variant);
            setVrcolor(vrcolor);
            setLoading(false)

        }


        // call the function
        fetchData()
            // make sure to catch any error
            .catch((err) => {
                setLoading(false)
                console.log(err);
            })
            .finally(() => setLoading(false))

    }, [params.id])



    const price = parseInt(getPrice(product?.regular_price, product?.discount_price, product?.discount_type))

    const getColor = (color) => {
        setSelectColor(color)
        const result = variant?.filter(i => i.color === color)
        setSize(result)
    }

    const set_variant = (data) => {

        if (cartList.length) {

            const resul = cartList?.find(c => c?.id === product?.id && c?.color === data?.color && c?.size === data?.size && c?.unit === data?.unit && c?.volume === data?.volume)
            setResult(resul)


        }

        setSingleVariant(data)
    }

    const add_to_cart = (product) => {
        // console.log(product, "product");
        
        const productPrice = parseInt(getPrice(product?.regular_price, product?.discount_price, product?.discount_type))
        // httpReq.post('checkofferavail', {cat_id: product.category_id, price: product?.regular_price })
       

        setCall(!call)
        if (offer || offer2 !== undefined) {
            
                    dispatch(addToCartList({
                        cartId: makeid(100), variant_quantity: singleVariant?.quantity, variantId: singleVariant.id, ...singleVariant,

                        price: !isNaN(parseInt(singleVariant?.additional_price)) ? (productPrice + parseInt(singleVariant?.additional_price))-(data?.offer?.discount_type || data?.offer2?.discount_type  === "percent" ? (productPrice * (parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount) / 100)): parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount)): productPrice-(data?.offer?.discount_type || data?.offer2?.discount_type  === "percent" ? (productPrice * (parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount) / 100)): parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount)),
                        ...product
                    }))
              
        }
        else if ((offer || offer2 !== undefined) && variant.length > 0) {
            if (singleVariant.id) {


                if (singleVariant) {

                    dispatch(addToCartList({
                        cartId: makeid(100), variant_quantity: singleVariant?.quantity, variantId: singleVariant.id, ...singleVariant,

                        price: !isNaN(parseInt(singleVariant?.additional_price)) ? (productPrice + parseInt(singleVariant?.additional_price))-(data?.offer?.discount_type || data?.offer2?.discount_type  === "percent" ? (productPrice * (parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount) / 100)): parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount)) : productPrice-(data?.offer?.discount_type || data?.offer2?.discount_type  === "percent" ? (productPrice * (parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount) / 100)): parseInt(offer !== undefined ? data?.offer?.discount_amount : data?.offer2?.discount_amount)),
                        ...product
                    }))
                }
            } else {
                // dispatch(addToCartList({ cartId: makeid(100), color: null, size: null, additional_price: null, ...product }))
                alert('please select color and size')
            }
        }
        
        else if (variant.length > 0) {
            if (singleVariant.id) {


                if (singleVariant) {

                    dispatch(addToCartList({
                        cartId: makeid(100), variant_quantity: singleVariant?.quantity, variantId: singleVariant.id, ...singleVariant,

                        price: !isNaN(parseInt(singleVariant?.additional_price)) ? productPrice + parseInt(singleVariant?.additional_price) : productPrice,
                        ...product
                    }))
                }
            } else {
                // dispatch(addToCartList({ cartId: makeid(100), color: null, size: null, additional_price: null, ...product }))
                alert('please select color and size')
            }
        } 
        
        else {
            dispatch(addToCartList({ cartId: makeid(100), price: productPrice, color: null, size: null, additional_price: null, ...product }))

        }




    }
    const add_to_favourite = (id) => {
        httpReq.post('favourite', { product_id: id })
            .then(({ error, success }) => {
                if (success) {
                    toast(success, { type: "success" });
                }
                if (error) {
                    toast(error, { type: 'error' });
                }
            })
    }

    useEffect(() => {
        if (cartList?.length) {

            const result = cartList?.find(c => c?.id === product?.id && c?.color === singleVariant?.color && c?.size === singleVariant?.size && c?.unit === singleVariant?.unit && c?.volume === singleVariant?.volume)
            setResult(result)
            if (!result?.qty) {
                const result = cartList?.find(c => c?.id === product?.id && c?.color === null && c?.size === null && c?.unit === null && c?.volume === null)
                setResult(result)
            }
        }
    }, [call, cartList, product?.id, singleVariant?.size, singleVariant?.color, singleVariant?.volume, singleVariant?.unit])

    if (loading) {
        return <div className="flex justify-center h-screen items-center">
            <button className="btn loading">loading</button>
        </div>
    }
    if (!product?.id) {
        return (<div className='flex justify-center h-screen items-center capitalize text-3xl font-bold'>Product not Found</div>)
    }

    
    const quantity = (parseInt(Math.trunc(product?.quantity)));


    return (
        <div className='container mx-auto'>
            <div className="text-sm breadcrumbs md:mt-6 my-4 ">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Fashion</Link></li>
                    <li>{product?.category}</li>
                </ul>
            </div>
            <div className="grid md:grid-cols-8 grid-cols-1 md:gap-4 ">

                <div className="md:col-span-3">
                    <ImageSection images={product?.image} />

                </div>
                <div className="md:col-span-4 md:px-2">
                    <h2 className='text-3xl font-semibold text-black'>{product?.name}</h2>
                    <div className="flex justify-between items-center mt-6">
                        <div className=""><p className='capitalize' style={{ color: primaryColor }}> <span className='text-black'>Category: </span> {product?.category}</p></div>
                        {/* <div className="flex justify-start items-center gap-2"><p className='text-xl'><Rate rating={4.5} /></p> <p>(25 reviews)</p></div> */}
                    </div>
                    <div className="divider mt-2"></div>
                    <div className="flex justify-start items-center gap-x-4">
                        <h6 className='text-3xl font-semibold text-center m-0' style={{ color: primaryColor }}>
                            <Taka tk={singleVariant?.additional_price ? parseInt(price) + parseInt(singleVariant?.additional_price) : price} /> </h6>
                        
                        {product.discount_price === '0.00' ? " " : <p className='line-through text-md text-gray-400'> <Taka tk={product?.regular_price} /></p>}
                        {product?.discount_type === 'percent' && <p className='text-md text-gray-400'> {product?.discount_price}% Off</p>}

                    </div>
                    <div className="divider mt-2"></div>
                    <div className="mb-5">
                        <p className='text-black'>{product?.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2 text-black mb-4">
                        <div className="flex gap-2 justify-start items-center"><CgCrown size={20} /> <span>1 Year AL Jazeera Brand Warranty</span></div>
                        <div className="flex gap-2 justify-start items-center"><HiOutlineRefresh size={20} /> <span>30 Day Return Policy</span></div>
                        <div className="flex gap-2 justify-start items-center "><VscCreditCard size={20} /> <span>Cash on Delivery available</span></div>
                    </div>

                    {vrcolor?.length && <div className="flex gap-2 justify-start items-center mt-6 mb-2">
                        <h6 className='text-md font-semibold text-gray-700'>Color</h6>
                        {vrcolor?.map((i) => <ColorSelect key={i} select={selectColor} setSelect={setSelectColor} getColor={getColor} selectColor={i} bg={i} />)}


                    </div>}
                    {size.length !== 0 && <div className="flex gap-1 justify-start items-center mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        {size?.map((i) => <SizeSelect key={i.id} select={selectSize} setSelect={setSelectSize} setVariant={set_variant} data={i} selectSize={i?.size} />)}
                        <SizeView />

                    </div>}
                    {!vrcolor?.length && size.length !== 0 && <div className="flex gap-1 justify-start items-center mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        {variant?.map((i) =>
                            <SizeSelect key={i.id} select={selectSize} setSelect={setSelectSize} setVariant={set_variant} data={i} selectSize={i?.size} />)}

                    </div>}

                    {quantity === 0 ? <motion.button initial={{
                        backgroundColor: primaryColor,
                        color: "white"
                    }} whileHover={{
                        backgroundColor: "#f08e48"
                    }}

                        transition={{ duration: 0.4, ease: 'easeInOut' }} className='px-10 py-2 disabled rounded-md shadow-sm flex justify-between text-black items-center cursor-pointer text-lg font-medium'><h1>Out Of Stock</h1></motion.button> : 

                        <div className="flex gap-1">
                        {result?.qty ? <div style={{ backgroundColor: "primaryColor" }} className=" px-3 py-1 rounded-md shadow-sm flex justify-between text-black w-40 items-center">
                            <MinusIcon height={18}
                                onClick={() => {
                                    setCall(!call)
                                    dispatch(decrementQty(result?.cartId))
                                }}
                                className='text-2xl cursor-pointer' />
                            <span className='text-xl'>{result?.qty}</span>
                            <PlusIcon height={18} onClick={() => add_to_cart(product)} className='text-2xl cursor-pointer ' />
                        </div> :
                            <div className="">
                                {/* <label htmlFor="add">add to cart</label> */}
                                <motion.button initial={{
                                    backgroundColor: primaryColor,
                                    color: "white"
                                }} whileHover={{
                                    backgroundColor: "#f08e48"
                                }}

                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    onClick={() => add_to_cart(product)} className={`px-10 py-2 disabled rounded-md shadow-sm flex justify-between text-black items-center cursor-pointer text-lg font-medium `}>Add to cart</motion.button>
                            </div>
                        }


                        <motion.div onClick={() => add_to_favourite(product?.id)} className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <HeartIcon width={25} className="" />
                        </motion.div>
                        {/* <motion.div className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <BsShuffle size={15} className="" />
                        </motion.div> */}
                    </div>}
                    <div className="divider mt-12"></div>
                    <div className="flex flex-col gap-2">
                        <h6 className='text-black'> SKU: <span style={{ color: primaryColor }}>FWM15VKT</span></h6>
                        <h6 className='text-black' >Tags: <span style={{ color: primaryColor }}>Cloth, Women, Dress</span></h6>
                        {singleVariant?.quantity ? <h6 className='text-black'>Availability: <span className='text-green-400'>{singleVariant?.quantity} Items In Stock</span></h6> : <h6 className='text-black'>Availability: <span className='text-green-400'>{product?.quantity} Items In Stock</span></h6>}
                        <div className='flex items-center gap-x-3'>
                            <h6 className='text-black' >Share:</h6>
                            <div className="flex gap-x-3 items-center">

                                <FacebookShareButton url={window.location.href}>
                                    <FacebookIcon size={32} round={true} />
                                </FacebookShareButton>
                                <WhatsappShareButton url={window.location.href} >
                                    <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>


                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="flex justify-start items-center gap-10 my-10 uppercase tracking-wide">
                <motion.div whileHover={{ y: -5, transition: { duration: 0.3 }, color: primaryColor }} onClick={() => setTab('desc')} style={tab === 'desc' && activeStyle}>

                    <span className='text-lg font-semibold'>Description</span>

                </motion.div>

                <motion.div whileHover={{ y: -5, transition: { duration: 0.3 }, color: primaryColor }} onClick={() => setTab('review')} style={tab === 'review' && activeStyle}>
                    <span className='text-lg  font-semibold'>Reviews</span>
                </motion.div>
            </div>

            {
                tab === 'desc' && <Description desc={product?.description} />
            }
            {
                tab === 'review' && <Reviews id={product?.id} />
            }



            <RelatedProducts id={product?.category_id} />
        </div>
    );
};

export default SingleProduct;



const SizeView = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    return (<>
        <motion.div onClick={() => setOpen(!open)} className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
            <EyeIcon width={25} className="" />
        </motion.div>

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg text-left max-h-[80vh] py-3 overflow-y-scroll shadow-xl transform transition-all sm:my-8 ">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                    <img className='w-full h-full' src={sizeImg} alt="" />

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </>
    )
}


