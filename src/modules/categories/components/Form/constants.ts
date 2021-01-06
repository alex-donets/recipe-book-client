import * as Yup from 'yup';
import { CategoryFormValues } from '../../types';

const FILE_SIZE = 5000000; // 5 Mb
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const formInitialValues: CategoryFormValues = {
    name: '',
    photo: null,
};

export const addValidationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .max(50, 'Category name should be no more than 500 characters')
        .required('Please enter a category name'),
    photo: Yup.mixed()
        .required('Please add a photo')
        .test(
            'fileType',
            'Unsupported File Format.  Please, upload .jpg, .gif or .png',
            (value) => value && SUPPORTED_FORMATS.includes(value.type),
        )
        .test('fileSize', 'File size is too large', (value) => value && value.size <= FILE_SIZE),
});

export const updateValidationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .max(50, 'Category name should be no more than 500 characters')
        .required('Please enter a category name'),
});
