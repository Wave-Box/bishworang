
import React from 'react';
import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';

const RepairServices = () => {
    const { singleBanner } = useTheme()
    return (
        <div className="relative my-10 group container px-4 sm:px-0">
            <img src={bannerImg + singleBanner?.image} alt='' className="w-full object-cover max-h-[290px] object-center block" />
        </div>
    );
};

export default RepairServices;