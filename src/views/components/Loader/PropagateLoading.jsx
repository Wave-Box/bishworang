import React from 'react';
import { PropagateLoader } from 'react-spinners';
import { css } from "@emotion/react";
// import { yellow } from '../../siteSetting/theme';


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PropagateLoading = ({loading}) => {
    return (
        <PropagateLoader color={'#000'} loading={loading} css={override} size={35}>
            
        </PropagateLoader>
    );
};

export default PropagateLoading;