import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "../../components/common/Drawer";
import ScrollToTop from "../../components/utils/ScrollToTop";
import VerifyOtp from "../user/VerifyOtp";

// import CheckOut from "../checkOut/CheckOut";
// import Dashboard from "../dashboard/Dashboard";
// import Order from "../dashboard/Order/Order";
// import Profile from "../dashboard/Profile/Profile";
import CartPopUp from "./CartPopUp";
// import PrivateRoute from "../../../privateRoute/PrivateRoute";


// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Home = React.lazy(() => import("../home/Home"));
const User = React.lazy(() => import("../user/User"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));
const Shop = React.lazy(() => import("../shop/Shop"));
// code-splitting


const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <div className="relative">
            <ScrollToTop />
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/shop" element={<Shop />} />


                    {/* Private Routes  */}
                    {/* <Route path="profile" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="order" element={<Order />} />
                    </Route>
                    <Route path="checkout" element={<CheckOut />} /> */}

                    <Route path="/verify-otp" element={<VerifyOtp />} />
                    <Route path="/login" element={<User />} />
                </Routes>
            </Suspense>
            <CartPopUp open={openDrawer} setOpen={setOpenDrawer} />
            <Drawer open={openDrawer} setOpen={setOpenDrawer} />
        </div>
    );
};

export default Main