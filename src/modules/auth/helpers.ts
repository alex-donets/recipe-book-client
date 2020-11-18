import { LoginFormValues, QueryRegisterForm, QueryResetPassForm } from "./types";

export const registerFormToQuery = ({
    name,
    email,
    password,
    agreeTaC
}: QueryRegisterForm) => ({
    fullName: name,
    email,
    password,
    agreeTaC
});

export const loginFormToQuery = ({
    email,
    password,
}: LoginFormValues) => ({
    email,
    password,
});

export const setFormToQuery = ({
    password,
    key,
    token,
}: QueryResetPassForm) => ({
    password,
    key,
    token,
});
