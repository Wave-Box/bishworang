import React from 'react';
import Title from '../../../components/utils/Title';
import { primaryColor } from '../../../../constant';
import { NavLink } from 'react-router-dom';
import { blogImg } from '../../../../siteSetting/siteUrl';
// import useTheme from '../../../../hooks/useTheme';
import httpReq from '../../../../services/http.service';
import { useQuery } from 'react-query'

const FromBlog = () => {
    // const { blogs } = useTheme()
    const { data } = useQuery(['blog'], () => httpReq.get('blog'))

    return (
        <div>
            <section className="text-gray-600 body-font bg-white">
                <div className="container py-12 mx-auto sm:px-0 px-4">
                    <div className="md:p-2 p-1 w-full flex gap-2">
                        <Title text={'From'} >Blog</Title>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        {data?.blogs?.map((blog) => <SingleBlog blog={blog} key={blog.id} />)}






                    </div>

                </div>
            </section>

        </div>
    );
};

export default FromBlog;

export const SingleBlog = ({ blog }) => {
    return (
        <div className="md:p-4 p-2 col-span-1 flex flex-col sm:flex-row gap-3 bg-white shadow rounded">
            <div className="">
                <img alt="blog" className="object-cover w-full  sm:w-52 sm:h-[75px] h-full object-center block" src={blogImg + blog?.image} />
            </div>
            <div className="flex flex-col justify-between space-y-1 w-full">
                <NavLink to={'/blog/' + blog?.slug} className='text-lg text-black font-semibold'>{blog?.title}</NavLink>
                {/* <span className='text-sm' style={{ color: primaryColor }}>{JSON.parse(blog?.description)}</span> */}
                <div style={{ fontSize: '13px' }} className="flex justify-between items-center font-semibold tracking-wider">
                    <div className="flex gap-2">
                        <span>{new Date(blog?.created_at).toDateString()}</span>
                    </div>
                    <NavLink to={'/blog/' + blog?.slug} style={{ color: primaryColor }}>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}
