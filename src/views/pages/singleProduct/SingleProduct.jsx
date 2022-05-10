import React, { useState } from 'react';
import { CgCrown } from 'react-icons/cg'
import { VscCreditCard } from 'react-icons/vsc'
import { HiOutlineRefresh } from 'react-icons/hi'
import single from '../../../assets/images/product/1.jpg'
import Rate from '../../components/utils/Rate';
import ColorSelect from '../../components/utils/ColorSelect';
import SizeSelect from '../../components/utils/SizeSelect';

const SingleProduct = () => {
    const [selectColor, setSelectColor] = useState('black')
    const [selectSize, setSelectSize] = useState('XL')
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-5 md:gap-14">

                <div className="col-span-2">
                    <img src={single} alt="" />
                </div>
                <div className="col-span-2">
                    <h2 className='text-3xl font-semibold text-orange-400 '>Colorful Pattern Shirts HD450</h2>
                    <div className="flex justify-between items-center ">
                        <div className=""><p> <span>Brands: </span> Bootstrap</p></div>
                        <div className=""><Rate rating={4.5} /> <span>(25 reviews)</span></div>
                    </div>
                   
                    <div className="flex justify-start items-center gap-x-4">
                        <h6 className='text-3xl font-semibold text-center text-orange-400 m-0'>
                            ${120.00} </h6>
                        <p className='line-through text-md text-gray-400'> ${200.00}</p>
                        <p className='text-md text-gray-400'> 25% Off</p>

                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure perspiciatis laborum illum accusamus dolores distinctio quas ut iste laudantium. Error molestiae, facilis minima neque dolorem laudantium. Delectus, dolor vel.</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2 justify-start items-center"><CgCrown size={20} /> <span>1 Year AL Jazeera Brand Warranty</span></div>
                        <div className="flex gap-2 justify-start items-center"><HiOutlineRefresh size={20} /> <span>30 Day Return Policy</span></div>
                        <div className="flex gap-2 justify-start items-center"><VscCreditCard size={20} /> <span>Cash on Delivery available</span></div>
                    </div>

                    <div className="flex gap-2 justify-start items-center my-4">
                        <h6 className='text-md font-semibold text-gray-700'>Color</h6>
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'pink'} bg={'bg-pink-300'} />
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'black'} bg={'bg-black'} />
                        <ColorSelect select={selectColor} setSelect={setSelectColor} selectColor={'orange'} bg={'bg-orange-300'} />
                       
                    </div>
                    <div className="flex gap-1 justify-start items-center my-4">
                        <h6 className='text-md font-semibold text-gray-700 mr-2'>Size</h6>
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'S'} bg={'bg-pink-300'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'M'} bg={'bg-pink-300'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'L'} bg={'bg-pink-300'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XL'} bg={'bg-pink-300'} />
                        <SizeSelect select={selectSize} setSelect={setSelectSize} selectSize={'XXL'} bg={'bg-pink-300'} />
                       
                       
                    </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                    <p>Shoes and Bags</p>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;