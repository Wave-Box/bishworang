import React from 'react';
import { motion } from 'framer-motion';
import { red } from '../../../../siteSetting/theme';
import httpReq from '../../../../services/http.service';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'



const Subscribe = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        httpReq.post("subscribe", data)
            .then(({ success, error }) => {
                if (error) {
                    toast(error, { type: 'error' })
                }
                if (success) {
                    toast(success, { type: 'success' })
                }
            })
    };

    return (
        <div className="" style={{ backgroundColor: red }}>
            <div className='grid sm:grid-cols-2 grid-cols-1  py-10  items-center container mx-auto px-4 sm:px-0'>
                <div className="col-span-2 md:col-span-1  flex justify-center sm:justify-start gap-4 my-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className='text-xl text-white font-semibold'>Sign up to Newsletter</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center space-y-2 sm:space-y-0 sm:justify-end flex-wrap col-span-2 md:col-span-1">
                    <input {...register("email", { required: true })} type='email' placeholder='Enter Your Email' className='bg-white  py-2 px-4 w-3/4 focus:outline-0 hover:border-0 hover:outline-0' />
                    <motion.input whileHover={{ backgroundColor: '#F27820' }} type="submit" value={"Subscribe"} className='bg-black text-gray-200   py-2 px-4 text-semibold' />
                </form>

            </div>
        </div>
    );
};

export default Subscribe;