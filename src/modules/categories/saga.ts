import { put, takeEvery, select } from "redux-saga/effects";
import { apiClient } from "../../backend/services";

import {
    addCategoryError,
    addCategorySuccess,
    deleteCategoryError,
    deleteCategorySuccess,
    fetchCategoriesError,
    fetchCategoriesSuccess,
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

function* handleFetchCategories() {
    try {
        const { data } = yield apiClient.get(`/categories/`);
        yield put(fetchCategoriesSuccess(data));
    } catch (error) {
        yield put(fetchCategoriesError(error));
    }
}

function* handleAddCategory({ payload }: any) {
    const body = formToQueryAdd(payload);

    try {
        const { data } = yield apiClient.post(`/categories/add`, body);

        yield put(addCategorySuccess(data));
        //yield put(setSuccessMessageIsVisible(true));
    } catch (error) {
        yield put(addCategoryError(error));
    }
}

function* handleUpdateCategory({ payload, payload: { id } }: any) {
    const body = formToQueryUpdate(payload);

    try {
        const { data } = yield apiClient.put(`/categories/${id}/`, body);

        yield put(updateCategorySuccess(data));
        //yield put(setSuccessMessageIsVisible(true));
    } catch (error) {
        yield put(updateCategoryError(error));
    }
}

function* handleDeleteCategory({ payload: id }: any) {
    try {
        yield apiClient.delete(`/categories/${id}/`);

        yield put(deleteCategorySuccess(id));
    } catch (error) {
        yield put(deleteCategoryError(error));
    } finally {
        //yield put(setOpenedCategoryId(null));
        //yield put(setDeleteDialogIsVisible(false));
    }
}

export function* categoriesSaga() {
    yield takeEvery(FETCH_CATEGORIES_PENDING, handleFetchCategories);
    yield takeEvery(ADD_CATEGORY_PENDING, handleAddCategory);
    yield takeEvery(UPDATE_CATEGORY_PENDING, handleUpdateCategory);
    yield takeEvery(DELETE_CATEGORY_PENDING, handleDeleteCategory);
}
