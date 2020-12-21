import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory({ basename: process.env.REACT_APP_BASENAME || '/' });

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = createRootReducer(history);

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const isDevEnv = process.env.NODE_ENV === 'development';
    const createdStore = isDevEnv
        ? createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger)))
        : createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))));

    sagaMiddleware.run(rootSaga);

    return createdStore;
};

const store = configureStore();

export { history, configureStore, store };
