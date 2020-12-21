import * as Yup from 'yup';
import { emailRegExp } from '../../../../utils/validations';

export const formInitialValues = {
    email: '',
};

export const formValidationSchema = Yup.object({
    email: Yup.string()
        .trim()
        .matches(emailRegExp, 'Max 60 characters, symbol "@" is mandatory')
        .required('Email is required'),
});
