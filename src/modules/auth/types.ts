import { Action } from 'redux';

export interface AuthState {
    errors: string | null;
    userId: string | null;
    token: string | null;
    isLoading: boolean;
    isLoggedIn: boolean;
    email: string | null;
    fullName: string | null;
    role: string | null;
}

export interface HandleLogin extends Action {
    payload: LoginData;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface UserData {
    id?: string;
    email: string;
    fullName: string;
    role: string;
    token: string;
}

export interface RegisterData {
    email: string;
    password: string;
    agreeTaC: boolean;
    fullName: string;
}

export interface HandleRegister extends Action {
    payload: RegisterData;
}

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTaC: boolean;
}

export interface QueryRegisterForm {
    fullname?: string;
    name?: string;
    email: string;
    password: string;
    agreeTaC: boolean;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface SetPassFormValues {
    password: string;
    confirmPassword: string;
}

export interface ResetPassFormValues {
    email: string;
}

export interface QueryResetPassForm {
    password: string;
    key?: string;
    token?: string;
}

export interface HandleSetPassword extends Action {
    payload: SetPassword;
}

export interface SetPassword {
    password: string;
    token: string;
    key?: string;
}

export interface HandleResetPassword extends Action {
    payload: ResetPassword;
}

export interface ResetPassword {
    email: string;
}

export interface UserInfo {
    fullName: string;
    email: string;
    token: string;
    id: string;
    role?: string;
}

export interface ParamTypes {
    token: string;
    email: string;
}
