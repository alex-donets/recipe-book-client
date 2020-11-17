import React from 'react';
import '../../styles.scss';
import { useDispatch } from "react-redux";
import { Grid, Header, Message } from "semantic-ui-react";
import { formInitialValues, formValidationSchema } from "./constants";
import { login } from "../../actions";
import { Formik } from "formik";
import LoginForm from "./components/Form/LoginForm";
import { trimFormValues } from "../../../../utils/helpers";
import { LoginFormValues } from "../../types";

const SignIn = () => {
    const dispatch = useDispatch();

    const renderForm = (props: any) => <LoginForm {...props} />;

    const handleOnSubmit = (formData: LoginFormValues) => {
        const formDataPayload = trimFormValues(formData);

        dispatch(login(formDataPayload));
    };

    return (
        <Grid
            textAlign="center"
            className="auth-wrapper"
            verticalAlign="middle"
        >
            <Grid.Column
                className="auth-holder"
            >
                <Header as="h2" className="login-text">
                    Log-in to your account
                </Header>

                <Formik
                    render={renderForm}
                    initialValues={formInitialValues}
                    onSubmit={handleOnSubmit}
                    validationSchema={formValidationSchema}
                    enableReinitialize
                />

                <Message>
                    New to us?
                    <a href="/register"> Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignIn;
