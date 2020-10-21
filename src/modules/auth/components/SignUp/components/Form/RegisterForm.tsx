import React from 'react';
import {Button, Checkbox, Form, Segment} from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getLoading } from "../../../../selectors";

const RegisterForm = (props: any) => {
    const {
        values: { name, email, password, confirmPassword, agreeTaC },
        errors,
        touched,
        handleSubmit,
        handleChange
    } = props;

    const isLoading = useSelector(getLoading);

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        handleSubmit();
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="register-name-input"
                    name="name"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder='Name'
                    onChange={handleChange}
                    value={name}
                    error={touched.name && errors.name}
                />

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
                <Form.Input
                    id="register-password-input"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder='Password'
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    error={touched.password && errors.password}
                />
                <Form.Input
                    id="register-confirmPassword-input"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder='Confirm password'
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                    error={touched.confirmPassword && errors.confirmPassword}
                />
                <Form.Field
                    id="register-agreeTaC-input"
                    control={Checkbox}
                    required
                    name="agreeTaC"
                    onChange={handleChange}
                    value={agreeTaC}
                    error={touched.agreeTaC && errors.agreeTaC}
                    label={
                        <label>
                            I agree to the{' '}
                            <a href="/terms-and-conditions">
                                Terms and Conditions
                            </a>
                        </label>
                    }
                />
                <Button
                    className="login-button"
                    loading={isLoading}
                    disabled={isLoading}
                    fluid
                    size="large"
                    type="submit"
                >
                    Register
                </Button>
            </Segment>
        </Form>
    );
};

export default RegisterForm;
