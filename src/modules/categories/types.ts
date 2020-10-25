export interface CategoryState {
    categoryList: any,
    openedCategoryId: string | null,
    isLoading: Boolean,
    isEditMode: Boolean,
    isDeleteDialogVisible: Boolean,
    isSuccessMessageVisible: Boolean,
    pendingIds: string[],
    errors: any,
}
