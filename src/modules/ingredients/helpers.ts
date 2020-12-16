import { Schema, ValidationError } from 'yup';

export const validator = <T>(schema: Schema<T>) => async (formValues: any) => {
    try {
        await schema.validate(formValues, { abortEarly: false });
        return {}
    } catch (errors) {
        throw errors.inner.reduce(
            (errors: {}, err: ValidationError) => {
                return {
                    ...errors,
                    [err.path]: err.message
                }
            },
            {}
        )
    }
};
