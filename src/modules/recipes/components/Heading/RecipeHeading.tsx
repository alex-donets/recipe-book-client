import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './styles.scss';
import { isEmpty } from 'lodash';

import {Container, Header, Pagination, PaginationProps, Segment} from "semantic-ui-react";
import {getActivePage, getRecipeList} from "../../../recipes/selectors";
import {Recipe} from "../../../recipes/types";
import {getSelectedCategoryId} from "../../../categories/selectors";
import {clear, fetchRecipes, setActivePage, setSelectedRecipe} from "../../../recipes/actions";
import RecipeItem from "../RecipeItem/RecipeItem";
import {listPerPage} from "../../helpers";

const RecipeHeading = () => {
    const dispatch = useDispatch();
    
    const recipeList = useSelector(getRecipeList);
    const activePage = useSelector(getActivePage);
    const selectedCategoryId = useSelector(getSelectedCategoryId);

    const totalPages = Math.ceil(recipeList.length / 5);
    const canShowPagination = totalPages > 1;
    const paginationList = listPerPage(recipeList, activePage, 5);

    useEffect(() => {
        if(selectedCategoryId) {
            dispatch(fetchRecipes(selectedCategoryId));
        }
    }, [selectedCategoryId]);

    const handleSelect = (id: string) => {
        dispatch(clear());
        //dispatch(setContentVisible(true));
        dispatch(setSelectedRecipe(id));
        //dispatch(setEditMode(true));
    };

    const handlePageChange = (e: any, { activePage }: PaginationProps) => {
        dispatch(setActivePage(activePage))
    };
    
    return (
        <>
            {!isEmpty(recipeList) && (
                <Header
                    as='h2'
                    className="primary-text heading"
                >
                    Collection
                </Header>
            )}

            {canShowPagination && (
                <Container
                    className="pagination-holder"
                    textAlign="center"
                >
                    <Pagination
                        activePage={activePage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </Container>
            )}

            {!isEmpty(paginationList) && (
                <div className="category-content">
                    <Segment padded="very">
                        {paginationList.map((item: Recipe, index) => {
                            const lastIndex = paginationList.length - 1;
                            const showDivider = index !== lastIndex;

                            return (
                                <RecipeItem
                                    key={item._id}
                                    item={item}
                                    showDivider={showDivider}
                                />
                            )})}
                    </Segment>
                </div>
            )}

            {canShowPagination && (
                <Container
                    className="pagination-holder"
                    textAlign="center"
                >
                    <Pagination
                        activePage={activePage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </Container>
            )}
        </>
    );
};

export default RecipeHeading;
