import React from 'react';

const PaymentGateway = ({ selectPayment, setSelectPayment }) => {

    console.log(selectPayment);
    return (
        <>
            <div className="shadow sm:rounded-md sm:overflow-hidden my-5">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">









                    <div className="col-span-6 sm:col-span-4">
                        <div className="flex justify-between items-center pb-3">
                            <label htmlFor="email-address" className="block text-xl font-semibold text-gray-700">
                                Payment
                            </label>

                        </div>

                        <div className="flex gap-2 flex-wrap sm:flex-nowrap">

                            {/* <label className="block">
                                <div className="flex relative">
                                    <div>
                                        <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" className="visa"
                                            alt="" />
                                        <p className="mt-2 mb-4 text-white font-semibold">Sai Kumar</p>
                                    </div>
                                    <div className="input">
                                        <input type="radio" name="card" id="check" />
                                    </div>
                                </div>
                            </label> */}


                            <label className={`${selectPayment === "online" ? "bg-yellow-300" : "bg-gray-300"} p-5 rounded space-y-2 w-full transition-colors duration-300 relative flex justify-between `}>
                                <div className="flex justify-between cursor-pointer">
                                    <h3 className='font-semibold tracking-wider'>{"SSL Commarce"}</h3>

                                </div>
                                <input
                                    className=""
                                    name="address_type"
                                    type="radio"
                                    value={"online"}
                                    onChange={(e) => setSelectPayment(e.target.value)}

                                />
                            </label>

                            <label className={`${selectPayment === "cod" ? "bg-yellow-300" : "bg-gray-300"}  p-5 rounded space-y-2 w-full transition-colors duration-300 relative flex justify-between `}>
                                <div className="flex justify-between cursor-pointer">
                                    <h3 className='font-semibold tracking-wider'>{"Cash On Delivery"}</h3>

                                </div>

                                <input
                                    className=""
                                    name="address_type"
                                    type="radio"
                                    value={"cod"}
                                    onChange={(e) => setSelectPayment(e.target.value)}

                                />
                            </label>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
};

export default PaymentGateway;