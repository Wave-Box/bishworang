
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { yellow } from '../../../../siteSetting/theme'

export default function Number() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <div className="shadow sm:rounded-md sm:overflow-hidden my-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                    <div className="col-span-6 sm:col-span-4">
                        <div className="flex justify-between items-center pb-3">
                            <label htmlFor="email-address" className="block text-xl font-semibold text-gray-700">
                                Contact Number
                            </label>
                            <span className='text-green-600 font-semibold tracking-wider cursor-pointer' onClick={() => setOpen(!open)}> + Update</span>
                        </div>
                        <input
                            disabled
                            value={"+880 1991 666031"}
                            type='tel'
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 p-3 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border rounded-md"
                        />
                    </div>


                </div>

            </div>

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
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-semibold text-gray-900 text-center mb-4">
                                                Update Contact Number
                                            </Dialog.Title>
                                            <div className="mt-2 flex">
                                                <input

                                                    type='tel'
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className=" p-4 border border-gray-300  block w-full shadow-sm sm:text-sm focus:outline-0 focus:border-gray-600 focus:border  rounded-l-md"
                                                />
                                                <div className="rounded-r-md shadow-sm flex justify-center items-center  py-2 px-4 w-3/5"
                                                    style={{ backgroundColor: `${yellow}` }}
                                                >
                                                    <button
                                                        type="button"

                                                        className=" font-semibold text-black focus:outline-none tracking-wider "
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {/* Update Contact */}
                                                        <span>Update Contact</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
