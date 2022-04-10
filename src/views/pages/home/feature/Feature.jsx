import React from 'react';
import feature1 from '../../../../assets/images/features/feature-1.png'
import feature2 from '../../../../assets/images/features/feature-2.png'
import feature3 from '../../../../assets/images/features/feature-3.png'
import feature4 from '../../../../assets/images/features/feature-4.png'
import feature5 from '../../../../assets/images/features/feature-5.png'
import feature6 from '../../../../assets/images/features/feature-6.png'

const data = [
    {
        image: feature1,
        color: '#fddde4',
        text: 'Free Shipping'
    },
    {
        image: feature2,
        color: '#d1e8f2',
        text: 'Online Order'
    },
    {
        image: feature3,
        color: '#cdebbc',
        text: 'Save Money'
    },
    {
        image: feature4,
        color: '#cdd4f8',
        text: 'Promotions'
    },
    {
        image: feature5,
        color: '#f6dbf6',
        text: 'Happy Sell'
    },
    {
        image: feature6,
        color: '#fff2e5',
        text: '24/7 Support'
    },
]

const Feature = () => {
    return (
        <div className='grid md:grid-cols-6 gap-4 my-6'>
            {
                data.map((item, id) => <SingleFeature key={id} {...item} />)
            }
        </div>
    );
};

export default Feature;


const SingleFeature = ({ image, color, text }) => {
    console.log(color);
    return (
        <>
            <div className="border border-gray-300 rounded-md shadow-md flex flex-col p-4 gap-y-2">
                <div className="flex justify-center items-center">
                    <img src={image} width={150} height={100} alt="" className='p-1' />
                </div>
                <button className='rounded-md font-semibold p-1' style={{ backgroundColor: `${color}`, color: "#f27820" }}>{text}</button>

            </div>
        </>
    )
}

