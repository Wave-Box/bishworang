import React from 'react';
import { Link1 } from '../../components/links';
const about = [
    {
        name: "About Us",
        link: '/about'
    },
    {
        name: "Contact Us",
        link: '/contact'
    },
    {
        name: "Delivery Policy",
        link: '/delivery-policy'
    },
    {
        name: "Privacy Policy",
        link: '/privacy-policy'
    },
    {
        name: "Refund Policy",
        link: '/refund-policy'
    },
    {
        name: "return-policy",
        link: '/return-policy'
    },
    {
        name: "Terms & Conditions",
        link: '/terms-condition'
    },
    {
        name: "Blog",
        link: '/blog'
    }
]
const Aside = () => {
    return (
        <div className='flex flex-col list-none w-[287px] border-r pr-4'>
            {about.map((item, idx) => <div key={idx} className='border-b border-black py-4  font-bold'><Link1  text={item.name} href={item.link} /></div>)}
        </div>
    );
};

export default Aside;