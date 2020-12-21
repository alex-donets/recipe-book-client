import * as Yup from 'yup';
import { passwordRegExp } from '../../../../utils/validations';

export const formInitialValues = {
    password: '',
    confirmPassword: '',
};

export const formValidationSchema = Yup.object({
    password: Yup.string()
        .trim()
        .matches(passwordRegExp, 'Password must contain from 8 to 60 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm password'),
});
