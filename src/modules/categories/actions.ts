import {
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS,
    ADD_CATEGORY_ERROR,
    ADD_CATEGORY_PENDING,
    ADD_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_PENDING,
    UPDATE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_PENDING,
    DELETE_CATEGORY_SUCCESS,
    SET_SELECTED_CATEGORY,
    SET_EDIT_MODE,
    SET_DELETE_DIALOG_IS_VISIBLE,
    SET_CATEGORY_PREVIEW_CARD,
    CLEAR,
    SET_CONTENT_VISIBLE,
} from './constants';

import { CategoryFormValues, Category, PreviewCard, CategoryAddValues } from './types';

import { AxiosError } from 'axios';

export const fetchCategories = () => ({
    type: FETCH_CATEGORIES_PENDING,
});

export const fetchCategoriesSuccess = (data: Category[]) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: data,
});

export const fetchCategoriesError = (error: AxiosError) => ({
    type: FETCH_CATEGORIES_ERROR,
    payload: error,
});

export const addCategory = (data: CategoryAddValues) => ({
    type: ADD_CATEGORY_PENDING,
    payload: data,
});

export const addCategorySuccess = (data: Category) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data,
});

export const addCategoryError = (error: AxiosError) => ({
    type: ADD_CATEGORY_ERROR,
    payload: error,
});

export const updateCategory = (data: CategoryFormValues) => ({
    type: UPDATE_CATEGORY_PENDING,
    payload: data,
});

export const updateCategorySuccess = (id: string) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: id,
});

export const updateCategoryError = (error: AxiosError) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: error,
});

export const deleteCategory = (id: string | null) => ({
    type: DELETE_CATEGORY_PENDING,
    payload: id,
});

export const deleteCategorySuccess = (id: string) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: id,
});

export const deleteCategoryError = (error: AxiosError) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error,
});

export const setSelectedCategory = (id: string) => ({
    type: SET_SELECTED_CATEGORY,
    payload: id,
});

export const setContentVisible = (data: boolean) => ({
    type: SET_CONTENT_VISIBLE,
    payload: data,
});

export const setEditMode = (data: boolean) => ({
    type: SET_EDIT_MODE,
    payload: data,
});

export const setDeleteDialogIsVisible = (isVisible: boolean) => ({
    type: SET_DELETE_DIALOG_IS_VISIBLE,
    payload: isVisible,
});

export const setPreviewCard = (data: PreviewCard) => ({
    type: SET_CATEGORY_PREVIEW_CARD,
    payload: data,
});

export const clear = () => ({
    type: CLEAR,
});
