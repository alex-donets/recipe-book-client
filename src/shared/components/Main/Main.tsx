import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "../../../components/user/LoginForm";

import { Container } from "semantic-ui-react";
import TermsAndConditions from "../../../modules/termsOfUse/TermsAndConditions";

const Main = () => {
    return (
        <Container text className="wrapper">
            <Switch>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            </Switch>
        </Container>
    );
};

export default Main;
