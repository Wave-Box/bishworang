import React, { useState } from 'react';
import Footer from './common/Footer';
import Main from './common/Main';
import ackground from '../../assets/images/bg.jpg'
import Header from './common/Header';
import HeaderSticky from '../components/common/HeaderSticky';
import { ToastContainer } from 'react-toastify';
import { bg_gary } from '../../siteSetting/theme';
const Layout = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 260) {

            setScrollPosition(position);
        } else {
            setScrollPosition(0)
        }
    };

   
    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <ToastContainer position="top-right" newestOnTop />
            <div className='' style={{ background: `url(${ackground}) repeat fixed center`, backgroundSize: '480px 270px',backgroundColor:bg_gary, backgroundBlendMode:'luminosity', position: 'relative', scrollBehavior: 'smooth' }}>
 
                <header>
                    <Header />
                </header>
                 {scrollPosition > 260 && <div className="" style={{
                    position: 'sticky',
                    top: 0, zIndex: 10,
                }}>
                    <HeaderSticky />
                </div>} 

                <main>
                    <Main />
                </main>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;


