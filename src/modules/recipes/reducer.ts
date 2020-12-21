import { createReducer } from 'redux-create-reducer';
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
    CLEAR,
    SET_SELECTED_RECIPE,
    SET_CONTENT_VISIBLE,
    SET_EDIT_MODE,
    SET_DELETE_DIALOG_IS_VISIBLE,
    SET_ACTIVE_PAGE,
} from './constants';
import { Recipe, RecipeState } from './types';

export const initialState: RecipeState = {
    recipeList: null,
    selectedRecipe: null,
    isEditMode: false,
    isLoading: {
        list: false,
        add: false,
        update: false,
        delete: false,
    },
    isContentVisible: false,
    previewCard: {
        photo: null,
        previewUrl: null,
        previewTitle: '',
    },
    isDeleteDialogVisible: false,
    isSuccessMessageVisible: false,
    errors: null,
    activePage: 1,
};

export default createReducer(initialState, {
    [FETCH_RECIPES_PENDING]: (state) => ({
        ...state,
        isLoading: {
            ...state.isLoading,
            list: true,
        },
        errors: null,
    }),

    [FETCH_RECIPES_SUCCESS]: (state, { payload }) => ({
        ...state,
        recipeList: payload,
        isLoading: {
            ...state.isLoading,
            list: false,
        },
        errors: null,
    }),

    [FETCH_RECIPES_ERROR]: (state, { payload }) => ({
        ...state,
        errors: payload,
        isLoading: {
            ...state.isLoading,
            list: false,
        },
    }),

    [ADD_RECIPE_PENDING]: (state) => ({
        ...state,
        isLoading: {
            ...state.isLoading,
            add: true,
        },
        errors: null,
    }),

    [ADD_RECIPE_SUCCESS]: (state, { payload }) => {
        const { recipeList } = state;
        const updatedList = recipeList ? [...recipeList] : null;

        updatedList && updatedList.push(payload);

        return {
            ...state,
            recipeList: updatedList,
            isLoading: {
                ...state.isLoading,
                add: false,
            },
            errors: null,
        };
    },

    [ADD_RECIPE_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                add: false,
            },
        };
    },

    [DELETE_RECIPE_PENDING]: (state) => {
        return {
            ...state,
            isLoading: {
                ...state.isLoading,
                delete: true,
            },
            errors: null,
        };
    },

    [DELETE_RECIPE_SUCCESS]: (state, { payload }) => {
        const recipeList = state.recipeList && state.recipeList.filter((item: Recipe) => item._id !== payload);

        return {
            ...state,
            recipeList: recipeList || null,
            isLoading: {
                ...state.isLoading,
                delete: false,
            },
            errors: null,
        };
    },

    [DELETE_RECIPE_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                delete: false,
            },
        };
    },

    [UPDATE_RECIPE_PENDING]: (state, { payload }) => {
        return {
            ...state,
            isLoading: {
                ...state.isLoading,
                update: true,
            },
            errors: null,
        };
    },

    [UPDATE_RECIPE_SUCCESS]: (state, { payload }) => {
        const { recipeList } = state;
        const { _id } = payload;

        const updatedList =
            recipeList &&
            recipeList.map((item: Recipe) =>
                item._id === _id
                    ? {
                          ...item,
                          ...payload,
                      }
                    : item,
            );

        return {
            ...state,
            recipeList: updatedList || null,
            isLoading: {
                ...state.isLoading,
                update: false,
            },
            errors: null,
        };
    },

    [UPDATE_RECIPE_ERROR]: (state, { payload }) => {
        const { error } = payload;

        return {
            ...state,
            errors: error,
            isLoading: {
                ...state.isLoading,
                update: false,
            },
        };
    },

    [SET_SELECTED_RECIPE]: (state, { payload }) => {
        const { recipeList } = state;
        const selectedRecipe = recipeList && recipeList.find((item: Recipe) => item._id === payload);

        return {
            ...state,
            selectedRecipe: selectedRecipe || null,
        };
    },

    [SET_CONTENT_VISIBLE]: (state, { payload }) => ({
        ...state,
        isContentVisible: payload,
    }),

    [SET_EDIT_MODE]: (state, { payload }) => ({
        ...state,
        isEditMode: payload,
    }),

    [SET_DELETE_DIALOG_IS_VISIBLE]: (state, { payload }) => ({
        ...state,
        isDeleteDialogVisible: payload,
    }),

    [SET_ACTIVE_PAGE]: (state, { payload }) => ({
        ...state,
        activePage: payload,
    }),

    [CLEAR]: (state) => ({
        ...initialState,
        recipeList: state.recipeList,
    }),
});
