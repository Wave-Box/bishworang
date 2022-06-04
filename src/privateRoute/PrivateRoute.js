import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const { user } = useSelector((state) => state.auth);

    // const token = true

    let location = useLocation()
    //   if (isLoading) { return <p>Loading...</p> }
    if (user?.otp === "NULL") {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

}

export default PrivateRoute;