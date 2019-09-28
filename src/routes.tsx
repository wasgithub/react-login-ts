
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/login";
import { authAuthenticated } from "./auth"

const PrivateRoute = ({ component: Component, ...rest }:  any) => (
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

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login />} />
            <PrivateRoute exact path="/app" component={ () => <h1>Esta logado...</h1>}/>
        </Switch>
    </ BrowserRouter>
);

export default Routes;
