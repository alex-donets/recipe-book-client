import { createReducer } from "redux-create-reducer";

import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    REFRESH_TOKEN_PENDING,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_ERROR,
    SET_USER_INFO,
    LOGIN_ERROR_MESSAGE,
    SET_PASSWORD_PENDING,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_ERROR,
    CLEAR,
} from "./constants";

export const initialState = {
    errors: null,
    token: null,
    isLoading: false,
    isLoggedIn: false,
    email: null,
    fullName: null,
    role: null
};

export default createReducer(initialState, {
    [LOGIN_PENDING]: (state) => ({
        ...state,
        isLoading: true,
    }),

    [LOGIN_SUCCESS]: (state, { payload }) => ({
        ...state,
        token: payload.token,
        isLoading: false,
        isLoggedIn: true,
        email: payload.email,
        fullName: payload['full_name'],
        role: payload.role,
        errors: null
    }),

    // [LOGIN_ERROR]: (state, { payload }) => ({
    //     ...state,
    //     errors: LOGIN_ERROR_MESSAGE,
    //     isLoading: false,
    // }),

    [SET_PASSWORD_PENDING]: (state) => ({
        ...state,
        isLoading: true,
    }),

    [SET_PASSWORD_SUCCESS]: (state) => ({
        ...state,
        isLoading: false,
        errors: null
    }),

    [SET_PASSWORD_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: false,
    }),

    [LOGOUT_PENDING]: (state) => ({
        ...state,
        isLoading: true,
    }),

    [LOGOUT_SUCCESS]: (state) => ({
        ...state,
        token: initialState.token,
        isLoggedIn: false,
        isLoading: false,
        email: initialState.email,
        fullName: initialState.fullName,
        role: initialState.role
    }),

    [LOGOUT_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: false,
    }),

    [REFRESH_TOKEN_PENDING]: (state) => ({
        ...state,
        isLoading: true,
    }),

    [REFRESH_TOKEN_SUCCESS]: (state, { payload }) => ({
        ...state,
        token: payload.token,
        expires: payload.expires,
        isLoading: false,
    }),

    [REFRESH_TOKEN_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: false,
    }),

    [SET_USER_INFO]: (state, { payload }) => ({
        ...state,
        isLoggedIn: true,
        email: payload.email,
        fullName: payload.full_name,
        role: payload.role
    }),

    [CLEAR]: () => ({ ...initialState }),
});
