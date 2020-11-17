import { put, takeEvery, select } from "redux-saga/effects";
import { apiClient } from "../../backend/services";

import {
    addCategoryError,
    addCategorySuccess, clear,
    deleteCategoryError,
    deleteCategorySuccess,
    fetchCategoriesError,
    fetchCategoriesSuccess, setDeleteDialogIsVisible,
    updateCategoryError,
    updateCategorySuccess
} from "./actions";

import {
    ADD_CATEGORY_PENDING,
    DELETE_CATEGORY_PENDING,
    FETCH_CATEGORIES_PENDING,
    UPDATE_CATEGORY_PENDING
} from "./constants";

import { formToQueryAdd, formToQueryUpdate } from "./helpers";
import { AddCategory, DeleteCategory, UpdateCategory } from "./types";

function* handleFetchCategories() {
    try {
        const { data } = yield apiClient.get(`/categories/`);
        yield put(fetchCategoriesSuccess(data));
    } catch (error) {
        yield put(fetchCategoriesError(error));
    }
}

function* handleAddCategory({ payload }: AddCategory) {
    const body = formToQueryAdd(payload);

    try {
        const { data } = yield apiClient.post(`/categories/add`, body);

        console.log('data', data)

        yield put(addCategorySuccess(data));
        yield put(clear());
    } catch (error) {
        yield put(addCategoryError(error));
    }
}

function* handleUpdateCategory({ payload }: UpdateCategory) {
    const body = formToQueryUpdate(payload);
    const { _id } = payload;

    try {
        const { data } = yield apiClient.post(`/categories/update/${_id}/`, body);

        yield put(updateCategorySuccess(data));
        yield put(clear());
    } catch (error) {
        yield put(updateCategoryError(error));
    }
}

function* handleDeleteCategory({ payload: id }: DeleteCategory) {
    try {
        yield apiClient.delete(`/categories/${id}/`);

        yield put(deleteCategorySuccess(id));
        yield put(clear());
    } catch (error) {
        yield put(deleteCategoryError(error));
    } finally {
        yield put(setDeleteDialogIsVisible(false));
    }
}

export function* categoriesSaga() {
    yield takeEvery(FETCH_CATEGORIES_PENDING, handleFetchCategories);
    yield takeEvery(ADD_CATEGORY_PENDING, handleAddCategory);
    yield takeEvery(UPDATE_CATEGORY_PENDING, handleUpdateCategory);
    yield takeEvery(DELETE_CATEGORY_PENDING, handleDeleteCategory);
}
