import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Share/Loader/Loader';
import { AuthContext } from '../Context/UseContext/UseContext';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <Loader></Loader>
    }

    if(user?.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;