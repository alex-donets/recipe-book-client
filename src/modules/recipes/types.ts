import { Action } from 'redux';
import { AxiosError } from 'axios';
import { IngredientFormValues } from '../ingredients/types';

export interface RecipeState {
    recipeList: Recipe[] | null;
    selectedRecipe: Recipe | null;
    isLoading: {
        list: boolean;
        add: boolean;
        update: boolean;
        delete: boolean;
    };
    isEditMode: boolean;
    isContentVisible: boolean;
    previewCard: {
        photo: File | null;
        previewUrl: string | null;
        previewTitle: string;
    };
    isDeleteDialogVisible: boolean;
    isSuccessMessageVisible: boolean;
    errors: AxiosError | null;
    activePage: number;
}

export interface Recipe {
    _id: string;
    name: string;
    photo: {
        contentType: string;
        data: {
            type: string;
            data: number[];
        };
        originalName: string;
        size: number;
    } | null;
    directions: string;
    categoryId: string;
    userId: string;
    ingredients: IngredientFormValues[];
    updatedAt: number;
}

export interface RecipeItemTypes {
    item: Recipe;
    showDivider: boolean;
}

export interface FetchRecipes extends Action {
    payload: string;
}

export interface AddRecipe extends Action {
    payload: QueryAddRecipe;
}

export interface UpdateRecipe extends Action {
    payload: QueryUpdateRecipe;
}

export interface QueryAddRecipe {
    name: string;
    categoryId: string;
    photo: File;
    userId: string;
    directions: string;
}

export interface QueryUpdateRecipe {
    _id: string;
    name: string;
    categoryId: string;
    photo?: File;
    userId: string;
    directions: string;
}

export interface DeleteRecipe extends Action {
    payload: string;
}

export interface RecipeFormValues {
    name: string;
    categoryId: string;
    photo: File | null;
    directions: string;
}

export interface RecipeFormProps {
    formProps: {
        isValid?: boolean;
    };
}

export interface ParamTypes {
    categoryId: string;
    recipeId: string;
}

export interface SubmitRecipes {
    submitIngredients: (formData: IngredientFormValues) => void;
}
