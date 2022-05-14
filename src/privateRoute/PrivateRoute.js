import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const token = useSelector((state) => state.user.token)
    
    let location = useLocation()
    //   if (isLoading) { return <p>Loading...</p> }
    if (token) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
     
}

export default PrivateRoute;