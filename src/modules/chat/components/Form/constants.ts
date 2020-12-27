import * as Yup from 'yup';

export const formInitialValues = {
    message: '',
};

export const formValidationSchema = Yup.object({
    message: Yup.string()
        .trim()
        .max(500, 'Message should be no more than 500 characters')
        .required('Message content should not be empty'),
});
