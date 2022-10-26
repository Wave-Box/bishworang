import React, { Suspense } from 'react';

// import FromBlog from './blog/FromBlog';
// import Features from './features/Features';
// import Furniture from './furniture/Furniture';
// import Hero from './hero/Hero';
// import LatestSession from './latestSession/LatestSession';
// import NewArrivals from './NewArrivals/NewArrivals';
// import PopularCategories from './PopularCategories/PopularCategories';
// import ProductSection from './product_Section/Product_Section';
// import RepairServices from './repair/RepairServices';
// import Subscribe from './subscribe/Subscribe';
// import TimerSection from './timer/TimerSection';
// import Video from './video/Video';

const FromBlog = React.lazy(() => import('./blog/FromBlog'));
const Features = React.lazy(() => import('./features/Features'));
const Furniture = React.lazy(() => import('./furniture/Furniture'));
const Hero = React.lazy(() => import('./hero/Hero'));
const LatestSession = React.lazy(() => import('./latestSession/LatestSession'));
const NewArrivals = React.lazy(() => import('./NewArrivals/NewArrivals'));
const PopularCategories = React.lazy(() => import('./PopularCategories/PopularCategories'));
const ProductSection = React.lazy(() => import('./product_Section/Product_Section'));
const RepairServices = React.lazy(() => import('./repair/RepairServices'));
const Subscribe = React.lazy(() => import('./subscribe/Subscribe'));
const TimerSection = React.lazy(() => import('./timer/TimerSection'));
const Video = React.lazy(() => import('./video/Video'));


const Home = () => {
    return (
        <>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Hero />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <ProductSection />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <RepairServices />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <PopularCategories />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Features />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <LatestSession />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Furniture />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <NewArrivals />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <TimerSection />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <FromBlog />
            </Suspense>
            {/* <ShopToday /> */}
            {/* <Feature /> */}
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Video />
            </Suspense>
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Subscribe />
            </Suspense>
        </>
    );
};

export default Home;