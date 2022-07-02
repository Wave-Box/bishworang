import React from 'react';
import Aside from './aside';

const DeliveryPolicy = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6 px-4">
            <div className="min-w-max">
                <Aside />

            </div>
            <div className='min-h-[600px] mt-10'>
                <h1 className='text-[26px] font-extrabold text-center font-sans'>Delivery Policy</h1>
                <h4 className='text-xl my-3 font-bold'>Shipping Methods</h4>
                <p>The shipping method you can choose from checkout page to determines how quickly your shipped item will be delivered to your doorstep.</p>
                <p>We process one shipping address for one order. So please mention your desired shipping address in details where you want to get delivery.  Door step shipment delivery available. Other than these area we would like to request our customers to call our customer care to take delivery from your nearest pickup points.</p>

                <h4 className='text-lg my-3 font-bold font-sans'>Shipping Cost</h4>

                {/* Inside Dhaka  */}
                <h3 className='text-2xl my-3 font-bold font-sans'>Inside Dhaka</h3>

                <table className="table-fixed border-collapse border border-slate-500 w-full text-center">
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>Weight</th>
                            <th className='border border-slate-600'>Shipping charges</th>
                            <th className='border border-slate-600'>Shipping Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-600'>Up to 1 kg</td>
                            <td className='border border-slate-600'>BDT 100</td>
                            <td className='border border-slate-600'>Regular (3-5 working days)</td>
                        </tr>

                    </tbody>
                </table>

                {/* Out Dhaka  */}
                <h3 className='text-2xl my-3 font-bold font-sans'>Out Dhaka</h3>

                <table className="table-fixed border-collapse border border-slate-500 w-full text-center">
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>Weight</th>
                            <th className='border border-slate-600'>Shipping charges</th>
                            <th className='border border-slate-600'>Shipping Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-600'>Up to 1 kg</td>
                            <td className='border border-slate-600'>BDT 150</td>
                            <td className='border border-slate-600'>Regular (5-7 working days)</td>
                        </tr>

                    </tbody>
                </table>

                <div className="space-y-3 mt-3">

                    <p>** For additional weight after one kg additional charge 20TK. per KG. (Inside of Country) But outside of Country Delivery Policy Will Depend International Courier Service.</p>
                    <p>** Any order placed after 5 pm will be considered as order of next working day, not as same day.</p>
                    <p>** Working day: Saturday to Thursday except public holidays.</p>
                    <p>** Product color may slightly vary due to photographic lighting or your monitor settings.</p>
                    <p>**Discount product is not changeable</p>
                </div>


                <h4 className='text-lg my-3 font-bold font-sans'>Delivery Information:</h4>
                <p className='mb-3'>We highly values the urgency of your orders. We endeavor to make sure that your ordered products reach your door in the fastest possible time. Once your order is confirmed, you will receive a confirmation mail from with the invoice. Please note every unpaid order will be reconfirmed over phone. </p>
                <p className='mb-1'>Your ordered products will be sent to your given address in 3 to 7 working days for anywhere in Bangladesh.</p>
                <p>We start the shipping process within 24 hours. So, if you want to cancel or modify any order, please inform us to our customer support team via Facebook page or over phone: <strong>01730068036</strong></p>

                <h4 className='text-lg my-3 font-bold font-sans'>Discounted/special offer item will be No exchanged / refundable.</h4>
            </div>
        </div>
    );
};

export default DeliveryPolicy;