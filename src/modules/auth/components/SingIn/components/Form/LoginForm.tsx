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
        console.log('props', props)
        handleSubmit();
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="email-input"
                    name="email"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    value={email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                />
                <Form.Input
                    fluid
                    id="password-input"
                    type="password"
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                />
                <Button type="submit" className="login-button" fluid size="large">
                    Login
                </Button>
            </Segment>
        </Form>
    );
};

export default LoginForm;
