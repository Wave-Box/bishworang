import React from 'react';
import { bannerImg } from '../../../../siteSetting/siteUrl';
import SetLoaing from '../../../components/Loader/SetLoaing';
// import { HomePage } from '../../../../services';
const Features = ({data}) => {
    // const { data, isLoading } = HomePage.GetInfo()
    if (!data) {
        return <SetLoaing />
    }
    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className='grid sm:grid-cols-3 gap-6'>
                    {data.map((b) =>
                        <div key={b.id} className="relative">
                            <img alt="gallery" className="w-full object-cover object-center block" src={bannerImg + b?.image} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features;

