import {Action} from "redux";
import {AxiosError} from "axios";

export interface RecipeState {
    recipeList: Recipe[],
    selectedRecipe: Recipe | null,
    isLoading: {
        list: boolean,
        add: boolean,
        update: boolean,
        delete: boolean,
    },
    isEditMode: boolean,
    isContentVisible: boolean,
    previewCard: {
        photo: File | null,
        previewUrl: string | null,
        previewTitle: string
    },
    isDeleteDialogVisible: boolean,
    isSuccessMessageVisible: boolean,
    errors: AxiosError | null,
    activePage: number,
};

export interface Recipe {
    _id: string,
    name: string,
    photo: {
        contentType: string,
        data: {
            type: string,
            data: number[],
        },
        originalName: string,
        size: number,
    },
    directions: string,
    categoryId: string,
    userId: string,
};

export interface RecipeItemTypes {
    item: Recipe,
    showDivider: boolean,
};

export interface FetchRecipes extends Action {
    payload: string
};

export interface AddRecipe extends Action {
    payload: QueryAddRecipe
};

export interface UpdateRecipe extends Action {
    payload: {
        _id: string,
        name?: string,
        photo?: File,
        directions?: string,
        categoryId?: string,
        userId?: string,
    }
};

export interface QueryAddRecipe {
    name: string,
    categoryId: string,
    photo: File,
    directions: string,
};

export interface QueryUpdateRecipe {
    name?: string,
    categoryId?: string,
    photo?: File,
    userId?: string,
    directions?: string,
};

export interface DeleteRecipe extends Action {
    payload: string
};

export interface RecipeFormValues {
    name: string,
    categoryId: string,
    photo: File | null,
    directions: string,
};

export interface RecipeFormProps {
    formProps: {
        isValid?: boolean
    },
};

