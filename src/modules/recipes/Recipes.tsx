import React from 'react';
import CircularProgress from "../../shared/components/CircularProgress/CircularProgress";
import {useSelector} from "react-redux";
import {getRecipeListLoading} from "../recipes/selectors";
import RecipeContent from "./components/Content/RecipeContent";

const Recipes = () => {
    const isListLoading = useSelector(getRecipeListLoading);

    return (
        <>
            {!isListLoading && <RecipeContent />}
            {isListLoading && <CircularProgress />}
        </>
    );
};

export default Recipes;
