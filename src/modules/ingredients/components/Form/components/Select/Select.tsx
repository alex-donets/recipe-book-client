import React from 'react';
import { Form } from 'semantic-ui-react';
import { SelectFieldProps } from '../../../../types';

const Select = (props: SelectFieldProps) => {
    const {
        input: { name, onChange, value },
        meta: { touched, error },
    } = props;

    return (
        <Form.Select
            {...props}
            id={`ingredient-${name}-select`}
            name={name}
            error={Boolean(touched && error)}
            placeholder={value || 'e.g. kg'}
            value={value}
            size="large"
            fluid
            onChange={(param, data) => onChange(data.value)}
        />
    );
};

export default Select;
