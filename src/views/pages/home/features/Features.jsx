import React from 'react';
import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';

const Features = () => {
    const { banner } = useTheme()
    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className='grid sm:grid-cols-3 gap-6'>
                    {banner.map((b) =>
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

