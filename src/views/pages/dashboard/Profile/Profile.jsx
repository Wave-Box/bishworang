import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import httpReq from '../../../../services/http.service';
import { profileImg } from '../../../../siteSetting/siteUrl';
import DataLoader from '../../../components/Loader/DataLoader';


const Profile = () => {
    const { user } = useSelector((state) => state.auth)

    const [userData, setuserDetails] = useState(null)
    const [call, setCall] = useState(false)

    const { register, handleSubmit } = useForm({
        defaultValues: userData
    });

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await httpReq.get('getuser');


            // set state with the result
            setuserDetails(data);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [call])

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const update_profile = (res) => {
        
        httpReq.post('user/updateprofile', res)
            .then(res => {
                setCall(!call)
                toast("Profile updated successfully!", {
                    type: 'success'
                })
            })
            .catch(er => {
                console.log(er);
            })
    }


    const onSubmit = data => {

        
        if (data?.image[0]) {
            

            if (data?.image[0].size > 2024000) {
                toast("Your Image very large more then 2MB!", {
                    type: 'warning'
                })
            }
            toBase64(data?.image[0])
                .then(res => {

                    update_profile({
                        user_id: user?.id,
                        phone: user?.phone,
                        ...data,
                        image: res,
                    })

                })


        } else {
            
            update_profile({
                user_id: user?.id,
                phone: user?.phone,
                ...data,
            })
        }



    };


    return (
        <>




            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-3">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Personal Information</h3>
                            {/* <p className="text-base font-medium leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}
                        </div>
                    </div>
                    {userData ?
                        <div className="mt-5 md:mt-0 md:col-span-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">


                                            <div className="col-span-6 ">
                                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                                <div className="mt-1 flex items-center">
                                                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                        {userData.image ? <img src={profileImg + userData?.image} alt='' className='object-fit' /> : <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>}
                                                    </span>
                                                    <label
                                                        htmlFor="image"
                                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none hover:ring-2 focus:ring-offset-2 hover:ring-indigo-500  cursor-pointer"
                                                    >

                                                        <span>Change</span>
                                                        <input {...register("image")} id="image" name="image" type="file" className="sr-only" />

                                                    </label>
                                                </div>
                                            </div>


                                            <div className="col-span-6 ">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Full name
                                                </label>
                                                <input
                                                    defaultValue={userData?.name}
                                                    {...register("name")}
                                                    type="text"

                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 ">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input

                                                    {...register("email")}
                                                    type='email'
                                                    defaultValue={userData?.email}
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 ">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Mobile Number
                                                </label>
                                                <input
                                                    defaultValue={userData?.phone}
                                                    disabled={true}
                                                    type="tel"

                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 ">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Address
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        defaultValue={userData?.address}
                                                        {...register("address")}

                                                        rows={3}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                        placeholder="Your Address"

                                                    />
                                                </div>
                                            </div>





                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#AD173A] hover:bg-red-500 focus:outline-none focus:ring-0"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> :
                        <DataLoader />
                    }
                </div>
            </div>


        </>
    );
};

export default Profile;

