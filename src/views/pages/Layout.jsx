import React from 'react';
import Footer from './common/Footer';
import Main from './common/Main';
import ackground from '../../assets/images/bg.jpg'
import HeaderTop from '../components/common/HeaderTop';
import HeaderDown from '../components/common/HeaderDown';
import HeaderMid from '../components/common/HeaderMid';
const Layout = () => {
    return (
        <>
            <div style={{ background: `url(${ackground}) no-repeat fixed contain`, backgroundSize: '480px 270px', position: 'relative' }}>

                <HeaderTop />
                <HeaderDown />

                <div className="" style={{
                    position: 'sticky',
                    top: 0, zIndex: 500,
                }}>
                    <HeaderMid />
                </div>


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


