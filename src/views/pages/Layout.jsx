import React from 'react';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from './common/Footer';
import Main from './common/Main';
import ackground from '../../assets/images/bg.jpg'
import Header from './common/Header';
import HeaderSticky from '../components/common/HeaderSticky';
import { ToastContainer } from 'react-toastify';
import { bg_gary } from '../../siteSetting/theme';
import { HomePage } from '../../services';


const Layout = () => {
    const { isLoading } = HomePage.GetInfo()
    if (isLoading) {
        return <div className="flex justify-center h-screen items-center">
            <button className="btn loading">loading</button>
        </div>
    }
    return (
        <>
            <ToastContainer position="top-right" newestOnTop />
            <div className='' style={{ background: `url(${ackground}) repeat fixed center`, backgroundSize: '480px 270px', backgroundColor: bg_gary, backgroundBlendMode: 'luminosity', position: 'relative' }}>

                <header>
                    <Header />
                </header>
                <HeaderSticky />
                <main>
                    <Main />
                </main>
                <div>
                    <Footer />
                </div>
            </div>
            <div id="fb-root"></div>
            {/* <MessengerCustomerChat
                pageId="503044216521761"
                appId="852617662106865"
                htmlRef="fb-root"
            /> */}

        </>
    );
};

export default Layout;


