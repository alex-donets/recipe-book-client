import { createReducer } from 'redux-create-reducer';

import { ADD_INGREDIENT, CLEAR, DELETE_INGREDIENT, FILL_INGREDIENTS_LIST } from './constants';

import { IngredientState } from './types';
import { v4 as uuidv4 } from 'uuid';

export const initialState: IngredientState = {
    ingredientList: [],
    errors: null,
};

export default createReducer(initialState, {
    [ADD_INGREDIENT]: (state, { payload }) => {
        const { ingredientList } = state;

        const addIngredient = { ...payload, id: uuidv4() };
        const ingredients = [...ingredientList];

        ingredients.push(addIngredient);

        return {
            ...state,
            ingredientList: ingredients,
        };
    },

    [FILL_INGREDIENTS_LIST]: (state, { payload }) => {
        return {
            ...state,
            ingredientList: payload,
        };
    },

    [DELETE_INGREDIENT]: (state, { payload }) => {
        const { ingredientList } = state;

        const updatedList = ingredientList.filter((item) => item.id !== payload);

        return {
            ...state,
            ingredientList: updatedList,
        };
    },

    [CLEAR]: () => ({ ...initialState }),
});
