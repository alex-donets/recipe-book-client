import React from 'react';
import {Button, Form, Segment} from "semantic-ui-react";
import {useSelector} from "react-redux";
import {getLoading} from "../../../../selectors";
import {SetPassFormValues} from "../../../../types";
import {FormikProps} from "formik/dist/types";

const SetPassForm = (props: FormikProps<SetPassFormValues>) => {
    const {
        values: { password, confirmPassword },
        errors,
        touched,
        handleSubmit,
        handleChange
    } = props;

    const isLoading = useSelector(getLoading);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(e);
    };

    return (
        <Form size="large" onSubmit={handleOnSubmit}>
            <Segment stacked>
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

                <Button
                    className="primary-button"
                    loading={isLoading}
                    disabled={isLoading}
                    fluid
                    size="large"
                    type="submit"
                >
                    Set Password
                </Button>
            </Segment>
        </Form>
    );
};

export default SetPassForm;
