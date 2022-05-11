import React from 'react';
import { motion } from 'framer-motion';
import { Link1 } from '../../components/links';
import logo from '../../../assets/images/logo.png'
import store1 from '../../../assets/images/footer/app-store.jpg'
import store2 from '../../../assets/images/footer/google-play.jpg'
import payment from '../../../assets/images/footer/payment-method.png'
import { primaryColor } from '../../../constant';

const about = [{
    name: "About Us",
    link: '/'
},
{
    name: "Delivery Information",
    link: '/'
},
{
    name: "Privacy Policy",
    link: '/'
},
{
    name: "Terms & Conditions",
    link: '/'
},
{
    name: "Contact Us",
    link: '/'
},
{
    name: "Support Center",
    link: '/'
}]

const my_account = [{
    name: "Sign In",
    link: "/"
},
{
    name: "View Cart",
    link: "/"
},
{
    name: "My Wishlist",
    link: "/"
},
{
    name: "Track My Order",
    link: "/"
},
{
    name: "Help",
    link: "/"
},
{
    name: "Order",
    link: "/"
}]

const contact = [
    { name: "Address", value: "House: 140, Road: 06, Block: C, Bashundhara R / A Dhaka - 1229, Bangladesh" },

    { name: "Phone", value: "+88 01677515579" },

    { name: "Hours", value: "10: 00 - 18: 00, Sat - Thu" },
]

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container pt-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-2/6 md:w-1/2 w-full px-4">
                        <img src={logo} width={'120'} alt='' />
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl my-2">Contact</h2>
                        <nav className="list-none mb-10 space-y-1">
                            {contact.map((item, idx) => (
                                <li key={idx}>
                                    <p className="text-gray-600 hover:text-gray-800"><strong>{item.name}</strong>{item.value}</p>
                                </li>))}

                        </nav>
                    </div>

                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3">About</h2>
                        <nav className="list-none mb-10 space-y-2">

                            {about.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}

                        </nav>
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3">My Account</h2>
                        <nav className="list-none mb-10 space-y-2">
                            {my_account.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}
                        </nav>
                    </div>

                    <div className="lg:w-2/6 md:w-1/2 w-full px-4">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3">Install App</h2>

                        <div className="">
                            <p className="text-gray-500 text-base mt-2 md:text-left text-center">From App Store or Google Play</p>
                            <div className="flex gap-2 my-3 justify-center lg:justify-start">
                                <motion.img whileHover={{ y: -7, transition: { duration: 0.5 } }} src={store1} className='border-2 border-orange-400 rounded' alt="" />
                                <motion.img whileHover={{ y: -7, transition: { duration: 0.5 } }} src={store2} className='border-2 border-orange-400 rounded' alt="" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-base mt-2 md:text-left text-center">Secured Payment Gateways</p>
                            <div className=" gap-2 my-3 flex justify-center lg:justify-start">
                                <img src={payment} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row text-base">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2021, <span className='font-semibold' style={{ color: primaryColor }}>Wave Box</span> —
                        eCommerce Website
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Designed by <span className='font-semibold' style={{ color: primaryColor }}>Wave Box</span>| All right reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;