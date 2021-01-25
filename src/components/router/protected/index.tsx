import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import auth from './auth';

export const ProtectedRoute: React.FC<RouteProps> = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()){
                    return <React.Component {...props} />;
                } else {
                    return (
                        <Redirect 
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};