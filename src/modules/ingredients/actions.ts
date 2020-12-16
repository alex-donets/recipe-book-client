import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    CLEAR, FILL_INGREDIENTS_LIST,
} from "./constants";

import {IngredientFormValues} from "./types";

export const addIngredient = (data: IngredientFormValues) => ({
    type: ADD_INGREDIENT,
    payload: data
});

export const deleteIngredient = (id: string) => ({
    type: DELETE_INGREDIENT,
    payload: id
});

export const fillIngredientsList = (data: IngredientFormValues[]) => ({
    type: FILL_INGREDIENTS_LIST,
    payload: data
});

export const clear = () => ({
    type: CLEAR,
});
