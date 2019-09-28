import React from 'react';
import {  Route, Redirect } from 'react-router-dom';

import { authAuthenticated } from '../../auth';

const PrivateRoute = ({component: Component, ...rest}: any) => (
    <Route 
        {...rest}
        render={props => 
        authAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state: { from: props.location } }} />
        )
        }
    />
);

export default PrivateRoute;