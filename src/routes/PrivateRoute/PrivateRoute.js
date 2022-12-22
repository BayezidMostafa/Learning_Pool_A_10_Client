import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthSource';
import { RotateLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className='min-h-[80vh] flex justify-center items-center'>
                <RotateLoader color="#ffffff" />
            </div>
        )
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;