import React, { BaseSyntheticEvent, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { isEmpty } from 'lodash';

import { Container, Header, Loader, Pagination, PaginationProps, Segment } from 'semantic-ui-react';
import {
    getActivePage,
    getIsDeleteDialogVisible,
    getRecipeList,
    getRecipeListLoading,
    getSelectedRecipeId,
} from '../../../recipes/selectors';
import { Recipe } from '../../../recipes/types';
import { getSelectedCategoryId } from '../../../categories/selectors';
import { deleteRecipe, fetchRecipes, setActivePage, setDeleteDialogIsVisible } from '../../../recipes/actions';
import RecipeItem from '../RecipeItem/RecipeItem';
import { listPerPage } from '../../helpers';
import CircularProgress from '../../../../shared/components/CircularProgress/CircularProgress';

const ConfirmationModal = lazy(() => import('../../../../shared/components/ConfirmationModal/ConfirmationModal'));

const RecipeHeading = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(getRecipeList);
    const activePage = useSelector(getActivePage);
    const selectedCategoryId = useSelector(getSelectedCategoryId);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const selectedRecipeId = useSelector(getSelectedRecipeId);

    const isRecipeListLoading = useSelector(getRecipeListLoading);

    const totalPages = recipeList ? Math.ceil(recipeList.length / 5) : 0;
    const canShowPagination = totalPages > 1 && !isRecipeListLoading;
    const paginationList = listPerPage(recipeList, activePage, 5);

    useEffect(() => {
        dispatch(fetchRecipes(selectedCategoryId));
    }, [selectedCategoryId]);

    const handlePageChange = (e: BaseSyntheticEvent, { activePage }: PaginationProps) => {
        dispatch(setActivePage(activePage));
    };

    const onConfirm = () => {
        dispatch(deleteRecipe(selectedRecipeId));
        dispatch(setDeleteDialogIsVisible(false));
    };

    const onDiscard = () => {
        dispatch(setDeleteDialogIsVisible(false));
    };

    return (
        <>
            {isRecipeListLoading && <Loader size="large">Loading</Loader>}

            {!isRecipeListLoading && isEmpty(recipeList) && (
                <div className="empty-holder">No recipes added in this category</div>
            )}

            {!isRecipeListLoading && !isEmpty(recipeList) && (
                <Header as="h2" className="primary-text heading">
                    Collection
                </Header>
            )}

            {canShowPagination && (
                <Container className="pagination-holder" textAlign="center">
                    <Pagination activePage={activePage} totalPages={totalPages} onPageChange={handlePageChange} />
                </Container>
            )}

            {!isRecipeListLoading && !isEmpty(paginationList) && (
                <div className="category-content">
                    <Segment padded="very">
                        {paginationList.map((item: Recipe, index) => {
                            const lastIndex = paginationList.length - 1;
                            const showDivider = index !== lastIndex;

                            return <RecipeItem key={item._id} item={item} showDivider={showDivider} />;
                        })}
                    </Segment>
                </div>
            )}

            {canShowPagination && (
                <Container className="pagination-holder" textAlign="center">
                    <Pagination activePage={activePage} totalPages={totalPages} onPageChange={handlePageChange} />
                </Container>
            )}

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

export default RecipeHeading;
