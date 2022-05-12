import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CartPopUp from "./CartPopUp";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../user/Login"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));
// code-splitting

const Main = () => {
    return (
        <div className="relative">
            <Suspense fallback={<div className="flex justify-center h-80 items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />



                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
            <CartPopUp />
        </div>
    );
};

export default Main