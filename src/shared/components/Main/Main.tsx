import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Container } from "semantic-ui-react";
import TermsAndConditions from "../../../modules/termsOfUse/TermsAndConditions";
import SignIn from "../../../modules/auth/components/SingIn/SignIn";
import SignUp from "../../../modules/auth/components/SignUp/SignUp";

const Main = () => {
    return (
        <Container text className="wrapper">
            <Switch>
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            </Switch>
        </Container>
    );
};

export default Main;
