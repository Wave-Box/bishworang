import React, { useState } from 'react';
import { CgCrown } from 'react-icons/cg'
import { VscCreditCard } from 'react-icons/vsc'
import { HiOutlineRefresh } from 'react-icons/hi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { BsShuffle, BsHeart } from "react-icons/bs";
import Rate from '../../components/utils/Rate';
import ColorSelect from '../../components/utils/ColorSelect';
import SizeSelect from '../../components/utils/SizeSelect';
import { primaryColor } from '../../../constant';
import { motion } from 'framer-motion'
import ImageSection from './ImageSection';
import { Link } from 'react-router-dom';
import Reviews from './Reviews/Reviews';



const SingleProduct = () => {
    const [selectColor, setSelectColor] = useState('black')
    const [selectSize, setSelectSize] = useState('XL')
    const [quantity, setQuantity] = useState(0)


    return (
        <div className='container mx-auto'>
             <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Fashion</Link></li>
                        <li>Abstract Print Patchwork Dress</li>
                    </ul>
                </div>
            <div className="grid grid-cols-8 md:gap-4 ">

                <div className="col-span-3 ">
                    <ImageSection />

                </div>
                <div className="col-span-4 px-2">
                    <h2 className='text-3xl font-semibold text-black'>Colorful Pattern Shirts HD450</h2>
                    <div className="flex justify-between items-center mt-6">
                        <div className=""><p className='' style={{color:primaryColor}}> <span className='text-black'>Brands: </span> Bootstrap</p></div>
                        <div className="flex justify-start items-center gap-2"><p className='text-xl'><Rate rating={4.5}/></p> <p>(25 reviews)</p></div>
                    </div>
                    <div className="divider mt-2"></div>
                    <div className="flex justify-start items-center gap-x-4">
                        <h6 className='text-3xl font-semibold text-center m-0' style={{color:primaryColor}}>
                            ${120.00} </h6>
                        <p className='line-through text-md text-gray-400'> ${200.00}</p>
                        <p className='text-md text-gray-400'> 25% Off</p>

                    </div>
                    <div className="divider mt-2"></div>
                    <div className="mb-5">
                        <p className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure perspiciatis laborum illum accusamus dolores distinctio quas ut iste laudantium. Error molestiae, facilis minima neque dolorem laudantium. Delectus, dolor vel.</p>
                    </div>
                    <div className="flex flex-col space-y-2 text-black">
                        <div className="flex gap-2 justify-start items-center"><CgCrown size={20} /> <span>1 Year AL Jazeera Brand Warranty</span></div>
                        <div className="flex gap-2 justify-start items-center"><HiOutlineRefresh size={20} /> <span>30 Day Return Policy</span></div>
                        <div className="flex gap-2 justify-start items-center"><VscCreditCard size={20} /> <span>Cash on Delivery available</span></div>
                    </div>

                    <div className="flex gap-2 justify-start items-center mt-6 mb-2">
                        <h6 className='text-md font-semibold text-gray-700'>Color</h6>
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'pink'} bg={'bg-pink-300'} />
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'black'} bg={'bg-black'} />
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'orange'} bg={'bg-orange-300'} />

                    </div>
                    <div className="flex gap-1 justify-start items-center mt-4 mb-7">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'S'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'M'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'L'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XL'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XXL'} />


                    </div>
                    <div className="flex gap-1">
                        <div className="flex justify-around border border-gray-300 w-20 rounded-md ">
                            <div className="flex justify-center items-center">
                                <p className='text-black'>{quantity}</p>
                            </div>
                            <div className="flex flex-col justify-around items-center text-black">
                                <MdKeyboardArrowUp onClick={() => setQuantity(quantity + 1)} />
                                <MdKeyboardArrowDown onClick={() => quantity && setQuantity(quantity - 1)} />
                            </div>
                        </div>
                        <div style={{ backgroundColor: primaryColor }} className="border border-gray-300 rounded-md text-white w-48 cursor-pointer">
                            <p className='text-white text-normal text-center text-lg py-2'>Add to cart</p>
                        </div>
                        <motion.div className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <BsHeart size={15} className="" />
                        </motion.div>
                        <motion.div className="border border-gray-300 rounded-md w-10 flex justify-center items-center text-black font-semibold" whileHover={{ y: -7, transition: { duration: 0.5 }, backgroundColor: primaryColor, color: 'white' }} >
                            <BsShuffle size={15} className="" />
                        </motion.div>
                    </div>
                    <div className="divider mt-12"></div>
                    <div className="flex flex-col gap-2">
                        <h6 className='text-black'> SKU: <span style={{ color: primaryColor }}>FWM15VKT</span></h6>
                        <h6 className='text-black' >Tags: <span style={{ color: primaryColor }}>Cloth, Women, Dress</span></h6>
                        <h6 className='text-black'>Availability: <span className='text-green-400'>8 Items In Stock</span></h6>
                    </div>
                </div>
               
            </div>
<Reviews />
        </div>
    );
};

export default SingleProduct;