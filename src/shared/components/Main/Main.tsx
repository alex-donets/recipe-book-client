import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getErrorMessage, getInfoMessage, getSuccessMessage } from "../../../modules/app/selectors";
import { Container } from "semantic-ui-react";

import TermsAndConditions from "../../../modules/terms-of-use/TermsAndConditions";
import SignIn from "../../../modules/auth/components/SingIn/SignIn";
import SignUp from "../../../modules/auth/components/SignUp/SignUp";
import Categories from "../../../modules/categories/Categories";
import Home from "../../../modules/home/Home";

import NotifyError from "../Notifications/NotifyError";
import NotifySuccess from "../Notifications/NotifySuccess";
import NotifyInfo from "../Notifications/NotifyInfo";

const Main = () => {
    const errorMessage = useSelector(getErrorMessage);
    const successMessage = useSelector(getSuccessMessage);
    const infoMessage = useSelector(getInfoMessage);

    return (
        <Container className="wrapper">
            <Switch>
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/categories" component={Categories} />

                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            </Switch>

            {errorMessage && <NotifyError />}
            {successMessage && <NotifySuccess />}
            {infoMessage && <NotifyInfo />}
        </Container>

    );
};

export default Main;
