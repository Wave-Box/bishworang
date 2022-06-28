import React from 'react';
import { motion } from 'framer-motion';
import useTheme from '../../../hooks/useTheme';
import { getPrice } from '../utils/getPrice';
import { NavLink } from 'react-router-dom';
import { productImg } from '../../../siteSetting/siteUrl';
import Taka from '../utils/Taka';
const SearchBox = ({ search, setSearch }) => {
    console.log("search ", search);
    const { product } = useTheme()

    const result = product.filter(item => item?.name.toLowerCase().includes(search?.toLowerCase()))

    return (
        <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className='min-h-max shadow-xl w-full overflow-hidden bg-white absolute top-14 left-0 right-0 z-10'>
            <h3 className='text-lg font-semibold mx-6 py-1'>{result?.length} results for <span className='font-bold' style={{ color: '#AD171A' }}>"{search}"</span></h3>
            <div className="w-full flex flex-col gap-2 my-4">
                {result?.slice(0, 5).map((res) =>
                    <Single item={res} setSearch={setSearch} />
                )}
            </div>
        </motion.div>
    );
};

export default SearchBox;

const Single = ({ item, setSearch }) => {

    const price = parseInt(getPrice(item?.regular_price, item?.discount_price, item?.discount_type))

    return (
        <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex gap-2 items-center bg-white rounded-lg border shadow-md flex-row mx-4 hover:bg-gray-100 ">
            <img className="object-cover w-16 h-16 sm:w-24 sm:h-24 rounded-t-lg md:rounded-none md:rounded-l-lg" src={productImg + item?.image[0]} alt="" />
            <div className="flex flex-col justify-between leading-normal">
                <NavLink to={"/product/" + item?.id} onClick={() => setSearch('')} className="mb-2 text-sm   tracking-tight">{item.name.slice(0, 100)}</NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><Taka tk={price} /></p>
            </div>


        </motion.div>
    )
}