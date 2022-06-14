
import React from 'react';
import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';

const RepairServices = () => {
    const { singleBanner } = useTheme()
    return (
        <div className="relative my-10 group container">
            <img src={bannerImg + singleBanner?.image} alt='' className="w-full object-cover max-h-[290px] object-center block" />
        </div>
    );
};

export default RepairServices;