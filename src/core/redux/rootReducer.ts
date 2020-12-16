import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';

import authReducer from "../../modules/auth/reducer";
import appReducer from "../../modules/app/reducer";
import categoriesReducer from "../../modules/categories/reducer";
import recipesReducer from "../../modules/recipes/reducer";
import ingredientsReducer from "../../modules/ingredients/reducer";
import { reducer as reduxFormReducer } from 'redux-form';

const createRootReducer = (history: History) => combineReducers({
    app: appReducer,
    auth: authReducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    form: reduxFormReducer,

    router: connectRouter(history)
});

export default createRootReducer;
