import React from 'react';
import {useDispatch} from "react-redux";
import RegisterForm from "./components/Form/RegisterForm";
import { Grid, Header, Message } from "semantic-ui-react";
import { Formik } from "formik";
import { formInitialValues, formValidationSchema } from "./constants";
import { register } from "../../actions";
import { trimFormValues } from "../../../../utils/helpers";

const SignUp = () => {
    const dispatch = useDispatch();

    const renderForm = (props: any) => <RegisterForm {...props} />;

    const handleOnSubmit = (formData: any) => {
        const formDataPayload = trimFormValues(formData);

        dispatch(register(formDataPayload));
    };

    return (
        <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
        >
            <Grid.Column
                style={{ maxWidth: 450 }}
            >
                <Header as="h2" className="login-text">
                    Creating a new profile
                </Header>

                <Formik
                    render={renderForm}
                    initialValues={formInitialValues}
                    onSubmit={handleOnSubmit}
                    validationSchema={formValidationSchema}
                    enableReinitialize
                />

                <Message>
                    Already with us?
                    <a href="/login"> Sign In</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignUp;
