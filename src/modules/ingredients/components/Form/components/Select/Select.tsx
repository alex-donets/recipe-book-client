import React from 'react';
import {Form} from "semantic-ui-react";

const Select = (props: any) => {
    const { input: { name, onChange }, meta: { touched, error }} = props;

    return (
        <Form.Select
            {...props}
            id={`ingredient-${name}-select`}
            name={name}
            error={Boolean(touched && error)}
            size='large'
            fluid
            onChange={(param,data) => onChange(data.value)}
        />
    );
};

export default Select;
