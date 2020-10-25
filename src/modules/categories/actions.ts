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
} from "./constants";

export const fetchCategories = () => ({
    type: FETCH_CATEGORIES_PENDING
});

export const fetchCategoriesSuccess = (data: any) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: data
});

export const fetchCategoriesError = (error: any) => ({
    type: FETCH_CATEGORIES_ERROR,
    payload: error
});

export const addCategory = (data: any) => ({
    type: ADD_CATEGORY_PENDING,
    payload: data
});

export const addCategorySuccess = (data: any) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data
});

export const addCategoryError = (error: any) => ({
    type: ADD_CATEGORY_ERROR,
    payload: error
});

export const updateCategory = (data: any) => ({
    type: UPDATE_CATEGORY_PENDING,
    payload: data
});

export const updateCategorySuccess = (id: any) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: id
});

export const updateCategoryError = (error: any) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: error
});

export const deleteCategory = (id: any) => ({
    type: DELETE_CATEGORY_PENDING,
    payload: id
});

export const deleteCategorySuccess = (id: any) => ({
    type: DELETE_CATEGORY_SUCCESS
});

export const deleteCategoryError = (error: any) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error
});
