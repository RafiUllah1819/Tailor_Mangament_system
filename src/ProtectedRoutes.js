import React from 'react';
import Auth from './Auth';
import {Navigate , Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const ProtectedRoutes = () => {
    return Auth.getAuth() ? (
      <>
       <Navbar />
       <Outlet />
      </>
    ) :
    (  
        <Navigate
             to={{
                 pathname: "/"
             }}
            />
                
            
    )
}

export default ProtectedRoutes
