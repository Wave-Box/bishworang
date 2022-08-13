
import { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'


const Address = () => {
    const [selectAddress, setSelectAddress] = useState({})
    const [address, setAddres] = useState([])
    const [open, setOpen] = useState(false)

    



  


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
                                address?.slice(0, 2).map(a => (
                                    <label className={`${selectAddress.id === a.id ? "bg-yellow-300" : null} bg-gray-300 p-5 rounded space-y-2 w-full transition-colors duration-300`}>
                                        <div className="flex justify-between cursor-pointer">
                                            <h3 className='font-semibold tracking-wider'>{a.address_type}</h3>
                                            <AiFillDelete onClick={() =>null} />
                                        </div>
                                        <p className='font-medium tracking-wider'>{a.contact_person_number}</p>
                                        <p className='font-medium tracking-wider'>{a.address}</p>

                                        <input
                                            className="hidden"
                                            name="address_type"
                                            type="radio"
                                            onChange={() => setSelectAddress({ ...a })}

                                        />
                                    </label>
                                ))
                            }

                        </div>

                    </div>


                </div>

            </div>




            {/* <AddressFrom call={call} setCall={setCall} open={open} setOpen={setOpen} /> */}
        </>
    );
};

export default Address;