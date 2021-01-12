import React, { BaseSyntheticEvent, lazy, Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { isEmpty } from 'lodash';

import { Container, Header, Pagination, PaginationProps, Segment } from 'semantic-ui-react';
import {
    getActivePage,
    getIsDeleteDialogVisible,
    getRecipeList,
    getRecipeListLoading,
    getSelectedRecipeId,
} from '../../selectors';
import { Recipe } from '../../types';
import { getSelectedCategoryId } from '../../../categories/selectors';
import { deleteRecipe, fetchRecipes, setActivePage, setDeleteDialogIsVisible } from '../../actions';
import RecipeItem from '../RecipeItem/RecipeItem';
import { listPerPage } from '../../helpers';
import CircularProgress from '../../../../shared/components/CircularProgress/CircularProgress';
import RecipeItemLoaded from '../RecipeItem/RecipeItemLoaded';

const ConfirmationModal = lazy(() => import('../../../../shared/components/ConfirmationModal/ConfirmationModal'));

const RecipeHeading = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const recipeList = useSelector(getRecipeList);
    const activePage = useSelector(getActivePage);
    const selectedCategoryId = useSelector(getSelectedCategoryId);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const selectedRecipeId = useSelector(getSelectedRecipeId);

    const isRecipeListLoading = useSelector(getRecipeListLoading);

    const totalPages = recipeList ? Math.ceil(recipeList.length / 5) : 0;
    const canShowPagination = totalPages > 1 && !isRecipeListLoading;
    const paginationList = listPerPage(recipeList, activePage, 5);

    const recipeLoader = [1, 2, 3];

    useEffect(() => {
        dispatch(fetchRecipes(selectedCategoryId));
        ref.current && ref.current.scrollIntoView();

        return () => window.scrollTo(0, 0);
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
        <div ref={ref}>
            {selectedCategoryId && !isEmpty(recipeList) && (
                <Header as="h2" className="primary-text heading">
                    Collection
                </Header>
            )}

            {isRecipeListLoading && (
                <div className="category-content">
                    <Segment padded="very">
                        {recipeLoader.map((item, index) => {
                            const lastIndex = paginationList.length - 1;
                            const showDivider = index !== lastIndex;

                            return <RecipeItemLoaded key={item} showDivider={showDivider} />;
                        })}
                    </Segment>
                </div>
            )}

            {!isRecipeListLoading && isEmpty(recipeList) && (
                <div className="empty-holder">No recipes added in this category</div>
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
        </div>
    );
};

export default RecipeHeading;
