import React from 'react';
import blog1 from '../../../../assets/images/blog/blog1.jpg'
import blog2 from '../../../../assets/images/blog/blog2.jpg'
import blog3 from '../../../../assets/images/blog/blog3.jpg'

const FromBlog = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">

                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full flex gap-2">
                                <div className="">
                                    <img alt="gallery" class="w-full  object-cover object-center block" src="https://dummyimage.com/100x100" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span>Fashon</span>
                                    <h4>Qualcomm is developing a Nintendo Switch-like console, report says</h4>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <span>14 April 2021</span>
                                            <span>12M views</span>
                                        </div>
                                        <a href="/">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="md:p-2 p-1 w-full flex gap-2">
                                <div className="">
                                    <img alt="gallery" class="w-full  object-cover object-center block" src="https://dummyimage.com/100x100" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span>Fashon</span>
                                    <h4>Qualcomm is developing a Nintendo Switch-like console, report says</h4>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <span>14 April 2021</span>
                                            <span>12M views</span>
                                        </div>
                                        <a href="/">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="md:p-2 p-1 w-full flex gap-2">
                                <div className="">
                                    <img alt="gallery" class="w-full  object-cover object-center block" src="https://dummyimage.com/100x100" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span>Fashon</span>
                                    <h4>Qualcomm is developing a Nintendo Switch-like console, report says</h4>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <span>14 April 2021</span>
                                            <span>12M views</span>
                                        </div>
                                        <a href="/">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2 relative">
                                <img alt="gallery" class="w-full object-cover object-center block" src={blog3} />
                                <div className="absolute top-8 left-6">
                                    <span>Big Offer</span>
                                    <h4>Save 20% on Women's socks</h4>
                                    <a href="/">Shop Now </a>
                                </div>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 space-y-4">
                                <div className="relative">
                                    <img alt="gallery" class="w-full object-cover object-center block" src={blog2} />
                                    <div className="absolute top-4 left-4">
                                        <span>Big Offer</span>
                                        <h4>Save 20% on Women's socks</h4>
                                        <a href="/">Shop Now </a>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img alt="gallery" class="w-full object-cover object-center block" src={blog1} />
                                    <div className="absolute top-4 left-1/2">
                                        <span>Big Offer</span>
                                        <h4>Save 20% on Women's socks</h4>
                                        <a href="/">Shop Now </a>
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