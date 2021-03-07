import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    registerSuccess,
    registerError,
    setPasswordSuccess,
    setPasswordError,
    resetPasswordSuccess,
    resetPasswordError,
} from './actions';

import {
    LOGIN_PENDING,
    LOGOUT_PENDING,
    REGISTER_PENDING,
    RESET_PASSWORD_PENDING,
    SET_PASSWORD_PENDING,
} from './constants';

import { apiClient } from '../../services/services';
import { removeAuthToken, setAuthToken } from '../../utils/localStorage';
import { loginFormToQuery, registerFormToQuery, setFormToQuery } from './helpers';
import { HandleLogin, HandleRegister, HandleResetPassword, HandleSetPassword } from './types';
import { setSuccessMessage } from '../app/actions';

function* handleLogin({ payload }: HandleLogin) {
    try {
        const body = loginFormToQuery(payload);
        const { data } = yield apiClient.post('/users/login', body);

        yield call(setAuthToken, data);
        yield put(loginSuccess(data));
        yield put(push('/'));
    } catch (error) {
        yield put(loginError(error));
    }
}

function* handleRegister({ payload }: HandleRegister) {
    try {
        const body = registerFormToQuery(payload);

        yield apiClient.post('/users/register', body);

        yield put(registerSuccess());
        yield put(push('/login'));
    } catch (error) {
        yield put(registerError(error));
    }
}

function* handleSetPassword({ payload }: HandleSetPassword) {
    try {
        const body = setFormToQuery(payload);

        const { data: msg } = yield apiClient.post(`/users/set-password`, body);

        yield put(setPasswordSuccess());
        yield put(setSuccessMessage(msg.msg));
    } catch (error) {
        yield put(setPasswordError(error));
    }
}

function* handleResetPassword({ payload }: HandleResetPassword) {
    try {
        const { data: msg } = yield apiClient.post(`/users/reset-password/`, payload);

        yield put(resetPasswordSuccess());
        yield put(setSuccessMessage(msg.msg));
    } catch (error) {
        yield put(resetPasswordError(error));
    }
}

function* handleLogout() {
    try {
        yield call(removeAuthToken);
        yield put(logoutSuccess());
        yield put(push('/login'));
    } catch (error) {
        yield put(logoutError(error));
    }
}

export function* authSaga() {
    yield takeEvery([LOGIN_PENDING], handleLogin);
    yield takeEvery([REGISTER_PENDING], handleRegister);
    yield takeEvery([SET_PASSWORD_PENDING], handleSetPassword);
    yield takeEvery([RESET_PASSWORD_PENDING], handleResetPassword);
    yield takeEvery([LOGOUT_PENDING], handleLogout);
}
