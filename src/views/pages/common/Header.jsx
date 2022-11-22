
import React from 'react';
import HeaderDown from '../../components/common/HeaderDown';
import HeaderMid from '../../components/common/HeaderMid';
import HeaderTop from '../../components/common/HeaderTop';

const Header = ({data}) => {

    return (
        <>
            <HeaderTop data={data} />
            <HeaderDown data={data} />
            <HeaderMid data={data} />

        </>
    );
};

export default Header;