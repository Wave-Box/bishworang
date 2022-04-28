import React from 'react';
import blog1 from '../../../../assets/images/blog/blog1.jpg'
import blog2 from '../../../../assets/images/blog/blog2.jpg'
import blog3 from '../../../../assets/images/blog/blog3.jpg'
import Card3 from '../../../components/card/Card3.';
import blog_1 from '../../../../assets/images/blog/blog-1.jpg'
import Title from '../../../components/utils/Title';
import { primaryColor } from '../../../../constant';
const FromBlog = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-auto flex flex-wrap">

                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">

                            <div className="md:p-2 p-1 w-full flex gap-2">
                                <Title text={'From'} >Blog</Title>
                            </div>
                            <div className="md:p-1 p-1 w-full flex gap-3">
                                <div className="">
                                    <img alt="blog" width={'221'} className="object-cover object-center block" src={blog_1} />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className='text-sm' style={{ color: primaryColor }}>Fashon</span>
                                    <h4 className='text-lg text-black font-semibold'>Qualcomm is developing a Nintendo Switch-like console, report says</h4>
                                    <div style={{ fontSize: '13px' }} className="flex justify-between items-center font-semibold tracking-wider">
                                        <div className="flex gap-2">
                                            <span>14 April 2021</span>
                                            <span>12M views</span>
                                        </div>
                                        <a style={{ color: primaryColor }} href="/">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-1 p-1 w-full flex gap-3">
                                <div className="">
                                    <img alt="blog" width={'221'} className="object-cover object-center block" src={blog_1} />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className='text-sm' style={{ color: primaryColor }}>Fashon</span>
                                    <h4 className='text-lg text-black font-semibold'>Qualcomm is developing a Nintendo Switch-like console, report says</h4>
                                    <div style={{ fontSize: '13px' }} className="flex justify-between items-center font-semibold tracking-wider">
                                        <div className="flex gap-2">
                                            <span>14 April 2021</span>
                                            <span>12M views</span>
                                        </div>
                                        <a style={{ color: primaryColor }} href="/">Read More</a>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2 relative">
                                <img alt="gallery" className="w-full object-cover object-center block" src={blog3} />
                                <div className="absolute top-8 left-6">
                                    <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                </div>
                            </div>
                            <div className="md:p-2 p-1 w-1/2 space-y-4">
                                <div className="relative">
                                    <img alt="gallery" className="w-full object-cover object-center block" src={blog2} />
                                    <div className="absolute top-4 left-4">
                                        <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                    </div>
                                </div>
                                <div className="relative">
                                    <img alt="gallery" className="w-full object-cover object-center block" src={blog1} />
                                    <div className="absolute top-4 left-1/2">
                                        <Card3 offerType={'Smart Offer'} title={'Great Summer Collection'} link={'Shop Now'} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default FromBlog;


