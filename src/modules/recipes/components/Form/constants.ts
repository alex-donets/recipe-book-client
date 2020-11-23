import * as Yup from "yup";

const FILE_SIZE = 5000000; // 5 Mb
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const formInitialValues = {
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
        .test('fileSize', "File size is too large", value => value && value.size <= FILE_SIZE)
        .test('fileType', "Unsupported File Format", value => value && SUPPORTED_FORMATS.includes(value.type) ),
    categoryId: Yup.string()
        .required('Please select a category'),
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
    categoryId: Yup.string()
        .required('Please select a category'),
    directions: Yup.string()
        .trim()
        .required('Please enter directions')
        .max(5000, 'Directions should be no more than 5000 characters'),
});
