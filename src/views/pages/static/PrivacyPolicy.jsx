import React from 'react';
import Aside from './aside';

const PrivacyPolicy = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6">
                <div className="min-w-max px-4">
                    <Aside />

                </div>
                <div className='min-h-[600px] font-sans mt-10'>
            <h2 className='text-center font-bold text-[22px] my-3'>Privacy Policy</h2>
            <p className='text-justify'>Bishworang is committed to the compliance of applicable Privacy Laws in the country Bishworang’s product is distributed. Protecting the privacy and security of your personal data is of prime importance to Bishworang; therefore, we conduct our business by abiding by the laws applicable on data privacy and data security in the country where Bishworang’s product is distributed to you. This Privacy Policy is intended to inform you about the personal data that is collected from you, how your personal data may be used and disclosed, how you can control the use of your personal data, and how your personal data is protected when you use the Bishworang Application or the application developed by a third party for Bishworang (“Application”). We do not sell trade your personally identifiable information; however, we may share the same with third parties who assist us in conducting our business, operating our website/Application, or servicing you, so long as those parties agree to keep this information confidential.</p>
            <h3 className='text-2xl my-3 font-bold font-sans'>How we collect information:</h3>
            <div className="">
                <ul class="list-disc list-inside">
                    <li>Purchase, order, return or exchange products and services</li>
                    <li>Register on our website or</li>
                    <li>Track your order through our website</li>
                    <li>Send or purchase a gift card</li>
                    <li>Participate in our promotions or surveys</li>
                    <li>Contact us with a comment, question or complaint</li>

                </ul>
            </div>



            <h4 className='text-lg my-3 font-bold font-sans'> How we use the collected information:</h4>
            <p>We use your identifiable information to help us learn more about your shopping preferences and to provide you with the best possible products and services. In this regard, we may share your identifiable information with third-parties that provide us support services or help us to market <strong>Bishworang</strong> products and services. Third-parties are contractually prohibited from using your identifiable information in any manner other than helping <strong>Bishworang</strong>. We may share your personal information if necessary to comply with laws, government requests or to protect the rights of <strong>Bishworang</strong>.</p>
            <p>We may use your identifiable information to send periodic emails to provide you with information and updates regarding <strong>Bishworang</strong> new arrivals, campaigns, and any other activities. However, if you prefer to no longer receive emails from us, you can unsubscribe following the instructions at the bottom of each of our emails.</p>


            <h4 className='text-lg my-3 font-bold font-sans'> Third party policy:</h4>
            <p>We may pass your details (Name, email address, phone number) to other companies affiliated with us (for different service providing issue) only for the purpose of providing you better service. We may somewhat pass your details to our agents and subcontractors to help with analyzing data and providing us with marketing or customer service assistance. We may also use third parties to assist us with delivering products to you and to help us to collect payments (cash on delivery) from you. In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
            <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>


            <h4 className='text-lg my-3 font-bold font-sans'>Security of your information: </h4>
            <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL). Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards. We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service. Visit our Terms and Conditions page to learn more about our complete terms of service.</p>


            <h4 className='text-lg my-3 font-bold font-sans'>You’re right to withdraw & change: </h4>
            <p>If you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information and if you would like to access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact us at <a href="mailto:bishworangwebsite@gmail.com"><strong>bishworangwebsite@gmail.com</strong></a></p>
        </div>
        </div>
    );
};

export default PrivacyPolicy;