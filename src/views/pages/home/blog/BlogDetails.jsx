
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import httpReq from '../../../../services/http.service';
import Aside from '../../static/aside';
import parse from 'html-react-parser';
const BlogDetails = () => {
    const params = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        httpReq.post('blog/details', { slug: params.slug })
            .then(res => {
                setBlog(res)
            })
    }, [params.slug])

    return (
        <div className="flex md:flex-nowrap flex-wrap gap-6 px-4">
            <div className="min-w-max">
                <Aside />

            </div>
            <div className='min-h-[600px] w-full mt-10'>
                <h3 className='text-2xl font-bold my-2'>{blog?.title}</h3>
                <div className="">
                    {parse(`${blog?.description}`)}
                </div>

            </div>
        </div>

    );
};

export default BlogDetails;