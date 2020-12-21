import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getErrorMessage, getInfoMessage, getSuccessMessage } from '../../../modules/app/selectors';
import { Container } from 'semantic-ui-react';
import { getIsAdmin } from '../../../modules/auth/selectors';

import TermsAndConditions from '../../../modules/terms-of-use/TermsAndConditions';
import SignIn from '../../../modules/auth/components/SingIn/SignIn';
import SignUp from '../../../modules/auth/components/SignUp/SignUp';
import Categories from '../../../modules/categories/Categories';
import Home from '../../../modules/home/Home';

import NotifyError from '../Notifications/NotifyError';
import NotifySuccess from '../Notifications/NotifySuccess';
import NotifyInfo from '../Notifications/NotifyInfo';
import SetPassword from '../../../modules/auth/components/SetPassword/SetPassword';
import ResetPassword from '../../../modules/auth/components/ResetPassword/ResetPassword';
import Recipes from '../../../modules/recipes/Recipes';
import Recipe from '../../../modules/recipes/components/Recipe/Recipe';

const Main = () => {
    const errorMessage = useSelector(getErrorMessage);
    const successMessage = useSelector(getSuccessMessage);
    const infoMessage = useSelector(getInfoMessage);
    const isAdmin = useSelector(getIsAdmin);

    return (
        <Container className="wrapper">
            <Switch>
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={SignUp} />
                <Route path="/forgot-password" component={ResetPassword} />
                <Route path="/set-password/:token" component={SetPassword} />

                <Route exact path="/" component={Home} />
                <Route exact path="/recipes" component={Recipes} />
                <Route exact path="/recipes/:categoryId/:recipeId" component={Recipe} />

                {isAdmin && <Route exact path="/categories" component={Categories} />}

                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            </Switch>

            {errorMessage && <NotifyError />}
            {successMessage && <NotifySuccess />}
            {infoMessage && <NotifyInfo />}
        </Container>
    );
};

export default Main;
