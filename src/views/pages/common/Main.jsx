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
import CheckOut from "../checkOut/CheckOut";
import Order from "../dashboard/Order/Order";
import OrderDetails from "../dashboard/Order/OrderDetails";
import PublicRoute from "../../../privateRoute/PublicRoute";
import Forget from "../user/Forget";
import BlogDetails from "../home/blog/BlogDetails";
import Blog from "../home/blog/Blog";
import Success from "../payment/Success";
import Failed from "../payment/Failed";
import Risk from "../payment/Risk";
import StoreLocation from "../static/StoreLocation";
import Favourite from "../favourite/Favourite";
import Offer from "../offer/Offer";
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
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/favourite" element={<Favourite />} />


                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/location" element={<StoreLocation />} />
                    <Route path="/delivery-policy" element={<DeliveryPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/return-policy" element={<ReturnPolicy />} />
                    <Route path="/terms-condition" element={<TermsCondition />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogDetails />} />


                    {/* Private Routes  */}
                    <Route path="profile" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
                        <Route path="order" element={<PrivateRoute><Order /></PrivateRoute>} />
                        <Route path="order/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
                    </Route>
                    <Route path="checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />

                    <Route path="/verify-otp" element={<PublicRoute><VerifyOtp /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><User /></PublicRoute>} />
                    <Route path="/forgot-password" element={<PublicRoute><Forget /></PublicRoute>} />


                    <Route path="/success" element={<PrivateRoute><Success /></PrivateRoute>} />
                    <Route path="/failed" element={<PrivateRoute><Failed /></PrivateRoute>} />
                    <Route path="/risk" element={<PrivateRoute><Risk /></PrivateRoute>} />


                </Routes>
            </Suspense>
            <CartPopUp />
        </div>
    );
};

export default Main