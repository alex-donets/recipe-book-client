import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryHeading from './components/Heading/CategoryHeading';
import {
    getCategoryListLoading,
    getIsContentVisible,
    getIsDeleteDialogVisible,
    getSelectedCategoryId,
} from './selectors';

import CategoryContent from './components/Content/CategoryContent';
import CircularProgress from '../../shared/components/CircularProgress/CircularProgress';
import { deleteCategory, setDeleteDialogIsVisible } from './actions';
import CategoryHeadingLoaded from './components/Heading/CategoryHeadingLoaded';

const ConfirmationModal = lazy(() => import('../../shared/components/ConfirmationModal/ConfirmationModal'));

const Categories = () => {
    const dispatch = useDispatch();

    const isContentVisible = useSelector(getIsContentVisible);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const isListLoading = useSelector(getCategoryListLoading);
    const selectedCategoryId = useSelector(getSelectedCategoryId);

    const onConfirm = () => {
        dispatch(deleteCategory(selectedCategoryId));
        dispatch(setDeleteDialogIsVisible(false));
    };

    const onDiscard = () => {
        dispatch(setDeleteDialogIsVisible(false));
    };

    return (
        <>
            {!isListLoading && <CategoryHeading />}
            {isListLoading && <CategoryHeadingLoaded />}

            {isContentVisible && <CategoryContent />}

            <Suspense fallback={CircularProgress}>
                {isDeleteDialogVisible && (
                    <ConfirmationModal
                        title="Deleting a category"
                        content="Please confirm deleting this category"
                        onConfirm={onConfirm}
                        onDiscard={onDiscard}
                    />
                )}
            </Suspense>
        </>
    );
};

export default Categories;
