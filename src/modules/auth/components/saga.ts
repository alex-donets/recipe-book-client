import { put, call, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    registerSuccess, registerError,
} from "./actions";

import { LOGIN_PENDING, LOGOUT_PENDING, REGISTER_PENDING } from "./constants";

import { apiClient } from "../../../backend/services";
import { removeAuthToken, setAuthToken } from "../../../utils/localStorage";
import { loginFormToQuery, registerFormToQuery } from "./helpers";

function* handleLogin ({ payload }: any) {
    try {
        const body = loginFormToQuery(payload);
        const { data } = yield apiClient.post('/users/login', body);

        //yield call(setAuthToken, data);

        yield put(loginSuccess(data));
        yield put(push('/home'));
    } catch (error) {
        yield put(loginError(error));
    }
}

function* handleRegister ({ payload }: any) {
    try {
        const body = registerFormToQuery(payload);

        const { data } = yield apiClient.post('/users/register', body);

        yield put(registerSuccess(data));
        yield put(push('/home'));
    } catch (error) {
        yield put(registerError(error));
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
    yield takeEvery([LOGOUT_PENDING], handleLogout);
}
