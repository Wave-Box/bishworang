
import { Fragment, useRef, useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";


// import AddressFrom from '../../Dashboard/Profile/Address/AddressFrom';
// import { useAlert } from 'react-alert';
// import swal from 'sweetalert';
// import AlertSuccess from '../../../Components/Alert/AlertSuccess';

const Address = ({ selectAddress, setSelectAddress }) => {
    
    const [open, setOpen] = useState(false)
    


    // const alert = useAlert()

    useEffect(() => {

       

    }, [])

  


    return (
        <>


            <div className="shadow sm:rounded-md sm:overflow-hidden my-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                    <div className="col-span-6 sm:col-span-4">
                        <div className="flex justify-between items-center pb-3">
                            <label htmlFor="name" className="block text-xl font-semibold text-gray-700">
                                Addresses
                            </label>
                            <span className='text-green-600 font-semibold tracking-wider cursor-pointer' onClick={() => setOpen(true)}> + Add</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-x-4">

                            {
                                selectAddress &&
                                <label className={`bg-gray-300 p-5 rounded space-y-2 w-full transition-colors duration-300`}>
                                    <div className="flex justify-between cursor-pointer">
                                        <h3 className='font-semibold tracking-wider'>Name: {selectAddress.name}</h3>
                                        <AiFillDelete onClick={() => setSelectAddress(null)} />
                                    </div>
                                    <p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Phone:</span> {selectAddress.phone}</p>
                                    <p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Address: </span>{selectAddress.address}</p>

                                    {/* <input
                                            className="hidden"
                                            name="address_type"
                                            type="radio"
                                            onChange={() => setSelectAddress({ ...a })}

                                        /> */}
                                </label>

                            }

                        </div>

                    </div>


                </div>

            </div>




            <AddressFrom selectAddress={selectAddress} setSelectAddress={setSelectAddress} open={open} setOpen={setOpen} />
        </>
    );
};

export default Address;





export function AddressFrom({ open, setOpen, setSelectAddress, selectAddress }) {

    const cancelButtonRef = useRef(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setSelectAddress(data)
        setOpen(false)
    };


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="shadow overflow-hidden sm:rounded-md w-full">
                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">




                                                <div  className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="name"
                                                         className="block text-sm font-medium text-gray-700">Name</label>
                                                    <input {...register("name")} type="text" name="name" id="name" autoComplete="address-level1"
                                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                </div>
                                                <div  className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="phone"
                                                         className="block text-sm font-medium text-gray-700">Phone</label>
                                                    <input
                                                        {...register("phone", { required: true.valueOf, minLength: 11 })}
                                                        type="number" name="phone" id="phone" autoComplete="address-level1"
                                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    {errors.phone && <span className='text-red-500'>Phone number is required</span>}
                                                </div>
                                                <div  className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="address"
                                                         className="block text-sm font-medium text-gray-700">Address</label>
                                                    <textarea
                                                        {...register("address")}
                                                        rows={6} type="text" name="address" id="address" autoComplete="address-level1"
                                                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                </div>

                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                              
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>


                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
