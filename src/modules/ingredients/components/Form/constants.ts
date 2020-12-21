import * as Yup from 'yup';

export const formInitialValues = {
    name: '',
    quantity: 0,
    measure: '',
};

export const formValidationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required('Please enter an ingredient name')
        .max(50, 'Name should be no more than 50 characters'),
    quantity: Yup.number()
        .required('Please enter directions')
        .max(999, 'Quantity should be no more than 999 pcs')
        .min(1, 'Quantity should not be no less than 1 pcs'),
    measure: Yup.string().required('Please select a category'),
});
