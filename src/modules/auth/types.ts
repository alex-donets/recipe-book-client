import { Action } from "redux";
import { FormikState } from "formik";
import { BaseSyntheticEvent } from "react";

export interface AuthState {
    errors: string | null,
    token: string,
    isLoading: boolean,
    isLoggedIn: boolean,
    email: string,
    fullName: string,
    role: string | null,
    googleId: string | null,
};

export interface HandleLogin extends Action {
    payload: {
        email: string,
        password: string,
    }
};

export interface LoginData {
    email: string,
    fullName: string,
    role: string
    token: string,
};

export interface HandleRegister extends Action {
    payload: {
        email: string,
        password: string,
        agreeTaC: boolean,
        fullName: string
    }
};

export interface RegisterFormValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    agreeTaC: boolean,
};

export interface QueryRegisterForm {
    fullname?: string,
    name?: string,
    email: string,
    password: string,
    agreeTaC: boolean,
};

export interface RegisterFormTypes extends FormikState<RegisterFormValues>{
    handleSubmit: (e: BaseSyntheticEvent) => void,
    handleChange: (e: BaseSyntheticEvent) => void,
};

export interface LoginFormValues {
    email: string,
    password: string,
};

export interface SetPassFormValues {
    password: string,
    confirmPassword: string,
};

export interface ResetPassFormValues {
    email: string,
};

export interface QueryResetPassForm {
    password: string,
    key?: string,
    token?: string,
};

export interface HandleSetPassword extends Action {
    payload: SetPassword
};

export interface SetPassword {
    password: string,
    token: string,
    key?: string,
};

export interface HandleResetPassword extends Action {
    payload: {
        email: string,
    }
};

export interface UserInfo {
    fullName: string,
    email: string,
    token: string,
    id: string,
    role?: string,
};
