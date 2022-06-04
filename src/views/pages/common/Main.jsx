import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../../privateRoute/PrivateRoute";
import ScrollToTop from "../../components/utils/ScrollToTop";
import About from "../static/About";
import Contact from "../static/Contact";
import Dashboard from "../dashboard/Dashboard";
import ChangePassword from "../dashboard/password/ChangePassword";
import Profile from "../dashboard/Profile/Profile";
import DeliveryPolicy from "../static/DeliveryPolicy";
import VerifyOtp from "../user/VerifyOtp";

// import CheckOut from "../checkOut/CheckOut";
// import Dashboard from "../dashboard/Dashboard";
// import Order from "../dashboard/Order/Order";
// import Profile from "../dashboard/Profile/Profile";
import CartPopUp from "./CartPopUp";
import PrivacyPolicy from "../static/PrivacyPolicy";
import RefundPolicy from "../static/RefundPolicy";
import ReturnPolicy from "../static/ReturnPolicy";
import TermsCondition from "../static/TermsCondition";
// import PrivateRoute from "../../../privateRoute/PrivateRoute";


// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Home = React.lazy(() => import("../home/Home"));
const User = React.lazy(() => import("../user/User"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));
const Shop = React.lazy(() => import("../shop/Shop"));
// code-splitting


const Main = () => {
    
    return (
        <div className="relative">
            <ScrollToTop />
            <Suspense fallback={<div className="flex justify-center h-screen items-center">
                <button className="btn loading">loading</button>
            </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/category/:id" element={<Shop />} />
                    <Route path="/shop" element={<Shop />} />


                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/delivery-policy" element={<DeliveryPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/return-policy" element={<ReturnPolicy />} />
                    <Route path="/terms-condition" element={<TermsCondition />} />


                    {/* Private Routes  */}
                    <Route path="profile" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
                        {/* <Route path="order" element={<Order />} /> */}
                    </Route>
                    {/* <Route path="checkout" element={<CheckOut />} /> */}

                    <Route path="/verify-otp" element={<VerifyOtp />} />
                    <Route path="/login" element={<User />} />
                </Routes>
            </Suspense>
            <CartPopUp />
        </div>
    );
};

export default Main