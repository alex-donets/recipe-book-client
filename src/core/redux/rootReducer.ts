import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';

import authReducer from "../../modules/auth/reducer";
import appReducer from "../../modules/app/reducer";
import categoriesReducer from "../../modules/categories/reducer";

const createRootReducer = (history: History) => combineReducers({
    app: appReducer,
    auth: authReducer,
    categories: categoriesReducer,

    router: connectRouter(history)
});

export default createRootReducer;
