import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
// import { button1 } from '../../../constant/color';
import { verify } from '../../../redux/slices/auth';
import { clearMessage } from '../../../redux/slices/message';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Subscribe from "../home/subscribe/Subscribe";
// import Countdown from "react-countdown";
import { red } from "../../../siteSetting/theme";

const VerifyOtp = () => {
    // const [disable, setdisable] = useState(false)
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    // const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data['userid'] = user?.id
        
        setLoading(true);
        dispatch(verify(data))
            .unwrap()
            .then((res) => {
                
                // navigate("/profile");
                window.location.replace("/profile");
                setLoading(false);

            })
            .catch(() => {
                setLoading(false);
            });
    };


    // if (isLoggedIn) {
    //     return navigate("/profile");
    // }

    // Renderer callback with condition
    // const renderer = ({ hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //         // Render a completed state
    //         setdisable(true)
    //         return <div>Expired</div>;
    //     } else {
    //         // Render a countdown
    //         return <span>{minutes}:{seconds}</span>;
    //     }
    // };
    return (
        <>
            <div className='container mx-auto'>
                <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>Verify ~ OTP</li>
                    </ul>
                </div>

                <section className="flex justify-center">

                    <div className="max-w-md">

                        <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Verify Your Phone Number</h4>
                            <input
                                {...register("otp", { required: true })}
                                type='number'
                                placeholder='Your OTP'
                                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                            <p className='text-red-400'> {errors.otp?.type === 'required' && "OTP is required"}</p>


                            {loading ?
                                <p className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[${red}] text-white hover:bg-red-900 hover:text-gray-200`}  >Loading</p>
                                :
                                // disable ?
                                //     <input type="submit" value="Resend Otp" disabled className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} /> :
                                    <input type="submit" value="Verify" className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[${red}] text-white hover:bg-red-900 hover:text-gray-200`}  />
                            }

                            {/* <div className="flex justify-center">
                                <Countdown
                                    date={Date.now() + 60000}
                                    renderer={renderer}
                                />
                            </div> */}
                        </form>
                    </div>



                </section>


            </div>
            <Subscribe />
        </>
    );
};

export default VerifyOtp;