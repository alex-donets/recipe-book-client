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
    RESET_PASSWORD_PENDING,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    SET_PASSWORD_PENDING,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_ERROR,
} from './constants';

import { LoginData, RegisterFormValues, ResetPassword, SetPassword, UserData, UserInfo } from './types';

import { AxiosError } from 'axios';

export const login = (data: LoginData) => ({
    type: LOGIN_PENDING,
    payload: data,
});

export const loginSuccess = (data: UserData) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginError = (error: AxiosError) => ({
    type: LOGIN_ERROR,
    payload: error,
});

export const register = (data: RegisterFormValues) => ({
    type: REGISTER_PENDING,
    payload: data,
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
});

export const registerError = (error: AxiosError) => ({
    type: REGISTER_ERROR,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT_PENDING,
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutError = (error: AxiosError) => ({
    type: LOGOUT_ERROR,
    payload: error,
});

export const setUserInfo = (data: UserInfo) => ({
    type: SET_USER_INFO,
    payload: data,
});

export const clear = () => ({
    type: CLEAR,
});

export const resetPassword = (data: ResetPassword) => ({
    type: RESET_PASSWORD_PENDING,
    payload: data,
});

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordError = (error: AxiosError) => ({
    type: RESET_PASSWORD_ERROR,
    payload: error,
});

export const setPassword = (data: SetPassword) => ({
    type: SET_PASSWORD_PENDING,
    payload: data,
});

export const setPasswordSuccess = () => ({
    type: SET_PASSWORD_SUCCESS,
});

export const setPasswordError = (error: AxiosError) => ({
    type: SET_PASSWORD_ERROR,
    payload: error,
});
