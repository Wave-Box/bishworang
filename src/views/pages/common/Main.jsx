import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "../../../privateRoute/PrivateRoute";
import CartPopUp from "./CartPopUp";
import ScrollToTop from "../../components/utils/ScrollToTop";
// import About from "../static/About";
// import Contact from "../static/Contact";
// import Dashboard from "../dashboard/Dashboard";
// import ChangePassword from "../dashboard/password/ChangePassword";
// import Profile from "../dashboard/Profile/Profile";
// import DeliveryPolicy from "../static/DeliveryPolicy";
// import VerifyOtp from "../user/VerifyOtp";

// import CheckOut from "../checkOut/CheckOut";
// import Dashboard from "../dashboard/Dashboard";
// import Order from "../dashboard/Order/Order";
// import Profile from "../dashboard/Profile/Profile";

const PrivateRoute = React.lazy(() => import("../../../privateRoute/PrivateRoute"));
// const ScrollToTop = React.lazy(() => import("../../components/utils/ScrollToTop"));
const About = React.lazy(() => import("../static/About"));
const Contact = React.lazy(() => import("../static/Contact"));
const Dashboard = React.lazy(() => import("../dashboard/Dashboard"));
const ChangePassword = React.lazy(() => import("../dashboard/password/ChangePassword"));
const Profile = React.lazy(() => import("../dashboard/Profile/Profile"));
const DeliveryPolicy = React.lazy(() => import("../static/DeliveryPolicy"));
const VerifyOtp = React.lazy(() => import("../user/VerifyOtp"));

// const CartPopUp = React.lazy(() => import("./CartPopUp"));
const PrivacyPolicy = React.lazy(() => import("../static/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("../static/RefundPolicy"));
const ReturnPolicy = React.lazy(() => import("../static/ReturnPolicy"));
const TermsCondition = React.lazy(() => import("../static/TermsCondition"));
const CheckOut = React.lazy(() => import("../checkOut/CheckOut"));
const Order = React.lazy(() => import("../dashboard/Order/Order"));
const OrderDetails = React.lazy(() => import("../dashboard/Order/OrderDetails"));
const PublicRoute = React.lazy(() => import("../../../privateRoute/PublicRoute"));
const Forget = React.lazy(() => import("../user/Forget"));
const BlogDetails = React.lazy(() => import("../home/blog/BlogDetails"));
const Blog = React.lazy(() => import("../home/blog/Blog"));
const Success = React.lazy(() => import("../payment/Success"));
const Failed = React.lazy(() => import("../payment/Failed"));
const Risk = React.lazy(() => import("../payment/Risk"));
const StoreLocation = React.lazy(() => import("../static/StoreLocation"));
const Favourite = React.lazy(() => import("../favourite/Favourite"));
const Offer = React.lazy(() => import("../offer/Offer"));



// import PrivacyPolicy from "../static/PrivacyPolicy";
// import RefundPolicy from "../static/RefundPolicy";
// import ReturnPolicy from "../static/ReturnPolicy";
// import TermsCondition from "../static/TermsCondition";
// import CheckOut from "../checkOut/CheckOut";
// import Order from "../dashboard/Order/Order";
// import OrderDetails from "../dashboard/Order/OrderDetails";
// import PublicRoute from "../../../privateRoute/PublicRoute";
// import Forget from "../user/Forget";
// import BlogDetails from "../home/blog/BlogDetails";
// import Blog from "../home/blog/Blog";
// import Success from "../payment/Success";
// import Failed from "../payment/Failed";
// import Risk from "../payment/Risk";
// import StoreLocation from "../static/StoreLocation";
// import Favourite from "../favourite/Favourite";
// import Offer from "../offer/Offer";

const Home = React.lazy(() => import("../home/Home"));
const User = React.lazy(() => import("../user/User"));
const SingleProduct = React.lazy(() => import("../singleProduct/SingleProduct"));
const Shop = React.lazy(() => import("../shop/Shop"));



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