import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './common/Main';
import ackground from '../../assets/images/bg.jpg'
const Layout = () => {
    return (
        <>
            <div style={{background: `url(${ackground}) repeat fixed center`,backgroundSize: '480px 270px'}}>
                <div>
                    <Header />
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


