import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { button1 } from '../../../constant/color';
import { clearMessage } from '../../../redux/slices/message';
import httpReq from '../../../services/http.service';
import Subscribe from '../home/subscribe/Subscribe';

const Forget = () => {
    const [user, setUser] = useState({})
    const [page, setPage] = useState('find')
    // const [successful, setSuccessful] = useState(false);
    // const { message } = useSelector((state) => state.message);
    // const { success } = useSelector((state) => state.auth);
    // console.log(successful);
    // const { user } = useSelector((state) => state.auth);




    const dispatch = useDispatch();
    // const navigate = useNavigate();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    // console.log(errors);

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

                        {
                            page === 'otp' ? <Verifying setPage={setPage} setUser={setUser} user={user} /> :
                                page === 'find' ? <Finding setPage={setPage} setUser={setUser} /> :
                                    <Changeing setUser={setUser} setPage={setPage} user={user} />
                        }
                    </div>



                </section>


            </div >
            <Subscribe />
        </>
    );
};

export default Forget;





const Finding = ({ setPage, setUser }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors);
    const onSubmit = data => {
        setLoading(false)
        if (data.phone) {

            httpReq.post('forget-pass', { phone: data.phone })
                .then(res => {
                    if (res.otp === 'NULL') {

                        setPage('cng')
                        setUser(res)
                        setLoading(false)
                    } else {
                        setPage('otp')
                        setUser(res)
                        setLoading(false)

                    }
                })
                .catch(er => {
                    setLoading(false)
                    
                    console.log(er)
                })
            }else{
                
                setLoading(false)
        }
    }
    return (
        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Find Your Account</h4>
            <input
                {...register("phone", { required: true })}
                type="tel"
                placeholder='Phone number'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
            {errors.phone?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}

            {loading ?
                <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                :


                <input type="submit" value="Find" className='text-center py-3 px-8 rounded-md text-white font-sans font-bold tracking-wider' style={{ backgroundColor: button1.color }} />
            }
        </form>
    )
}
const Verifying = ({ setPage, setUser, user }) => {

    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // console.log(errors);
    const onSubmit = data => {

        if (data.otp) {
            setLoading(true);
            data['userid'] = user?.id
            httpReq.post('register/checkotp', data)
                .then(({ error, user, success }) => {
                    if (success) {
                        toast(success, { type: 'success' })
                    }
                    if (error) {
                        toast(error, { type: 'warning' })
                    }
                    if (user?.otp === 'NULL') {

                        setPage('cng')
                        setUser(user)
                    } else {
                        setPage('otp')
                        setUser(user)

                    }
                    setLoading(false);
                })
                .catch(er => {
                    setLoading(false);
                    console.log(er)
                })
        }

        // if (data.otp) {
        //     data['userid'] = user?.id
        //     console.log(data)
        //     setLoading(true);

        //     dispatch(verify(data))
        //         .unwrap()
        //         .then(() => {
        //             // navigate("/profile");
        //             // window.location.reload();
        //             setLoading(false);
        //             setPage('cng')

        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }
    }
    return (

        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Verify Your Account</h4>
            <input
                {...register("otp", { required: true })}
                type="tel"
                placeholder='Your OTP'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
            {errors.otp?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}

            <div className="flex justify-center">
                {loading ?
                    <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                    :


                    <input type="submit" value="Verify" className='text-left py-3 px-8 rounded-md text-white font-sans font-bold tracking-wider' style={{ backgroundColor: button1.color }} />
                }
            </div>
        </form>
    )
}
const Changeing = ({ setPage, setUser, user }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors)
    const onSubmit = data => {
        setLoading(true)
        if (data.password === data.confirm_password) {
            httpReq.post('password-change', { user_id: user.id, ...data })
                .then(res => {
                    if (res.id) {

                        toast("Successfully Forgot Your Password!", { type: 'success' })

                        navigate('/login')
                        setLoading(false)

                        setPage('find')
                        setUser({})
                    }
                    if (res.error) {
                        toast(res.error, { type: 'warning' })
                        setLoading(false)

                    }
                })
                .catch(er => {
                    setLoading(false)
                    console.log(er)
                })
        } else {
            toast("your password dosen't match", { type: 'warning', position: 'top-center', delay: 1 })
            setLoading(false)

        }
    }
    return (
        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Change Your Password</h4>
            <input
                {...register("password", { required: true, minLength: 8 })}

                type="password"

                placeholder='Passoword'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
            {errors.password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
            {errors.password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}



            <input
                type={'password'}
                {...register("confirm_password", { required: true, minLength: 8 })}
                placeholder='Confirm Password'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

            {errors.confirm_password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
            {errors.confirm_password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}


            <div className="flex justify-center">
                {loading ?
                    <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                    :


                    <input type="submit" value="Submit" className='text-left py-3 px-8 rounded-md text-white font-sans font-bold tracking-wider' style={{ backgroundColor: button1.color }} />
                }
            </div>
        </form>
    )
}