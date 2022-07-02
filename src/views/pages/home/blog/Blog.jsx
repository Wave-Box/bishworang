import React from 'react';
import useTheme from '../../../../hooks/useTheme';
import Title from '../../../components/utils/Title';
import Aside from '../../static/aside';
import { SingleBlog } from './FromBlog';

const Blog = () => {
    const { blogs } = useTheme()
    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6 px-4">
            <div className="min-w-max">
                <Aside />

            </div>
            <div className='min-h-[600px] w-full mt-10'>
                <div className="md:p-2 p-1 w-full flex gap-2">
                    <Title text={'From'} >Blog</Title>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {blogs?.map((blog) => <SingleBlog blog={blog} key={blog.id} />)}






                </div>
            </div>

        </div>
    );
};

export default Blog;