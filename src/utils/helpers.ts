import isString from 'lodash/isString';

export const trimFormValues = <T>(formFields: T) =>
    Object.keys(formFields).reduce((total: T, current) => {
        const itemValue = total[current as keyof T];
        return {
            ...total,
            [current]: isString(itemValue) ? itemValue.trim() : itemValue,
        };
    }, formFields);
