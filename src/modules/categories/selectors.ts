import { createSelector } from 'reselect';
import { RootReducerTypes } from '../../core/redux/types';

export const getState = ({ categories }: RootReducerTypes) => categories;

export const getCategoryList = createSelector([getState], ({ categoryList }) => categoryList);

export const getCategoryListLoading = createSelector([getState], ({ isLoading }) => isLoading.list);

export const getAddLoading = createSelector([getState], ({ isLoading }) => isLoading.add);

export const getUpdateLoading = createSelector([getState], ({ isLoading }) => isLoading.update);

export const getDeleteLoading = createSelector([getState], ({ isLoading }) => isLoading.delete);

export const getSelectedCategory = createSelector([getState], ({ selectedCategory }) => selectedCategory);

export const getSelectedCategoryId = createSelector([getState], ({ selectedCategory }) =>
    selectedCategory ? selectedCategory._id : '',
);

export const getCategoryUpdatedAt = createSelector([getState], ({ selectedCategory }) =>
    selectedCategory ? selectedCategory.updatedAt : '',
);

export const getIsEditMode = createSelector([getState], ({ isEditMode }) => isEditMode);

export const getIsContentVisible = createSelector([getState], ({ isContentVisible }) => isContentVisible);

export const getIsDeleteDialogVisible = createSelector(
    [getState],
    ({ isDeleteDialogVisible }) => isDeleteDialogVisible,
);

export const getPreviewUrl = createSelector([getState], ({ previewCard }) => previewCard.previewUrl);

export const getPreviewTitle = createSelector([getState], ({ previewCard }) => previewCard.previewTitle);
