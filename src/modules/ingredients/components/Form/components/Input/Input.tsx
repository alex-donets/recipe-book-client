import React from 'react';
import { Form } from 'semantic-ui-react';
import { WrappedFieldProps } from 'redux-form';

const Input = (props: WrappedFieldProps) => {
    const {
        input: { name },
        meta: { touched, error },
    } = props;

    return (
        <Form.Input
            {...props}
            id={`ingredient-${name}-input`}
            name={name}
            size="large"
            error={Boolean(touched && error)}
            fluid
        />
    );
};

export default Input;
