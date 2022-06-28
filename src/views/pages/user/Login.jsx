import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { button1 } from '../../../constant/color';
import { login } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { facebook, google } from '../../../constant';
import { toast } from 'react-toastify';

const Login = () => {
    const [loading, setLoading] = useState(false);
    // const [authUser, setAuthUser] = useState({})

    const {
        // loginUser, isLoading, user, authError, 
        signInWithGoogle, signInWithFacebook } = useAuth()




    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        dispatch(login(data))
            .unwrap()
            .then(({ verify, error }) => {
                console.log(error);
                if (error) {
                    toast(error, { type: 'error' })
                }
                if (verify) {
                    console.log(verify);
                    // navigate("/profile", {
                    //     replace: true
                    // });
                    window.location.replace("/profile");
                } else {
                    navigate('/verify-otp')
                }

            })
            .catch((er) => {

                toast("Credential Doesn\"t Match", { type: 'error' })

                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {

        signInWithGoogle()
    }
    const handleFacebookSignIn = () => {

        signInWithFacebook()
    }
    return (
        <>
            <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-3xl font-semibold my-3 text-black'>Login</h4>



                <input
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder='Your Phone'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.phone?.type === 'required' && "phone Number is required"}</p>


                <input
                    {...register("password", { required: true })}
                    type='password'
                    placeholder='Password'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.password?.type === 'required' && "Password is required"}</p>



                <div className="flex justify-between items-center">
                    <label htmlFor='remember' className="label cursor-pointer gap-4">
                        <input type="checkbox" id='remember' className="checkbox border border-gray-300" />
                        <span className="label-text">Remember me</span>
                    </label>
                    <NavLink to='/forgot-password' className="label-text">Forgot password?</NavLink>
                </div>

                <div className="">
                    {loading ?
                        <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                        :
                        <input type="submit" value="Log in" className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} />
                    }
                </div>
            </form>
            <div className="divider">OR</div>
            <div className="flex justify-center">
                <div className="flex gap-4">
                    <button
                        onClick={handleFacebookSignIn}
                        className='text-white font-semibold text-base px-6 py-3 rounded-md' style={{ backgroundColor: facebook }}>Login With Facebook</button>
                    <button
                        onClick={handleGoogleSignIn}
                        className='text-white font-semibold text-base px-6 py-3 rounded-md' style={{ backgroundColor: google }}>Login With Google</button>
                </div>
            </div>
        </>
    );
};

export default Login;