
import React from 'react';
import { Link1 } from '../../components/links';
import fb from '../../../assets/images/footer/facebook.png'
import wp from '../../../assets/images/footer/whatsapp.png'
import ins from '../../../assets/images/footer/instagram.png'
import yt from '../../../assets/images/footer/youtube.png'
import payment from '../../../assets/images/footer/SSLCOMMERZ Pay With logo All Size_Aug 21-05-Nov-18-2021-05-46-29-86-AM (1).png'
import { primaryColor } from '../../../constant';
import { imgUrl } from '../../../siteSetting/siteUrl';
import { HomePage } from '../../../services';


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
        name: "Return-Policy",
        link: '/return-policy'
    },
    {
        name: "Terms & Conditions",
        link: '/terms-condition'
    },
    {
        name: "Our Outlets",
        link: '/location'
    }]


const my_account = [{
    name: "Sign In",
    link: "/login"
},
{
    name: "My Profile",
    link: "/profile"
},


{
    name: "Help",
    link: "/contact"
},
{
    name: "Order",
    link: "/profile/order"
}]

const contact = [
    { name: "Address: ", value: " West Lamapara , Shibu Market, Link Road, Narayanganj - 1420" },

    { name: "Phone: ", value: "+88 01730 068 036" },

    { name: "Hours: ", value: "10 AM – 7PM, Sat - Thu" },
]

const Footer = () => {
    const { data } = HomePage.GetInfo()
    return (
        <footer className="text-gray-600 body-font bg-white mt-10 drop-shadow-xl">
            <div className="container pt-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-2/5 md:w-1/2 w-full px-4">
                        <div className="flex justify-center sm:justify-start w-full">
                            <img className="mb-8" src={imgUrl + data?.settings?.logo} width={'120'} alt='' />
                        </div>
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl my-2">Contact</h2>
                        <nav className="list-none mb-10 space-y-1">
                            {contact.map((item, idx) => (
                                <li key={idx}>
                                    <p className="text-gray-600 hover:text-gray-800"><strong>{item.name}</strong>{item.value}</p>
                                </li>))}

                        </nav>
                    </div>

                    <div className="lg:w-1/5 md:w-1/2 w-full px-4 ">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3 jus">About</h2>
                        <nav className="list-none mb-10 space-y-2">

                            {about.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}

                        </nav>
                    </div>

                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3">My Account</h2>
                        <nav className="list-none mb-10 space-y-2">
                            {my_account.map((item, idx) => <Link1 key={idx} text={item.name} href={item.link} />)}
                        </nav>
                    </div>

                    <div className="lg:w-1/5 md:w-1/2 w-full px-4 flex flex-col items-center justify-center md:items-end">
                        <h2 className=" font-semibold text-gray-900 tracking-widest text-xl mb-3">Social Media</h2>

                        <div className="flex items-center gap-2">

                            <a href={data.settings.facebook_link} target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full'><img src={fb} alt="" /></a>
                            <a href={"https://api.whatsapp.com/send?phone=" + data.settings.facebook_link} target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full'><img src={wp} alt="" /></a>
                            <a href={data.settings.instagram_link} target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full'><img src={ins} alt="" /></a>
                            <a href={data.settings.youtube_link} target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full'><img src={yt} alt="" /></a>

                        </div>
                    </div>
                </div>
                <div>
                    <img src={payment} href="" alt="" />
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row text-base">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2022, <span className='font-semibold'>Bishworang</span> | All right reserved
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Designed by <span href="https://wavebox.net" className='font-semibold' style={{ color: primaryColor }}>Wave Box</span></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;