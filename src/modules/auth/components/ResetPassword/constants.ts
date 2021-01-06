import * as Yup from 'yup';
import { emailRegExp } from '../../../../utils/validations';

export const formInitialValues = {
    email: '',
};

export const formValidationSchema = Yup.object({
    email: Yup.string()
        .trim()
        .matches(emailRegExp, 'Please enter a valid email')
        .required('Email is required'),
});
