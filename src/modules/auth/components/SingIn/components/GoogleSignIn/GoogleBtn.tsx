import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { setErrorMessage } from '../../../../../app/actions';
import { setUserInfo } from '../../../../actions';
import useReactRouter from 'use-react-router';
import { setAuthToken } from '../../../../../../utils/localStorage';

const GoogleBtn = () => {
    const dispatch = useDispatch();
    const { history } = useReactRouter();

    const clientId = process.env.REACT_APP_GOOGLE_SINGIN_CLIENT_ID;

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('profileObj' in res) {
            const user = {
                id: res.profileObj.googleId,
                token: res.accessToken,
                email: res.profileObj.email,
                fullName: res.profileObj.name,
            };
            dispatch(setUserInfo(user));
            setAuthToken(user);
        }

        history.push('/');
    };

    const onFailure = (res: any) => {
        setErrorMessage(res.toString());
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                responseType="code,token"
            />
        </div>
    );
};

export default GoogleBtn;
