import isString from "lodash/isString";

export const trimFormValues = (formFields: any) => Object.keys(formFields).reduce((total, current) => {
    const itemValue = total[current];
    return {
        ...total,
        [current]: isString(itemValue) ? itemValue.trim() : itemValue
    }
}, formFields);
