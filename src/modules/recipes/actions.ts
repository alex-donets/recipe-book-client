import {
    FETCH_RECIPES_ERROR,
    FETCH_RECIPES_PENDING,
    FETCH_RECIPES_SUCCESS,
    ADD_RECIPE_ERROR,
    ADD_RECIPE_PENDING,
    ADD_RECIPE_SUCCESS,
    UPDATE_RECIPE_ERROR,
    UPDATE_RECIPE_PENDING,
    UPDATE_RECIPE_SUCCESS,
    DELETE_RECIPE_ERROR,
    DELETE_RECIPE_PENDING,
    DELETE_RECIPE_SUCCESS,
    SET_SELECTED_RECIPE,
    SET_EDIT_MODE,
    SET_DELETE_DIALOG_IS_VISIBLE,
    CLEAR,
    SET_ACTIVE_PAGE,
} from './constants';

import { Recipe, RecipeFormValues } from './types';

import { AxiosError } from 'axios';

export const fetchRecipes = (categoryId: string) => ({
    type: FETCH_RECIPES_PENDING,
    payload: categoryId,
});

export const fetchRecipesSuccess = (data: Recipe[]) => ({
    type: FETCH_RECIPES_SUCCESS,
    payload: data,
});

export const fetchRecipesError = (error: AxiosError) => ({
    type: FETCH_RECIPES_ERROR,
    payload: error,
});

export const addRecipe = (data: RecipeFormValues) => ({
    type: ADD_RECIPE_PENDING,
    payload: data,
});

export const addRecipeSuccess = (data: Recipe) => ({
    type: ADD_RECIPE_SUCCESS,
    payload: data,
});

export const addRecipeError = (error: AxiosError) => ({
    type: ADD_RECIPE_ERROR,
    payload: error,
});

export const updateRecipe = (data: RecipeFormValues) => ({
    type: UPDATE_RECIPE_PENDING,
    payload: data,
});

export const updateRecipeSuccess = (id: string) => ({
    type: UPDATE_RECIPE_SUCCESS,
    payload: id,
});

export const updateRecipeError = (error: AxiosError) => ({
    type: UPDATE_RECIPE_ERROR,
    payload: error,
});

export const deleteRecipe = (id: string | null) => ({
    type: DELETE_RECIPE_PENDING,
    payload: id,
});

export const deleteRecipeSuccess = (id: string) => ({
    type: DELETE_RECIPE_SUCCESS,
    payload: id,
});

export const deleteRecipeError = (error: AxiosError) => ({
    type: DELETE_RECIPE_ERROR,
    payload: error,
});

export const setSelectedRecipe = (id: string) => ({
    type: SET_SELECTED_RECIPE,
    payload: id,
});

export const setEditMode = (data: boolean) => ({
    type: SET_EDIT_MODE,
    payload: data,
});

export const setDeleteDialogIsVisible = (isVisible: boolean) => ({
    type: SET_DELETE_DIALOG_IS_VISIBLE,
    payload: isVisible,
});

export const setActivePage = (num?: string | number) => ({
    type: SET_ACTIVE_PAGE,
    payload: num,
});

export const clear = () => ({
    type: CLEAR,
});
