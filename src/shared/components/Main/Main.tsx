import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getErrorMessage, getInfoMessage, getSuccessMessage } from '../../../modules/app/selectors';
import { Container } from 'semantic-ui-react';
import { getIsAdmin, getIsLoggedIn } from '../../../modules/auth/selectors';
import CircularProgress from '../CircularProgress/CircularProgress';

const TermsAndConditions = lazy(() => import('../../../modules/terms-of-use/TermsAndConditions'));
const SignIn = lazy(() => import('../../../modules/auth/components/SingIn/SignIn'));
const SignUp = lazy(() => import('../../../modules/auth/components/SignUp/SignUp'));
const Categories = lazy(() => import('../../../modules/categories/Categories'));
const Home = lazy(() => import('../../../modules/home/Home'));

const NotifyError = lazy(() => import('../Notifications/NotifyError'));
const NotifySuccess = lazy(() => import('../Notifications/NotifySuccess'));
const NotifyInfo = lazy(() => import('../Notifications/NotifyInfo'));
const SetPassword = lazy(() => import('../../../modules/auth/components/SetPassword/SetPassword'));
const ResetPassword = lazy(() => import('../../../modules/auth/components/ResetPassword/ResetPassword'));
const Recipes = lazy(() => import('../../../modules/recipes/Recipes'));
const Recipe = lazy(() => import('../../../modules/recipes/components/Recipe/Recipe'));
const ChatRoom = lazy(() => import('../../../modules/chat/ChatRoom'));

const Main = () => {
    const errorMessage = useSelector(getErrorMessage);
    const successMessage = useSelector(getSuccessMessage);
    const infoMessage = useSelector(getInfoMessage);
    const isAdmin = useSelector(getIsAdmin);
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Container className="wrapper">
            <Suspense fallback={CircularProgress}>
                <Switch>
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={SignUp} />
                    <Route path="/forgot-password" component={ResetPassword} />
                    <Route path="/set-password/:token" component={SetPassword} />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/recipes/:categoryId/:recipeId" component={Recipe} />

                    {isLoggedIn && <Route exact path="/recipes" component={Recipes} />}
                    {isLoggedIn && <Route exact path="/chat-room" component={ChatRoom} />}

                    {isLoggedIn && isAdmin && <Route exact path="/categories" component={Categories} />}

                    <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
                </Switch>

                {errorMessage && <NotifyError />}
                {successMessage && <NotifySuccess />}
                {infoMessage && <NotifyInfo />}
            </Suspense>
        </Container>
    );
};

export default Main;
