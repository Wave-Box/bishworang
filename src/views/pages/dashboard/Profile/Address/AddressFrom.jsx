import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { black } from '../../../../siteSetting/theme'

import { useAlert } from 'react-alert'
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { apiUrl } from '../../../../siteSetting/ApiUrl';
import AlertSuccess from '../../../../Components/Alert/AlertSuccess';
import AlertWraning from '../../../../Components/Alert/AlertWraning';
import axios from 'axios';

const AddressFrom = ({ call, setCall, setOpen, open }) => {
    const [address_type, setAddress_type] = useState(null)

    const cancelButtonRef = useRef(null)

    const alert = useAlert()
    const user = useSelector((state) => state.user.userInfo)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
        data = {
            ...data,
            contact_person_number: user?.phone,
            address_type: address_type,

        }
        
        if (token && data?.contact_person_number && data?.address_type && data?.contact_person_name && data?.address) {
          
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            axios.post(`${apiUrl}/customer/address/add`, data, {
                headers: headers
            })
                .then((response) => {
                    console.log(response);
                    AlertSuccess("Congratulations",response.data.message)
                    setCall(!call)
                    reset()
                })
                .catch((error) => {
                    error.response.data?.errors.map(i => alert.show(i.message, { type: 'error' }))

                })
        } else {
            AlertWraning("You Have Missing Data!")
            // alert.show("You Have Missing Data!", { type: 'error' })
        }




    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-center justify-center py-4">

                                    <div className="mt-3 text-center sm:mt-0  sm:w-full">
                                        <Dialog.Title as="h3" className="text-xl leading-6 font-semibold text-gray-900 text-center mb-4">
                                            Add New Address
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                                        <fieldset className='text-left'>
                                                            <div>
                                                                <legend className="text-base font-semibold text-gray-700">Type</legend>

                                                            </div>
                                                            <div className="mt-4 space-x-4 flex">
                                                                <div className="flex items-center">
                                                                    <input
                                                                        onChange={(e) => setAddress_type(e.target.value)}
                                                                        id="Billing"
                                                                        name="address_type"
                                                                        type="radio"
                                                                        value={"Billing"}
                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                    />
                                                                    <label htmlFor="Billing" className="ml-3 block text-sm font-medium text-gray-700">
                                                                        Billing
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <input
                                                                        onChange={(e) => setAddress_type(e.target.value)}
                                                                        id="Shipping"
                                                                        name="address_type"
                                                                        type="radio"
                                                                        value={'Shipping'}
                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                    />
                                                                    <label htmlFor="Shipping" className="ml-3 block text-sm font-medium text-gray-700">
                                                                        Shipping
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </fieldset>


                                                        <div className="col-span-6 sm:col-span-4">
                                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 text-left">
                                                                Name
                                                            </label>
                                                            <input
                                                                {...register("contact_person_name")}
                                                                type="text"
                                                                name="contact_person_name"
                                                                id="name"
                                                                autoComplete="email"
                                                                className="mt-1 p-3 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border rounded-md"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 text-left">
                                                                Address
                                                            </label>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    {...register("address")}
                                                                    id="address"
                                                                    name="address"
                                                                    rows={5}
                                                                    className="shadow-sm focus:outline-0 px-3  focus:border-gray-600 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                                    placeholder=" "
                                                                    defaultValue={''}
                                                                />
                                                            </div>

                                                        </div>




                                                    </div>
                                                    <div className="px-4 py-3 bg-white w-full sm:px-6">
                                                        <button
                                                            type='submit'
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-semibold tracking-widest rounded-md text-white w-full"
                                                            style={{ backgroundColor: `${black}` }}

                                                        >
                                                            Update Address
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default AddressFrom;