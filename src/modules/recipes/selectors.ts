import { createSelector } from 'reselect';
import { RootReducerTypes } from '../../core/redux/types';

export const getState = ({ recipes }: RootReducerTypes) => recipes;

export const getRecipeList = createSelector([getState], ({ recipeList }) => recipeList);

export const getRecipeListLoading = createSelector([getState], ({ isLoading }) => isLoading.list);

export const getAddLoading = createSelector([getState], ({ isLoading }) => isLoading.add);

export const getUpdateLoading = createSelector([getState], ({ isLoading }) => isLoading.update);

export const getDeleteLoading = createSelector([getState], ({ isLoading }) => isLoading.delete);

export const getSelectedRecipe = createSelector([getState], ({ selectedRecipe }) => selectedRecipe);

export const getSelectedRecipeId = createSelector([getState], ({ selectedRecipe }) =>
    selectedRecipe ? selectedRecipe._id : '',
);

export const getIsEditMode = createSelector([getState], ({ isEditMode }) => isEditMode);

export const getActivePage = createSelector([getState], ({ activePage }) => activePage);

export const getIsDeleteDialogVisible = createSelector(
    [getState],
    ({ isDeleteDialogVisible }) => isDeleteDialogVisible,
);

export const getPreviewUrl = createSelector([getState], ({ previewCard }) => previewCard.previewUrl);

export const getPreviewTitle = createSelector([getState], ({ previewCard }) => previewCard.previewTitle);
