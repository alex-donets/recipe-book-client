import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { setErrorMessage } from '../../../../../app/actions';
import { setUserInfo } from '../../../../actions';
import useReactRouter from 'use-react-router';
import { setAuthToken } from '../../../../../../utils/localStorage';

const GoogleBtn = () => {
    const dispatch = useDispatch();
    const { history } = useReactRouter();

    const clientId = '153508824111-n502ithsnqp721j2g52jvt6uo5k4gk5a.apps.googleusercontent.com';

    const onSuccess = (res: any) => {
        if (res) {
            const user = {
                id: res.profileObj.googleId,
                token: res.accessToken,
                email: res.profileObj.email,
                fullName: res.profileObj.name,
            };
            dispatch(setUserInfo(user));
            setAuthToken(user);

            history.push('/');
        }
    };

    const onFailure = (res: any) => {
        setErrorMessage(res.toString());
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                responseType="code,token"
            />
        </div>
    );
};

export default GoogleBtn;
