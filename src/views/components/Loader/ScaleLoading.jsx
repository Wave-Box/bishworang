import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
import { yellow } from '../../siteSetting/theme';


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const ScaleLoading = ({ loading }) => {
    return (
        <ScaleLoader color={`${yellow}`} loading={loading} css={override} size={100} />
    );
};

export default ScaleLoading;