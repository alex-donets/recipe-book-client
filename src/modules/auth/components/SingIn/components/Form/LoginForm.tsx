import React from 'react';
import '../../styles.scss';
import { Button, Container, Form, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { getLoading } from '../../../../selectors';
import { LoginFormValues } from '../../../../types';
import { FormikProps } from 'formik/dist/types';
import useReactRouter from "use-react-router";

const LoginForm = (props: FormikProps<LoginFormValues>) => {
    const { history } = useReactRouter();

    const isLoading = useSelector(getLoading);

    const {
        values: { email, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(e);
    };

    const handleClick = () => {
        history.push('/forgot-password');
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
                <Form.Input
                    id="login-email-input"
                    data-cy="login-email-input"
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
                    data-cy="login-password-input"
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

                <Container className="forgot-pass-holder">
                    <a onClick={handleClick}>Forgot Password?</a>
                </Container>

                <Button
                    data-cy="login-btn"
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
