import React from 'react';
import Aside from './aside';

const RefundPolicy = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6 px-4">
            <div className="min-w-max">
                <Aside />

            </div>
            <div className='min-h-[600px] font-sans mt-10'>
                <h2 className='text-center font-bold text-[22px] my-3'>Refund Policy</h2>

                <div className="">
                    <ul className='list-disc list-inside'>
                        <li>If we are unable to deliver the ordered product/s.</li>
                        <li>If we are unable to provide replacement</li>
                        <li>If a different Products is delivered to you.</li>

                    </ul>
                </div>
                <p>– Most refunds are fully refunded in 10-15 Working days after we receive the return package.</p>
                <p>(Credit card payment return may take longer depending on Commercial Banks)</p>
                <p>– If you pay us by any mobile wallet (bKash, Rocket, Upay, Ok Wallet), then your money will be refunded in same account within 7-10 working days.</p>

                <h3 className='text-2xl font-bold font-sans text-center my-5'>For Refund, please follow these steps</h3>
                <h3 className='text-lg my-3 font-bold font-sans'>	Provide us with Order ID details, e-mail address on: </h3>
                <p><a href="mailto:bishworangwebsite@gmail.com"><strong>bishworangwebsite@gmail.com</strong></a></p>
                <h3 className='text-lg my-3 font-bold font-sans'>	We will confirm the Refund request and will inform you about the process. </h3>
                <h4 className='text-center font-bold'>TIN NUMBER- 510913193199</h4>
            </div>
        </div>
    );
};

export default RefundPolicy;