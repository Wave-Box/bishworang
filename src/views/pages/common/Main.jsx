import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "../../components/common/Drawer";
import CartPopUp from "./CartPopUp";


// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Home = React.lazy(() => import("../home/Home"));
const Login = React.lazy(() => import("../user/Login"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));
const Shop = React.lazy(() => import("../shop/Shop"));
// code-splitting


const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <div className="relative">
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/shop" element={<Shop />} />

                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
            <CartPopUp  open={openDrawer} setOpen={setOpenDrawer} />
            <Drawer open={openDrawer} setOpen={setOpenDrawer} />
        </div>
    );
};

export default Main