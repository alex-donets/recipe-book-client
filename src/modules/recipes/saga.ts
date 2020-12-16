import { put, takeEvery } from "redux-saga/effects";
import { apiClient } from "../../backend/services";
import { select } from 'redux-saga/effects';

import {
    addRecipeError,
    addRecipeSuccess,
    clear,
    deleteRecipeError,
    deleteRecipeSuccess,
    fetchRecipesError,
    fetchRecipesSuccess,
    setDeleteDialogIsVisible,
    updateRecipeError,
    updateRecipeSuccess
} from "./actions";

import {
    ADD_RECIPE_PENDING,
    DELETE_RECIPE_PENDING,
    FETCH_RECIPES_PENDING,
    UPDATE_RECIPE_PENDING
} from "./constants";

import { formToQueryAdd, formToQueryUpdate } from "./helpers";
import {AddRecipe, DeleteRecipe, FetchRecipes, UpdateRecipe} from "./types";
import {push} from "connected-react-router";
import {getIngredientList} from "../ingredients/selectors";

function* handleFetchRecipes({ payload }: FetchRecipes) {
    try {
        const { data } = yield apiClient.get(`/recipes/${payload}/`);
        yield put(fetchRecipesSuccess(data));
    } catch (error) {
        yield put(fetchRecipesError(error));
    }
}

function* handleAddRecipe({ payload }: AddRecipe) {
    const ingredients = yield select(getIngredientList);
    const body = formToQueryAdd(payload, ingredients);

    try {
        const { data } = yield apiClient.post(`/recipes/add`, body);

        yield put(addRecipeSuccess(data));
        yield put(push(`/recipes/${ data.categoryId }/${ data._id }`));
    } catch (error) {
        yield put(addRecipeError(error));
    }
}

function* handleUpdateRecipe({ payload }: UpdateRecipe) {
    const ingredients = yield select(getIngredientList);
    const body = formToQueryUpdate(payload, ingredients);
    const { _id } = payload;

    try {
        const { data } = yield apiClient.post(`/recipes/update/${_id}/`, body);

        yield put(updateRecipeSuccess(data));
        yield put(clear());
        yield put(push(`/recipes/${ data.categoryId }/${ data._id }`));
    } catch (error) {
        yield put(updateRecipeError(error));
    }
}

function* handleDeleteRecipe({ payload: id }: DeleteRecipe) {
    try {
        yield apiClient.delete(`/recipes/${id}/`);

        yield put(deleteRecipeSuccess(id));
        yield put(clear());
    } catch (error) {
        yield put(deleteRecipeError(error));
    } finally {
        yield put(setDeleteDialogIsVisible(false));
    }
}

export function* recipesSaga() {
    yield takeEvery(FETCH_RECIPES_PENDING, handleFetchRecipes);
    yield takeEvery(ADD_RECIPE_PENDING, handleAddRecipe);
    yield takeEvery(UPDATE_RECIPE_PENDING, handleUpdateRecipe);
    yield takeEvery(DELETE_RECIPE_PENDING, handleDeleteRecipe);
}
