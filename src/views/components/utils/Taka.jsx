import React from 'react';
import useTheme from '../../../hooks/useTheme';

const Taka = ({ tk }) => {
    const { currency, currencyInfo } = useTheme()

    return (
        <>
            {currency === "BDT" ?
                `BDT  ${parseFloat(tk).toFixed(2)}` : `USD  ${parseFloat(tk / currencyInfo?.conversion_rates?.BDT).toFixed(2)}`}
        </>
    );
};

export default Taka;