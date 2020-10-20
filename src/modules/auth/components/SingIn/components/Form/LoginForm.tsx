import React from 'react';
import { Button, Form, Segment } from "semantic-ui-react";

const LoginForm = (props: any) => {
    const {
        values: { email, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
        loginError
    } = props;

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        handleSubmit();
    };

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
                <Button type="submit" className="login-button" fluid size="large">
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

export default LoginForm;
