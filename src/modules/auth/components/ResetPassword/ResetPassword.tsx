import React from 'react';
import '../../styles.scss';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { ResetPassFormValues } from '../../types';
import { trimFormValues } from '../../../../utils/helpers';
import { resetPassword } from '../../actions';
import ResetPassForm from './components/ResetPassForm/ResetPassForm';
import { formInitialValues, formValidationSchema } from './constants';
import { FormikProps } from 'formik/dist/types';
import useReactRouter from "use-react-router";

const ResetPassword = () => {
    const dispatch = useDispatch();

    const { history } = useReactRouter();

    const renderForm = (props: FormikProps<ResetPassFormValues>) => <ResetPassForm {...props} />;

    const handleOnSubmit = (formData: ResetPassFormValues) => {
        const formDataPayload = trimFormValues(formData);

        dispatch(resetPassword(formDataPayload));
    };

    const handleClick = () => {
        history.push('/login');
    };

    return (
        <Grid textAlign="center" className="auth-wrapper" verticalAlign="middle">
            <Grid.Column className="auth-holder">
                <Header as="h2" className="primary-text">
                    Type your email address
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
                    <a onClick={handleClick}> Login</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default ResetPassword;
