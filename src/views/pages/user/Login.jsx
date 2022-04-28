import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, google } from '../../../constant';
import { button1 } from '../../../constant/color';
import Subscribe from '../home/subscribe/Subscribe';

const Login = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Pages</Link></li>
                        <li>Login / Register</li>
                    </ul>
                </div>

                <section className="grid grid-cols-2 gap-20">
                    <div className="">
                        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4">
                            <h4 className='text-3xl font-semibold my-3 text-black'>Login</h4>
                            <input type="email" placeholder='Your Email' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                            <input type='password' placeholder='Password' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                            <div className="flex justify-between items-center">
                                <label htmlFor='remember' className="label cursor-pointer gap-4">
                                    <input type="checkbox" id='remember' className="checkbox border border-gray-300" />
                                    <span className="label-text">Remember me</span>
                                </label>
                                <span className="label-text">Forgot password?</span>
                            </div>
                            <div className="">
                                <input type="submit" value="Log in" className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} />
                            </div>
                        </form>
                    </div>
                    <form className="border border-gray-300 rounded-2xl p-6 md:mx-0 md:my-14 flex flex-col space-y-4">
                        <h4 className='text-3xl font-semibold my-3 text-black'>Create an Account</h4>
                        <p className='pb-6 text-black text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>

                        <input type="text" placeholder='Username' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                        <input type="email" placeholder='Your Email' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                        <input type='password' placeholder='Password' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                        <input type='password' placeholder='Confrim password' className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                        <div className="flex justify-between items-center">
                            <label htmlFor='agree' className="label cursor-pointer gap-4">
                                <input type="checkbox" id='agree' className="checkbox border border-gray-300" />
                                <span className="label-text">I agree to terms & Policy</span>
                            </label>
                            <span className="label-text">Learn more</span>
                        </div>
                        <div className="">
                            <input type="submit" value="Submit & Register" className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} />
                        </div>
                        <div className="divider">OR</div>
                        <div className="flex justify-center">
                            <div className="flex gap-4">
                                <button className='text-white font-semibold text-base px-6 py-3 rounded-md' style={{ backgroundColor: facebook }}>Login With Facebook</button>
                                <button className='text-white font-semibold text-base px-6 py-3 rounded-md' style={{ backgroundColor: google }}>Login With Google</button>
                            </div>
                        </div>
                        <p className='text-center text-gray-500'>Already Have an Account? <a href="/" style={{ color: button1.color }}>Sign in now</a></p>
                    </form>

                </section>
            </div>

            <Subscribe />
        </>
    );
};

export default Login;