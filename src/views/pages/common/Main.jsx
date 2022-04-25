import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { SingleProduct } from "../singleProduct/SingleProduct";
// import { Home } from "../home/Home";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../user/Login"));
// code-splitting

const Main = () => {
    return (
        <div className="">
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main