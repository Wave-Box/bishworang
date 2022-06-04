import React from 'react';
import Aside from './aside';

const About = () => {
    return (
        <>

            <div className="flex md:flex-nowrap flex-wrap gap-6">
                <div className="min-w-max px-4">
                    <Aside />

                </div>
                <div className='min-h-[600px] mt-10 '>
                    <h3 className='border-b border-black pb-2 text-2xl font-semibold'>ABOUT BISHWO RANG</h3>
                    <p className='my-2'>বিশ্বরঙ সকল সীমাদ্ধতাকে উপেক্ষা করে সৃষ্টির ব্যাকুলতায় ১৯৯৪ সালের ২০ ডিসেম্বর সময় রাঙানোর ব্রত নিয়ে নারায়ণগঞ্জে শুভসূচনা হয়েছিল ফ্যাশন হাউজ ‘রঙ’-এর। সময়ের ব্যাপ্তিতে সময় রাঙানোর ব্রতটা রূপ নেয় এ দেশের ফ্যাশন সচেতন মানুষের অকৃত্রিম ভালোবাসায়। বিশ শতক অতিক্রম করে একুল শতকের এই সময়ে এসে ‘রঙ’ সময় রাঙানোর ভাবনাটা ছড়াতে চায় বিশ্বময়। ‘রঙ যেন মোর মর্মে লাগে’ রবীন্দ্রনাথ ঠাকুরের এই অনুভবকে বিশ্বময় ছড়াতেই ২০১৫ সালে পথচলা শুরু করে “বিশ্বরঙ”।</p>

                    <h4 className='text-xl font-semibold'> TIN NUMBER- 510913193199</h4>
                </div>
            </div>
        </>
    );
};

export default About;