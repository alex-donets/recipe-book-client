import * as Yup from 'yup';
import { emailRegExp } from '../../../../utils/validations';

export const formInitialValues = {
    email: '',
    password: '',
};

export const formValidationSchema = Yup.object({
    email: Yup.string().trim().matches(emailRegExp, 'Please enter a valid email').required('Please enter your email'),
    password: Yup.string().trim().required('Please enter a password'),
});
