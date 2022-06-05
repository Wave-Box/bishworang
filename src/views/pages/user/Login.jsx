import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { button1 } from '../../../constant/color';
import { login } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(clearMessage());
        console.log(data)
        setLoading(true);
        dispatch(login(data))
            .unwrap()
            .then(() => {
                navigate("/profile");

            })
            .catch(() => {

                setLoading(false);
            });
    };
   

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

        </>
    );
};

export default Login;