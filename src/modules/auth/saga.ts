import { put, call, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    registerSuccess, registerError,
} from "./actions";

import { LOGIN_PENDING, LOGOUT_PENDING, REGISTER_PENDING } from "./constants";

import { apiClient } from "../../backend/services";
import { removeAuthToken, setAuthToken } from "../../utils/localStorage";
import { loginFormToQuery, registerFormToQuery } from "./helpers";
import { HandleLogin, HandleRegister } from "./types";

function* handleLogin ({ payload }: HandleLogin) {
    try {
        const body = loginFormToQuery(payload);
        const { data } = yield apiClient.post('/users/login', body);

        yield call(setAuthToken, data);
        yield put(loginSuccess(data));
        yield put(push('/home'));
    } catch (error) {
        yield put(loginError(error));
    }
}

function* handleRegister ({ payload }: HandleRegister) {
    try {
        const body = registerFormToQuery(payload);

        yield apiClient.post('/users/register', body);

        yield put(registerSuccess());
        yield put(push('/login'));
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
