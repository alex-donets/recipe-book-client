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
    DELETE_CATEGORY_SUCCESS,
    CLEAR,
    SET_SELECTED_CATEGORY,
    SET_CONTENT_VISIBLE,
    SET_EDIT_MODE,
    SET_HOME_PAGE,
    SET_DELETE_DIALOG_IS_VISIBLE,
    SET_CATEGORY_PREVIEW_CARD,
    CLEAR_CATEGORY_PREVIEW_CARD,
} from "./constants";
import {Category, CategoryState} from "./types";

export const initialState: CategoryState = {
    categoryList: [],
    selectedCategory: null,
    isEditMode: false,
    isLoading: {
        list: false,
        add: false,
        update: false,
        delete: false,
    },
    isHomePage: false,
    isContentVisible: false,
    previewCard: {
        photo: null,
        previewUrl: null,
        previewTitle: ''
    },
    isDeleteDialogVisible: false,
    isSuccessMessageVisible: false,
    errors: null,
};

export default createReducer(initialState, {
    [FETCH_CATEGORIES_PENDING]: (state) => ({
        ...state,
        isLoading: {
            ...state.isLoading,
            list: true
        },
        errors: null,
    }),

    [FETCH_CATEGORIES_SUCCESS]: (state, { payload }) => ({
        ...state,
        categoryList: payload,
        isLoading: {
            ...state.isLoading,
            list: false
        },
        errors: null,
    }),

    [FETCH_CATEGORIES_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: {
            ...state.isLoading,
            list: false
        },
    }),

    [ADD_CATEGORY_PENDING]: (state) => ({
        ...state,
        isLoading: {
            ...state.isLoading,
            add: true
        },
        errors: null,
    }),

    [ADD_CATEGORY_SUCCESS]: (state, { payload }) => {
        const { categoryList } = state;

        const updatedList = [...categoryList];
        updatedList.push(payload);

        return {
            ...state,
            categoryList: updatedList,
            isLoading: {
                ...state.isLoading,
                add: false,
            },
            errors: null,
        }
    },

    [ADD_CATEGORY_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                add: false,
            },
        }
    },

    [DELETE_CATEGORY_PENDING]: (state) => {

        return {
            ...state,
            isLoading: {
                ...state.isLoading,
                delete: true,
            },
            errors: null,
        }
    },

    [DELETE_CATEGORY_SUCCESS]: (state, { payload }) => {
        const categoryList = state.categoryList.filter((item: Category)  => item._id !== payload);

        return {
            ...state,
            categoryList,
            isLoading: {
                ...state.isLoading,
                delete: false,
            },
            errors: null,
        }
    },

    [DELETE_CATEGORY_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                delete: false,
            },
        }
    },

    [UPDATE_CATEGORY_PENDING]: (state, { payload }) => {
        return {
            ...state,
            isLoading: {
                ...state.isLoading,
                update: true,
            },
            errors: null,
        }
    },

    [UPDATE_CATEGORY_SUCCESS]: (state, { payload }) => {
        const { categoryList } = state;
        const { _id } = payload;

        const updatedList = categoryList.map((item: Category) => (item._id === _id ? {
            ...item,
            ...payload
        } : item));

        return {
            ...state,
            categoryList: updatedList,
            isLoading: {
                ...state.isLoading,
                update: false,
            },
            errors: null,
        }
    },

    [UPDATE_CATEGORY_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                update: false,
            },
        }
    },

    [SET_SELECTED_CATEGORY]: (state, { payload }) => {
        const { categoryList } = state;
        const selectedCategory = categoryList.find((item: Category) => item._id === payload);

        return {
            ...state,
            selectedCategory: selectedCategory || null,
        }
    },

    [SET_CONTENT_VISIBLE]: (state, { payload }) => ({
        ...state,
        isContentVisible: payload,
    }),

    [SET_EDIT_MODE]: (state, { payload }) => ({
        ...state,
        isEditMode: payload,
    }),

    [SET_HOME_PAGE]: (state, { payload }) => ({
        ...state,
        isHomePage: payload,
    }),

    [SET_DELETE_DIALOG_IS_VISIBLE]: (state, { payload }) => ({
        ...state,
        isDeleteDialogVisible: payload
    }),

    [SET_CATEGORY_PREVIEW_CARD]: (state, { payload }) => ({
        ...state,
        previewCard: { ...state.previewCard, ...payload }
    }),

    [CLEAR_CATEGORY_PREVIEW_CARD]: (state) => ({
        ...state,
        previewCard: initialState.previewCard
    }),

    [CLEAR]: (state) => ({
        ...initialState,
        categoryList: state.categoryList
    }),
});
