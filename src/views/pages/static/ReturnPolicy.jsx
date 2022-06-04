import React from 'react';
import Aside from './aside';

const ReturnPolicy = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6">
        <div className="min-w-max px-4">
            <Aside />

        </div>
        <div className='min-h-[600px] font-sans mt-10'>
            <h2 className='text-center font-bold text-[22px] my-3'>RETURN & EXCHANGE POLICY</h2>

            <h3 className='text-xl font-bold font-sans my-5'> Exchange</h3>
            <p>We know that sometimes you buy something that does not work out the way you had hoped, and for that reason we did our best to make an exchange policy that is helpful for you.</p>
            <h3 className='text-xl font-bold font-sans my-5'>Discount Sales </h3>
            <p>Our return & exchange policy shall not be applicable for any discount sales product(s). Any discount item once purchased cannot be exchanged or returned. No return or exchange is applicable for purchases made during the campaign period.</p>
            <h3 className='text-xl font-bold font-sans my-5'> For orders shipped within Bangladesh</h3>
            <p>If you are not fully satisfied with the products you bought, simply bring it back within 10 days of the purchase date to any of our outlets with your receipt or invoice for online orders and we will gladly exchange the product. Please note that the value of the exchanged product should be of similar or higher value than the original product price. If exchanging for a higher value item, the purchase value difference must be paid.</p>
            <p>Alternatively, you may ship the product to our e-commerce warehouse and we will gladly provide you with a credit note for future online purchases.</p>
            <br />
            <p>Our address is: <br />
                Bishworang E-Commerce <br />
                West Lamapara , Shibu Market, Link Road, Narayanganj - 1420, Phone - 01730068036 <br />
                Items that you want to exchange or return must be unworn, unwashed and unused with all original tags attached. Items that are opened or damaged or do not have a receipt may be denied an exchange. <br />
                If you want to return the product, you have to pay the delivery charge. Please note it.
            </p>
        </div>
        </div>
    );
};

export default ReturnPolicy;