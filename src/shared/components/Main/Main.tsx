import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getErrorMessage } from "../../../modules/app/selectors";
import { Container } from "semantic-ui-react";

import TermsAndConditions from "../../../modules/terms-of-use/TermsAndConditions";
import SignIn from "../../../modules/auth/components/SingIn/SignIn";
import SignUp from "../../../modules/auth/components/SignUp/SignUp";
import DisplayError from "../Error/DisplayError";
import Categories from "../../../modules/categories/Categories";

const Main = () => {
    const errorMessage = useSelector(getErrorMessage);

    return (

        <Container text className="wrapper">
            <Switch>
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/categories" component={Categories} />


                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            </Switch>
            {errorMessage &&
                <DisplayError/>
            }
        </Container>

    );
};

export default Main;
