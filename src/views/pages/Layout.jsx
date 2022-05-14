import React, { useEffect, useState } from 'react';
import Footer from './common/Footer';
import Main from './common/Main';
import ackground from '../../assets/images/bg.jpg'
import Header from './common/Header';
import HeaderSticky from '../components/common/HeaderSticky';
const Layout = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    console.log(scrollPosition);
    return (
        <>
            
            <div style={{ background: `url(${ackground}) repeat fixed center`, backgroundSize: '480px 270px', position: 'relative' }}>

                <header>
                    <Header />
                </header>
                {scrollPosition > 230 && <div className="" style={{
                    position: 'sticky',
                    top: 0, zIndex: 500,
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


