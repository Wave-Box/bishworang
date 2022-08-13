import React from 'react';

const Video = () => {
    return (
        <div className="bg-white">
            <div className='container py-5 px-4 sm:px-0'>
                <div className="py-5">
                    <h2 className='text-center text-2xl font-normal tracking-widest font-serif text-gray-700 my-5 uppercase'>FAM THAT'S AS FAB AS YOU - JOIN US!</h2>
                    <p className='text-center text-base font-normal my-5 tracking-wide font-sans sm:mx-16 mx-2'>Join our mailing list for exclusive access to the latest fashion trends, tips, and more.</p>
                </div>
                <iframe className='mb-5' width="100%" height="480" src="https://www.youtube.com/embed/WuQNe-lCVVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Video;