import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { button1 } from '../../../constant/color';
import { signUp } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
const Register = () => {
    const [successful, setSuccessful] = useState(false);
    const { success } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
        dispatch(clearMessage());

        setSuccessful(true);
        dispatch(signUp(data))
            .unwrap()
            .then((res) => {
                if (res?.error) {
                    toast(res?.error, { type: 'error' })
                }else{

                    setSuccessful(false);
                    navigate("/verify-otp");
                    window.location.reload();
                }
            })
            .catch((err) => {
                setSuccessful(false);
                console.log(err);
            });

    }



    return (
        <>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-gray-300 rounded-2xl p-6 md:mx-0 md:my-14 flex flex-col space-y-4"
            >
                <h4 className='text-3xl font-semibold my-3 text-black'>Create an Account</h4>
                <p className='pb-6 text-black text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>


                {success && (
                    <div className="form-group">
                        <div className="alert text-green-400 font-semibold" role="alert">
                            <p className='text-center'> {success}</p>
                        </div>
                    </div>
                )}


                <input
                    {...register("name")}
                    type="text"
                    placeholder='Name'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                <input
                    {...register("email")}
                    type="email"
                    placeholder='Email'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />


                <input
                    {...register("phone", { required: true })}
                    type='number'
                    placeholder='Phone'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                {errors.phone?.type === 'required' && <p className='text-red-400'>Phone number is required</p>}


                <input
                    {...register("password", { required: true })}
                    type='password'
                    placeholder='Password'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}


                <div className="flex justify-between items-center">
                    <label htmlhtmlFor='agree' className="label cursor-pointer gap-4">
                        <input type="checkbox" id='agree' className="checkbox border border-gray-300" />
                        <span className="label-text">I agree to terms & Policy</span>
                    </label>
                    <span className="label-text">Learn more</span>
                </div>
                <div className="">


                    {successful ?
                        <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                        :
                        <input type="submit" value="Register" className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} />
                    }
                </div>
                <p className='text-center text-gray-500'>Already Have an Account? <a href="/" style={{ color: button1.color }}>Sign in now</a></p>
            </form>

        </>
    );
};

export default Register;