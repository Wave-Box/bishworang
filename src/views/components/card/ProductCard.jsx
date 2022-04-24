import React from 'react';
import product_1 from '../../../assets/images/product/1.jpg'
import product_2 from '../../../assets/images/product/2.jpg'
import { HeartIcon } from '@heroicons/react/outline'
import './productCard.css'

const ProductCard = () => {
    return (
        <div className="">
            <div class="card shadow-xl rounded-xl group relative w-80">
                <figure>
                    <img src={product_1} width={290} alt="Shoes" className='group-hover:hidden rounded-xl' />
                    <img src={product_2} width={290} alt="Shoes" className='group-hover:block hidden rounded-xl' />
                    <div className="absolute  gap-2 top-28 flex justify-center left-0 right-0">
                        <HoverIcon text={"Quick View"} />
                        <HoverIcon text={'Add to Wishlist'} />
                        <HoverIcon text={'Compare'} />
                    </div>
                    <div class="badge badge-secondary absolute top-2 left-6">NEW</div>
                </figure>
                <div class="card-body p-4 gap-1 absolute bottom-0 left-0 right-0 bg-white">
                    <p className='text-xs '>Shirt</p>
                    <h2 class="card-title text-black">
                        Plain Color Pocket Shirts
                    </h2>
                    <p>70%</p>
                    <h6 className='text-lg font-semibold  text-orange-400'>
                        $28.80 <span className='line-through text-sm text-gray-400'> $23.66</span>
                    </h6>

                    <div className="absolute bottom-6 right-6">
                        <HoverIcon text={"Add to Cart"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


const HoverIcon = ({ text }) => {
    return (
        <div className="p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 hover:text-white hover:-mt-2 transition-all duration-500 ease-in-out">
            <HeartIcon className='h-5 w-5  text-2xl font-serif font-bold' />
            <p className="bg-orange-700 rounded-md shadow-sm pb-3 pt-1 font-semibold absolute -top-16 m-1 -left-8 px-2  invisible child_icon translate-y-6 transition-all duration-500 ease-in-out text-center text-xs text-gray-300">{text}</p>
        </div>
    )
}

// const CartIcon = ({ text }) => {
//     return (
//         <div className="p-3 icon rounded-full bg-orange-50 relative hover:bg-orange-700 hover:text-white hover:-mt-2 transition-all duration-500 ease-in-out">
//             <HeartIcon className='h-5 w-5  text-2xl font-serif font-bold' />
//             <p className="bg-orange-700 rounded-md shadow-sm pb-3 pt-1 font-semibold absolute -top-20 m-1 -left-10 px-2  invisible child_icon translate-y-6 transition-all duration-500 ease-in-out text-center">{text}</p>
//         </div>
//     )
// }