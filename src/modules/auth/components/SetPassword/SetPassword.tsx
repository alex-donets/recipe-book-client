import React from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import { useParams } from 'react-router';

import { useDispatch } from 'react-redux';
import { ParamTypes, SetPassFormValues } from '../../types';
import { setPassword } from '../../actions';
import SetPassForm from './components/SetPassForm/SetPassForm';
import { formInitialValues, formValidationSchema } from './constants';
import { FormikProps } from 'formik/dist/types';
import useReactRouter from 'use-react-router';

const SetPassword = () => {
    const dispatch = useDispatch();

    const { token, email } = useParams<ParamTypes>();
    const { history } = useReactRouter();

    const renderForm = (props: FormikProps<SetPassFormValues>) => <SetPassForm {...props} />;

    const handleOnSubmit = (formData: SetPassFormValues) => {
        const key = process.env.REACT_APP_API_KEY;
        const data = { ...formData, token, key, email };

        dispatch(setPassword(data));
    };

    const handleClick = () => {
        history.push('/login');
    };

    return (
        <Grid textAlign="center" className="auth-wrapper" verticalAlign="middle">
            <Grid.Column className="auth-holder">
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
                    <a onClick={handleClick}> Login</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SetPassword;
