import React, {BaseSyntheticEvent} from 'react';
import {Button, Form, Segment} from "semantic-ui-react";
import {useSelector} from "react-redux";
import {getLoading} from "../../../../selectors";
import {ResetPassFormTypes} from "../../../../types";

const ResetPassForm = (props: ResetPassFormTypes) => {
    const {
        values: { email },
        errors,
        touched,
        handleSubmit,
        handleChange
    } = props;

    const isLoading = useSelector(getLoading);

    const handleOnSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        handleSubmit(e);
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="register-email-input"
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder='Email address'
                    name="email"
                    onChange={handleChange}
                    value={email}
                    error={touched.email && errors.email}
                />

                <Button
                    className="primary-button"
                    loading={isLoading}
                    disabled={isLoading}
                    fluid
                    size="large"
                    type="submit"
                >
                    Send Email
                </Button>
            </Segment>
        </Form>
    );
};

export default ResetPassForm;
