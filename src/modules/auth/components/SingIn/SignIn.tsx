import React from 'react';
import '../../styles.scss';
import { useDispatch } from 'react-redux';
import { Grid, Header, Message } from 'semantic-ui-react';
import { formInitialValues, formValidationSchema } from './constants';
import { login } from '../../actions';
import { Formik } from 'formik';
import LoginForm from './components/Form/LoginForm';
import { trimFormValues } from '../../../../utils/helpers';
import { LoginFormValues } from '../../types';
import GoogleBtn from './components/GoogleSignIn/GoogleBtn';
import { FormikProps } from 'formik/dist/types';
import useReactRouter from "use-react-router";

const SignIn = () => {
    const dispatch = useDispatch();

    const { history } = useReactRouter();

    const renderForm = (props: FormikProps<LoginFormValues>) => <LoginForm {...props} />;

    const handleOnSubmit = (formData: LoginFormValues) => {
        const formDataPayload = trimFormValues(formData);

        dispatch(login(formDataPayload));
    };

    const handleClick = () => {
        history.push('/register');
    };

    return (
        <Grid textAlign="center" className="auth-wrapper" verticalAlign="middle">
            <Grid.Column className="auth-holder">
                <Header as="h2" className="primary-text">
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
                    <a onClick={handleClick}> Sign Up</a>
                </Message>
                <Message className="sing-in-google">
                    <div className="text-holder">Sign in with Google:</div>

                    <GoogleBtn />
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignIn;
