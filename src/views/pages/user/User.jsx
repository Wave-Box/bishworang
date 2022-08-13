import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Subscribe from '../home/subscribe/Subscribe';
import Login from './Login';
import Register from './Register';

const User = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    if (isLoggedIn) {
        return navigate("profile");
    }

    return (
        <>

            <div className='container mx-auto px-4 sm:px-0'>
                <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Pages</Link></li>
                        <li>Login / Register</li>
                    </ul>
                </div>
            
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                    <div className="">
                        <Login />
                    </div>
                    <div className="">
                        <Register />
                    </div>


                </section>


            </div>
            <Subscribe />
        </>
    );
};

export default User;