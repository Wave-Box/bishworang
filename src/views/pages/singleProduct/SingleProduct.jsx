import React, { useEffect, useState } from 'react';
import { CgCrown } from 'react-icons/cg'
import { VscCreditCard } from 'react-icons/vsc'
import { HiOutlineRefresh } from 'react-icons/hi'
import { BsHeart } from "react-icons/bs";
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
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';




const SingleProduct = () => {
    const [selectColor, setSelectColor] = useState('')
    const [selectSize, setSelectSize] = useState('')
    const [tab, setTab] = useState('desc')

    // const location = useLocation()
    // console.log(location.pathname);
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
    // const [load, setLoad] = useState(false)
    const [result, setResult] = useState({})
    const [call, setCall] = useState(false)
    // console.log(product);
    const { makeid } = useTheme()


    const cartList = useSelector((state) => state.cart.cartList)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const { product, variant, vrcolor } = await httpReq.post('product-details', { product_id: params?.id });

            // console.log(result);
            // set state with the result
            setProduct(product);
            setVariant(variant);
            setVrcolor(vrcolor);

        }


        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);

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

            console.log(resul);
        }
        console.log(data);
        setSingleVariant(data)
    }

    const add_to_cart = (product) => {
        const productPrice = parseInt(getPrice(product?.regular_price, product?.discount_price, product?.discount_type))
        setCall(!call)
        if (variant.length) {
            if (singleVariant.id) {

                console.log("enough quantity");
                if (singleVariant) {
                    console.log("singe", singleVariant);
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
        } else {
            dispatch(addToCartList({ cartId: makeid(100), price: productPrice, color: null, size: null, additional_price: null, ...product }))

        }




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

    if (!product?.id) {
        return (<div className='flex justify-center h-screen items-center capitalize text-3xl font-bold'>Product not Found</div>)
    }
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
                            ${singleVariant?.additional_price ? parseInt(price) + parseInt(singleVariant?.additional_price) : price} </h6>
                        <p className='line-through text-md text-gray-400'> ${product?.regular_price}</p>
                        {product?.discount_type === 'percent' && <p className='text-md text-gray-400'> {product?.discount_price}% Off</p>}

                    </div>
                    <div className="divider mt-2"></div>
                    <div className="mb-5">
                        <p className='text-black'>{product?.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2 text-black">
                        <div className="flex gap-2 justify-start items-center"><CgCrown size={20} /> <span>1 Year AL Jazeera Brand Warranty</span></div>
                        <div className="flex gap-2 justify-start items-center"><HiOutlineRefresh size={20} /> <span>30 Day Return Policy</span></div>
                        <div className="flex gap-2 justify-start items-center"><VscCreditCard size={20} /> <span>Cash on Delivery available</span></div>
                    </div>

                    {vrcolor?.length && <div className="flex gap-2 justify-start items-center mt-6 mb-2">
                        <h6 className='text-md font-semibold text-gray-700'>Color</h6>
                        {vrcolor?.map((i) => <ColorSelect key={i} select={selectColor} setSelect={setSelectColor} getColor={getColor} selectColor={i} bg={i} />)}


                    </div>}
                    {size.length !== 0 && <div className="flex gap-1 justify-start items-center mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        {size?.map((i) => <SizeSelect key={i.id} select={selectSize} setSelect={setSelectSize} setVariant={set_variant} data={i} selectSize={i?.size} />)}

                    </div>}
                    {!vrcolor?.length && <div className="flex gap-1 justify-start items-center mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        {variant?.map((i) =>
                            <SizeSelect key={i.id} select={selectSize} setSelect={setSelectSize} setVariant={set_variant} data={i} selectSize={i?.size} />)}

                    </div>}

                    <div className="flex gap-1">
                        {/* <div className="flex justify-around border border-gray-300 w-20 rounded-md ">
                            <div className="flex justify-center items-center">
                                <p className='text-black'>{quantity}</p>
                            </div>
                            <div className="flex flex-col justify-around items-center text-black">
                                <MdKeyboardArrowUp onClick={() => setQuantity(quantity + 1)} />
                                <MdKeyboardArrowDown onClick={() => quantity && setQuantity(quantity - 1)} />
                            </div>
                        </div> */}



                        {result?.qty ? <div style={{ backgroundColor: primaryColor }} className=" px-3 py-1 rounded-md shadow-sm flex justify-between text-black w-40 items-center">
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
                                <button style={{ backgroundColor: primaryColor }} onClick={() => add_to_cart(product)} className="px-10 py-2 rounded-md shadow-sm flex justify-between text-black items-center cursor-pointer text-lg font-medium">Add to cart</button>
                            </div>
                        }

                        <motion.div className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <BsHeart size={15} className="" />
                        </motion.div>
                        {/* <motion.div className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <BsShuffle size={15} className="" />
                        </motion.div> */}
                    </div>
                    <div className="divider mt-12"></div>
                    <div className="flex flex-col gap-2">
                        <h6 className='text-black'> SKU: <span style={{ color: primaryColor }}>FWM15VKT</span></h6>
                        <h6 className='text-black' >Tags: <span style={{ color: primaryColor }}>Cloth, Women, Dress</span></h6>
                        {singleVariant?.quantity ? <h6 className='text-black'>Availability: <span className='text-green-400'>{singleVariant?.quantity} Items In Stock</span></h6> : <h6 className='text-black'>Availability: <span className='text-green-400'>{product?.quantity} Items In Stock</span></h6>}
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