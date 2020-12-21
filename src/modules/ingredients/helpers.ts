import { Schema, ValidationError } from 'yup';
import { IngredientFormValues } from './types';
import { FormErrors } from 'redux-form';

export const validator = <T>(schema: Schema<T>) => async (formValues: IngredientFormValues) => {
    try {
        await schema.validate(formValues, { abortEarly: false });
        return {};
    } catch (errors) {
        throw errors.inner.reduce((errors: FormErrors<IngredientFormValues>, err: ValidationError) => {
            return {
                ...errors,
                [err.path]: err.message,
            };
        }, {});
    }
};
