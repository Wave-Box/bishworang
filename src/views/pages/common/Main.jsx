import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Description from "../singleProduct/Description/Description";
import Reviews from "../singleProduct/Reviews/Reviews";
import SingleProduct from "../singleProduct/SingleProduct";
// import { SingleProduct } from "../singleProduct/SingleProduct";
// import { Home } from "../home/Home";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../user/Login"));
// code-splitting

const Main = () => {
    return (
        <div className="">
            <Suspense fallback={<div className="flex justify-center h-80 items-center">
                <button class="btn loading">loading</button>
            </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />}>

                        <Route path="reviews" element={<Reviews />} />
                        <Route path="description" element={<Description />} />

                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main