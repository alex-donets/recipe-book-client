import React from 'react';
import { Form } from "semantic-ui-react";

const Input = (props: any) => {
    const { input: { name }, meta: { touched, error } } = props;

    return (
        <Form.Input
            {...props}
            id={`ingredient-${name}-input`}
            name={name}
            size='large'
            error={Boolean(touched && error)}
            fluid
        />
    );
};

export default Input;
