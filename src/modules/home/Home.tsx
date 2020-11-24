import React from 'react';
import { useSelector} from "react-redux";
import CategoryHeading from "../categories/components/Heading/CategoryHeading";
import RecipeHeading from "../recipes/components/Heading/RecipeHeading";
import {getRecipeListLoading, getRecipeList} from "../recipes/selectors";
import {getCategoryListLoading} from "../categories/selectors";
import CircularProgress from "../../shared/components/CircularProgress/CircularProgress";

const Home = () => {
    const selectedCategory = useSelector(getRecipeList);
    const isRecipeListLoading = useSelector(getRecipeListLoading);
    const isCategoryListLoading = useSelector(getCategoryListLoading);

    return (
        <>
            {isCategoryListLoading && (
                <CircularProgress />
            )}
            {!isCategoryListLoading && (
                <CategoryHeading/>
            )}

            {selectedCategory && (
                <RecipeHeading />
            )}
        </>
    );
};

export default Home;
