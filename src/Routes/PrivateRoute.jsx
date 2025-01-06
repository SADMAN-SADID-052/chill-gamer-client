import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);
     const location = useLocation();
     console
     if(loading)
     {

        return <Loading></Loading>

     }
    if(user && user?.email)
    {

        return children;
    }
    return (
        <Navigate state={location.pathname}  to={"/auth/login"}>

            
            
        </Navigate>
    );
};

export default PrivateRoute;