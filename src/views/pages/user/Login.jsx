import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { button1 } from '../../../constant/color';
import { login } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { facebook, google } from '../../../constant';
import { toast } from 'react-toastify';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const { signInWithGoogle, signInWithFacebook } = useAuth()




    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        dispatch(login(data))
            .unwrap()
            .then(({ verify, error }) => {
                
                if (error) {
                    toast(error, { type: 'error',
                    autoClose: 1000, })
                }
                if (verify) {
                    window.location.replace("/profile");
                } else {
                    window.location.replace("/verify-otp");
                    
                }

            })
            .catch((er) => {

                toast("Credential Doesn\"t Match", { type: 'error',
                autoClose: 1000, })

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



                <div className="flex justify-end items-center">
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
            
                <div className="flex space-x-2 justify-center">
                    <div
                        onClick={handleFacebookSignIn}
                        className='cursor-pointer text-white self-center font-semibold text-xs sm:text-base  px-6 py-3 rounded-md' style={{ backgroundColor: facebook }}>Login With Facebook</div>
                    <div
                        onClick={handleGoogleSignIn}
                        className='cursor-pointer text-white self-center font-semibold text-xs sm:text-base px-6 py-3 rounded-md' style={{ backgroundColor: google }}>Login With Google</div>
                </div>
          
        </>
    );
};

export default Login;