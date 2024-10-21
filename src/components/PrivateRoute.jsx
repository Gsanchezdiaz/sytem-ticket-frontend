import React from 'react'
import Home from '../pages/default/Home'
//import { Route, Redirect } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = true;

const PrivateRoute = () => {
  return (
    // <Route
    //   render={() =>
    //     isAuthenticated ? (
    //         <Outlet />
    //     ) : (
    //       <Redirect
    //         to="/"
    //       />
    //     )
    //   }
    // />
    isAuthenticated ? <Home /> : <Navigate to="/" />
  )
}

export default PrivateRoute