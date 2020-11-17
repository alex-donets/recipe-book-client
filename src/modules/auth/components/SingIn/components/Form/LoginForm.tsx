import React, {BaseSyntheticEvent} from 'react';
import { Button, Form, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getLoading } from "../../../../selectors";
import { LoginFormTypes } from "../../../../types";

const LoginForm = (props: LoginFormTypes) => {
    const {
        values: { email, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;

    const handleOnSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        handleSubmit(e);
    };

    const isLoading = useSelector(getLoading);

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="login-email-input"
                    name="email"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    value={email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                />
                <Form.Input
                    id="login-password-input"
                    fluid
                    type="password"
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                />
                <Button
                    type="submit"
                    className="primary-button"
                    fluid
                    size="large"
                    loading={isLoading}
                >
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

export default LoginForm;
