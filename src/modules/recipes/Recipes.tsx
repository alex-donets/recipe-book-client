import React, { lazy, Suspense } from 'react';
import CircularProgress from '../../shared/components/CircularProgress/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDeleteDialogVisible, getRecipeListLoading, getSelectedRecipeId } from '../recipes/selectors';
import RecipeContent from './components/Content/RecipeContent';
import { deleteRecipe, setDeleteDialogIsVisible } from './actions';
import useReactRouter from 'use-react-router';

const ConfirmationModal = lazy(() => import('../../shared/components/ConfirmationModal/ConfirmationModal'));

const Recipes = () => {
    const dispatch = useDispatch();

    const { history } = useReactRouter();

    const isListLoading = useSelector(getRecipeListLoading);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const selectedRecipeId = useSelector(getSelectedRecipeId);

    const onConfirm = () => {
        dispatch(deleteRecipe(selectedRecipeId));
        dispatch(setDeleteDialogIsVisible(false));
        history.push('/');
    };

    const onDiscard = () => {
        dispatch(setDeleteDialogIsVisible(false));
    };

    return (
        <>
            {!isListLoading && <RecipeContent />}
            {isListLoading && <CircularProgress />}

            <Suspense fallback={CircularProgress}>
                {isDeleteDialogVisible && (
                    <ConfirmationModal
                        title="Deleting a recipe"
                        content="Please confirm deleting this recipe"
                        onConfirm={onConfirm}
                        onDiscard={onDiscard}
                    />
                )}
            </Suspense>
        </>
    );
};

export default Recipes;
