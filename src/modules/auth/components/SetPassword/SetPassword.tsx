import React from 'react';
import {Grid, Header, Message} from "semantic-ui-react";
import {Formik} from "formik";
import { useParams } from "react-router";

import {useDispatch} from "react-redux";
import {SetPassFormValues} from "../../types";
import {setPassword} from "../../actions";
import SetPassForm from "./components/SetPassForm/SetPassForm";
import {formInitialValues, formValidationSchema} from "./constants";

const SetPassword = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { token, email } = useParams();

    const renderForm = (props: any) => <SetPassForm {...props} />;

    const handleOnSubmit = (formData: SetPassFormValues) => {
        const key = process.env.REACT_APP_API_KEY;
        const data = { ...formData, token, key, email };

        dispatch(setPassword(data));
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
                <Header as="h2" className="primary-text">
                    Set a new password
                </Header>

                <Formik
                    render={renderForm}
                    initialValues={formInitialValues}
                    onSubmit={handleOnSubmit}
                    validationSchema={formValidationSchema}
                    enableReinitialize
                />

                <Message>
                    Back to
                    <a href="/login"> Login</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SetPassword;
