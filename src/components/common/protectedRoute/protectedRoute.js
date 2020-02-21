import React, { Component } from 'react';
import {  useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated ? <Component {...props}/> : <Redirect to={{pathname: "/", state: {from: location}}}/>
            }}
        />
    );
};

export default ProtectedRoute;