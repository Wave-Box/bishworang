import React, { useEffect, useState } from 'react';
import {yellow } from '../../../siteSetting/theme';
import Address from './Address/Address';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import PropagateLoading from '../../../Components/Loader/PropagateLoading';
import axios from 'axios';
import { apiUrl } from '../../../siteSetting/ApiUrl';
import AlertSuccess from '../../../Components/Alert/AlertSuccess';
import { fetchUser } from '../../../redux/slice/userSlice';


const Profile = () => {
    const [call, setCall] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {


        return () => {
            dispatch(fetchUser())
            dispatch(fetchUser())
        }
    }, [dispatch, call])

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    const userInfo = useSelector((state) => state.user.userInfo)
    // console.log(userInfo);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token

        // const formData = new FormData()
        // formData.append('f_name', data?.f_name)
        // formData.append('l_name', data?.l_name)
        // formData.append('phone', data?.phone)
        // formData.append('image', data?.image[0])

        if (data?.image[0]) {
            toBase64(data?.image[0])
                .then(res => data.image = res.split('base64,')[1])

        }

        var reader = new FileReader();
        reader.onloadend = function() {
          console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(data?.image[0]);

        console.log(data);


        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        axios.put(`${apiUrl}/customer/update-profile`, data, {
            headers: headers
        })
            .then((response) => {
                console.log(response);
                AlertSuccess("Congratulations", response.data.message)
                setCall(!call)

            })
            .catch((error) => {
                console.log(error.response.data);
                // error.response.data?.errors.map(i => alert.show(i.message, { type: 'error' }))

            })
    }
    if (!userInfo) {
        return <PropagateLoading loading={true} />
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                        <div>

                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="image"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload an image</span>
                                            <input {...register("image")} id="image" name="image" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="f_name" className="block text-sm font-semibold text-gray-700">
                                First Name
                            </label>
                            <input
                                {...register("f_name")}
                                defaultValue={userInfo.f_name}
                                type="text"
                                name="f_name"
                                id="f_name"
                                autoComplete="f_name"
                                className="mt-1 p-3 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="l_name" className="block text-sm font-semibold text-gray-700">
                                Last Name
                            </label>
                            <input
                                {...register("l_name")}
                                defaultValue={userInfo.l_name}
                                type="text"
                                name="l_name"
                                id="l_name"
                                autoComplete="l_name"
                                className="mt-1 p-3 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                                Phone
                            </label>
                            <input
                                {...register("phone")}
                                defaultValue={userInfo.phone}
                                type='number'
                                name="phone"
                                id="phone"
                                autoComplete='phone'
                                className="mt-1 p-3 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="about" className="block text-sm font-semibold text-gray-700 ">
                                Bio
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={5}
                                    className="shadow-sm focus:outline-0 px-3  focus:border-gray-600 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder=" "
                                    defaultValue={''}
                                />
                            </div>

                        </div>




                    </div>
                    <div className="px-4 py-3 bg-white text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold tracking-widest rounded-md text-black"
                            style={{ backgroundColor: `${yellow}` }}
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </form>





            <Address />





            {/* <Number /> */}





        </>
    );
};

export default Profile;