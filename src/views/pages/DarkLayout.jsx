import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
// import Main from './common/Main';

const DarkLayout = () => {
    return (
        <>
         <div className='bg-white'>
                <div>
                    <Header />
                </div>
                {/* <main>
                    <Main />
                </main> */}
                <div>
                    <Footer />
                </div>
            </div>
        
        </>
    );
};

export default DarkLayout;