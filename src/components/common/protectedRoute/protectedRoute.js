import React, { Component } from 'react';
import {  useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({component: Component, render, ...rest}) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={props => {
                const component = render? render() : <Component {...props}/>;
                return isAuthenticated ? component : <Redirect to={{pathname: "/", state: {from: location}}}/>;
            }}
        />
    );
};

export default ProtectedRoute;