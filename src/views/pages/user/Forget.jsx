import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { button1 } from '../../../constant/color';
import { forgot } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
import Subscribe from '../home/subscribe/Subscribe';

const Forget = () => {
    const [auth, setAuth] = useState(false)
    // const [successful, setSuccessful] = useState(false);
    // const { message } = useSelector((state) => state.message);
    // const { success } = useSelector((state) => state.auth);
    // console.log(successful);
    const { user } = useSelector((state) => state.auth);

    const [loading, setLoading] = useState(false);



    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors);
    const onSubmit = data => {
        console.log(data);
        console.log(user);
        console.log({ ...data })


        // setSuccessful(true);
        dispatch(forgot({ ...data }))
            .unwrap()
            .then((res) => {


                localStorage.setItem("user", JSON.stringify(res));
                // setSuccessful(false);

                navigate("/verify-otp/forgot");
                // window.location.reload();
            })
            .catch(() => {
                // setSuccessful(false);
            });

    }
    return (
        <>
            <div className='container mx-auto'>
                <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>Forgot ~ Password</li>
                    </ul>
                </div>

                <section className="flex justify-center">

                    <div className="max-w-md">

                        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-3xl font-semibold my-3 text-black text-center'>{auth ? "Forgot Your Password" : "Find Your Account"}</h4>


                            <input
                                {...register("password", { required: true, minLength: 8 })}

                                type="password"

                                placeholder='Passoword'
                                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                            {errors.password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}



                            <input
                                {...register("confirmPassword", { required: true, minLength: 8 })}
                                placeholder='Confirm Password'
                                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                            {errors.confirmPassword?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
                            {errors.confirmPassword?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}


                            <div className="flex justify-center">
                                {loading ?
                                    <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                                    :


                                    <input type="submit" value="Submit" className='text-left py-3 px-8 rounded-md text-white font-sans font-bold tracking-wider' style={{ backgroundColor: button1.color }} />
                                }
                            </div>


                        </form>
                    </div>



                </section>


            </div>
            <Subscribe />
        </>
    );
};

export default Forget;