
import { useEffect, useState } from 'react'
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'

import AddressFrom from './AddressFrom';
import { apiUrl } from '../../../../siteSetting/ApiUrl';
import AlertSuccess from '../../../../Components/Alert/AlertSuccess';
import { useAlert } from 'react-alert';
import swal from 'sweetalert';

const Address = () => {
    const [selectAddress, setSelectAddress] = useState({})
    const [address, setAddres] = useState([])
    const [open, setOpen] = useState(false)
    const [call, setCall] = useState(false)

    

    const alert = useAlert()

    useEffect(() => {

        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
        const data = {
            Authorization: `Bearer ${token}`
        }

        axios.get('https://wavebox.tk/admin/api/v1/customer/address/list', { headers: data })
            .then(res => setAddres(res?.data))


    }, [call])

    const handleDelete = (id) => {
        if (id) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
                        const headers = {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                        console.log(headers);
                        axios.delete(`${apiUrl}/customer/address/delete`, {
                            headers: headers,
                            data: { address_id: id }
                        })
                            .then((response) => {
                                console.log(response);
                                AlertSuccess("", response.data.message)
                                setCall(!call)

                            })
                            .catch((error) => {
                                alert.show(error.response.data.message, { type: 'error' })

                            })



                    } else {
                        swal("You are safe!");
                    }
                });
        }


    }


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
                                            <AiFillDelete onClick={() => handleDelete(a.id)} />
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




            <AddressFrom call={call} setCall={setCall} open={open} setOpen={setOpen} />
        </>
    );
};

export default Address;