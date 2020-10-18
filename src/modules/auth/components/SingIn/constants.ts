import * as Yup from "yup";
import { emailRegExp, passwordRegExp } from "../../../../utils/validations";

export const formInitialValues = {
    email: '',
    password: ''
};

export const formValidationSchema = Yup.object({
    email: Yup.string()
        .trim()
        // eslint-disable-next-line no-useless-escape
        .matches(emailRegExp, 'Max 60 characters, symbol "@" is mandatory')
        .required('Please enter your email'),
    password: Yup.string()
        .trim()
        // eslint-disable-next-line no-useless-escape
        .matches(passwordRegExp, 'Password must contain from 8 to 60 characters')
        .required('Please enter password')
});
