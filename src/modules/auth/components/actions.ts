import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    SET_PASSWORD_PENDING,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_ERROR,
    REFRESH_TOKEN_PENDING,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_ERROR,
    SET_USER_INFO,
    CLEAR,
} from "./constants";

export const login = (data: any) => ({
    type: LOGIN_PENDING,
    payload: data,
});

export const loginSuccess = (data: any) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginError = (error: any) => ({
    type: LOGIN_ERROR,
    payload: error,
});

export const setPassword = (data: any) => ({
    type: SET_PASSWORD_PENDING,
    payload: data,
});

export const setPasswordSuccess = (data: any) => ({
    type: SET_PASSWORD_SUCCESS,
    payload: data,
});

export const setPasswordError = (error: any) => ({
    type: SET_PASSWORD_ERROR,
    payload: error,
});

export const logout = (data: any) => ({
    type: LOGOUT_PENDING,
    payload: data,
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutError = (error: any) => ({
    type: LOGOUT_ERROR,
    payload: error,
});

export const setUserInfo = (data: any) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const clear = () => ({
    type: CLEAR,
});
