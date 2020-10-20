import * as Yup from "yup";
import { emailRegExp, passwordRegExp } from "../../../../utils/validations";

export const formInitialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTaC: false,
};

export const formValidationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .max(50, 'Name should be no more than 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .trim()
        .matches(emailRegExp, 'Max 60 characters, symbol "@" is mandatory')
        .required('Email is required'),
    password: Yup.string()
        .trim()
        .matches(passwordRegExp, 'Password must contain from 8 to 60 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password'),], 'Passwords must match')
        .required('Please confirm password'),
    agreeTaC: Yup.boolean()
        .oneOf([true], 'You must agree to the Terms and Conditions')
});
