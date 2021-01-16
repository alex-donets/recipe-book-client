import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getAuthToken } from '../../../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../actions';
import { ProtectedRouteType } from '../../types';

export const ProtectedRoute = (props: ProtectedRouteType) => {
    const { component: Component, ...restProps } = props;
    const dispatch = useDispatch();
    const authToken = getAuthToken();

    useEffect(() => {
        authToken && dispatch(setUserInfo(authToken));
    }, []);

    return (
        <Route
            {...restProps}
            render={(props) => {
                if (authToken) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;
