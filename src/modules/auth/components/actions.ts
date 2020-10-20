import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    SET_USER_INFO,
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
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

export const register = (data: any) => ({
    type: REGISTER_PENDING,
    payload: data,
});

export const registerSuccess = (data: any) => ({
    type: REGISTER_SUCCESS,
    payload: data,
});

export const registerError = (error: any) => ({
    type: REGISTER_ERROR,
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
