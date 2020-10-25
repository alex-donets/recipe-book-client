import {createReducer} from "redux-create-reducer";
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
    DELETE_CATEGORY_SUCCESS, CLEAR,
} from "./constants";
import {CategoryState} from "./types";

export const initialState: CategoryState = {
    categoryList: [],
    openedCategoryId: null,
    isLoading: false,
    isEditMode: false,
    isDeleteDialogVisible: false,
    isSuccessMessageVisible: false,
    pendingIds: [],
    errors: null,
};

export default createReducer(initialState, {
    [FETCH_CATEGORIES_PENDING]: (state) => ({
        ...state,
        isLoading: true,
        errors: null,
    }),

    [FETCH_CATEGORIES_SUCCESS]: (state, { payload }) => ({
        ...state,
        categoryList: payload,
        isLoading: false,
        errors: null,
    }),

    [FETCH_CATEGORIES_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: false,
    }),

    [ADD_CATEGORY_PENDING]: (state, { payload }) => {
        const { pendingIds } = state;

        const updatedIds = [...pendingIds];

        if(!pendingIds.includes(payload)) {
            updatedIds.push(payload);
        }

        return {
            ...state,
            pendingIds: updatedIds,
            errors: null,
        }
    },

    [ADD_CATEGORY_SUCCESS]: (state, { payload }) => {
        const { pendingIds } = state;
        const { id } = payload;

        const filteredIds = pendingIds.filter(item => item !== id);

        return {
            ...state,
            pendingIds: filteredIds,
            errors: null,
        }
    },

    [ADD_CATEGORY_ERROR]: (state, { payload }) => {
        const { error, id } = payload;
        const { pendingIds } = state;

        const filteredIds = pendingIds.filter(item => item !== id);

        return {
            ...state,
            errors: error,
            pendingIds: filteredIds,
        }
    },

    [DELETE_CATEGORY_PENDING]: (state, { payload }) => {
        const { pendingIds } = state;

        const updatedIds = [...pendingIds];

        if(!pendingIds.includes(payload)) {
            updatedIds.push(payload);
        }

        return {
            ...state,
            pendingIds: updatedIds,
            errors: null,
        }
    },

    [DELETE_CATEGORY_SUCCESS]: (state, { payload }) => {
        const { pendingIds } = state;

        const filteredIds = pendingIds.filter(item => item !== payload);

        const categoryList = state.categoryList.filter((item: any)  => item.id !== payload);

        return {
            ...state,
            categoryList,
            pendingIds: filteredIds,
            errors: null,
        }
    },

    [DELETE_CATEGORY_ERROR]: (state, { payload }) => {
        const { error, id } = payload;
        const { pendingIds } = state;

        const filteredIds = pendingIds.filter(item => item !== id);

        return {
            ...state,
            errors: error,
            pendingIds: filteredIds,
        }
    },

    [UPDATE_CATEGORY_PENDING]: (state, { payload }) => {
        const { pendingIds } = state;

        const updatedIds = [...pendingIds];

        if(!pendingIds.includes(payload)) {
            updatedIds.push(payload);
        }

        return {
            ...state,
            pendingIds: updatedIds,
            errors: null,
        }
    },

    [UPDATE_CATEGORY_SUCCESS]: (state, { payload }) => {
        const { pendingIds, categoryList } = state;
        const { id } = payload;

        const filteredIds = pendingIds.filter(item => item !== id);

        const updatedList = categoryList.map((item: any) => (item.id === id ? {
            ...item,
            ...payload
        } : item));

        return {
            ...state,
            categoryList: updatedList,
            pendingIds: filteredIds,
            errors: null,
        }
    },

    [UPDATE_CATEGORY_ERROR]: (state, { payload }) => {
        const { error, id } = payload;
        const { pendingIds } = state;

        const filteredIds = pendingIds.filter((item: any) => item !== id);

        return {
            ...state,
            errors: error,
            pendingIds: filteredIds,
        }
    },

    [CLEAR]: () => ({ ...initialState }),
});
