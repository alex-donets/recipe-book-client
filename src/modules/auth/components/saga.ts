import { put, call, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
} from "./actions";

import { LOGIN_PENDING, LOGOUT_PENDING, REFRESH_TOKEN_ERROR, SET_PASSWORD_PENDING } from "./constants";

import { apiClient } from "../../../backend/services";
import { removeAuthToken, setAuthToken } from "../../../utils/localStorage";

function* handleLogin ({ payload }: any) {
    try {
        const { data } = yield apiClient.post('/login/', payload);

        yield call(setAuthToken, data);

        yield put(loginSuccess(data));
        yield put(push('/data-sync'));
    } catch (error) {
        yield put(loginError(error));
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
    yield takeEvery(LOGIN_PENDING, handleLogin);
    yield takeEvery([LOGOUT_PENDING], handleLogout);
}
