import React from 'react';
import Aside from './aside';

const Contact = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6">
            <div className="min-w-max px-4">
                <Aside />

            </div>
            <div className='min-h-[600px] w-full text-center mt-10'>
                <h4 className='text-3xl font-semibold mt-3 font-sans'>Contact</h4>
                <h3 className='text-2xl font-bold my-2'>Bishworang</h3>
                <p className='font-semibold'>West Lamapara , Shibu Market, Link Road, Narayanganj - 1420, </p>
                <p>Call us <strong>10 AM – 7PM</strong></p>
                <p>Whatsapp- <a href="tel:+8801730068036"><strong>+8801730068036</strong></a></p>
                <p>Customer Support:  <a href="mailto:bishworangwebsite@gmail.com">
                    <strong>bishworangwebsite@gmail.com</strong>
                </a></p>
            </div>
        </div>
    );
};

export default Contact;