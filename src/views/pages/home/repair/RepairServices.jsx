
import React from 'react';
import { bannerImg } from '../../../../siteSetting/siteUrl';
import { HomePage } from '../../../../services';

const RepairServices = () => {
    const { data } = HomePage.GetInfo()

    return (
        <div className="bg-white">
            <div className="relative py-10 group container px-4 sm:px-0">
                <img src={bannerImg + data?.singleBanner?.image} alt='' className="w-full object-cover max-h-[290px] object-center block" />
            </div>
        </div>
    );
};

export default RepairServices;