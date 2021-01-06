import * as Yup from 'yup';
import { RecipeFormValues } from '../../types';

const FILE_SIZE_MAX = 512000; // 500 kB
const FILE_SIZE_MIN = 5120; // 5 kB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const formInitialValues: RecipeFormValues = {
    name: '',
    photo: null,
    categoryId: '',
    directions: '',
};

export const addValidationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .required('Please enter a category name')
        .max(50, 'Name should be no more than 50 characters'),
    photo: Yup.mixed()
        .required('Please add a photo')
        .test(
            'fileType',
            'Unsupported File Format. Please, upload .jpg, .gif or .png',
            (value) => value && SUPPORTED_FORMATS.includes(value.type),
        )
        .test('fileSize', 'File size should be no more than 500 kB', (value) => value && value.size <= FILE_SIZE_MAX)
        .test('fileSize', 'File size should be no less than 5 kB', (value) => value && value.size >= FILE_SIZE_MIN),
    categoryId: Yup.string().required('Please select a category'),
    directions: Yup.string()
        .trim()
        .required('Please enter directions')
        .max(5000, 'Directions should be no more than 5000 characters'),
});

export const updateValidationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .required('Please enter a category name')
        .max(50, 'Name should be no more than 50 characters'),
    categoryId: Yup.string().required('Please select a category'),
    directions: Yup.string()
        .trim()
        .required('Please enter directions')
        .max(5000, 'Directions should be no more than 5000 characters'),
});
