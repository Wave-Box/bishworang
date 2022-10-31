import React from 'react';
import Aside from './aside';

const About = () => {
    return (
        <>

            <div className="flex md:flex-nowrap flex-wrap gap-6 px-4">
                <div className="min-w-max">
                    <Aside />

                </div>
                <div className='min-h-[600px] mt-10 '>
                    <h3 className='border-b border-black pb-2 text-2xl font-semibold'>ABOUT BISHWO RANG</h3>
                    <p className='my-2 text-justify'>বিশ্বরঙ সকল সীমাবদ্ধতাকে উপেক্ষা করে সৃষ্টির ব্যাকুলতায় ১৯৯৪ সালের ২০ ডিসেম্বর সময় রাঙানোর ব্রত নিয়ে নারায়ণগঞ্জে শুভসূচনা হয়েছিল ফ্যাশন হাউজ ‘রঙ’-এর। সময়ের ব্যাপ্তিতে সময় রাঙানোর ব্রতটা রূপ নেয় এ দেশের ফ্যাশন সচেতন মানুষের অকৃত্রিম ভালোবাসায়। বিশ শতক অতিক্রম করে একুশ শতকের এই সময়ে এসে ‘রঙ’ সময় রাঙানোর ভাবনাটা ছড়াতে চায় বিশ্বময়। ‘রঙ যেন মোর মর্মে লাগে’ রবীন্দ্রনাথ ঠাকুরের এই অনুভবকে বিশ্বময় ছড়াতেই ২০১৫ সালে পথচলা শুরু করে “বিশ্বরঙ”।</p>
                    
                    <p className='my-2 text-justify'>Bishwarang disregarded all the limitations of creation and fashion house 'Rang' was auspiciously started in Narayanganj on December 20, 1994 with the vow of coloring. Over time, the vow to paint time takes shape in the genuine love of the fashion conscious people of this country. After crossing the 20th century and coming to this time of the 21st century, Bishwamay wants to spread the idea of ​​coloring the time of 'color'. "Bishwarang" started its journey in 2015 to spread this feeling of Rabindranath Tagore, 'Rang jeno mor morme lage' in the world.</p>

                    <h4 className='text-xl font-semibold'> TIN NUMBER- 510913193199</h4>
                </div>
            </div>
        </>
    );
};

export default About;