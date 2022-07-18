
import React from 'react';
import httpReq from '../../../../services/http.service';
// import useTheme from '../../../../hooks/useTheme';
import { bannerImg } from '../../../../siteSetting/siteUrl';
import { useQuery } from 'react-query'
import SetLoaing from '../../../components/Loader/SetLoaing';
const RepairServices = () => {
    // const { singleBanner } = useTheme()
    const { isLoading, data } = useQuery(['allfrontendcontent'], () => httpReq.get('allfrontendcontent'))
    if (isLoading) {
        return <SetLoaing />
    }
    return (
        <div className="relative my-10 group container px-4 sm:px-0">
            <img src={bannerImg + data?.singleBanner?.image} alt='' className="w-full object-cover max-h-[290px] object-center block" />
        </div>
    );
};

export default RepairServices;