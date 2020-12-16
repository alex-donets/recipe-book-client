import { createReducer } from "redux-create-reducer";
import { reducer as reduxFormReducer } from 'redux-form';

import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    FILL_INGREDIENTS_LIST
} from "./constants";

import { IngredientState } from "./types";
import { v4 as uuidv4 } from "uuid";

export const initialState: IngredientState = {
    ingredientList: [],
    form: reduxFormReducer,
    errors: null,
};

export default createReducer(initialState, {
    [ADD_INGREDIENT]: (state, { payload }) => {
        const { ingredientList } = state;

        ingredientList.push(payload);
        const updatedList = ingredientList.map((item) => ({ ...item, id: uuidv4() }));

        return {
            ...state,
            ingredientList: updatedList,
        }
    },

    [FILL_INGREDIENTS_LIST]: (state, { payload }) => {
        return {
            ...state,
            ingredientList: payload,
        }
    },

    [DELETE_INGREDIENT]: (state, { payload }) => {
        const { ingredientList } = state;

        const updatedList = ingredientList.filter(item => item.id !== payload);

        return {
            ...state,
            ingredientList: updatedList,
        }
    },
});
