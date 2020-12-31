import React from 'react';
import { useSelector } from 'react-redux';
import CategoryHeading from '../categories/components/Heading/CategoryHeading';
import RecipeHeading from '../recipes/components/Heading/RecipeHeading';
import { getCategoryListLoading, getSelectedCategoryId } from '../categories/selectors';
import CategoryHeadingLoaded from "../categories/components/Heading/CategoryHeadingLoaded";

const Home = () => {
    const selectedCategoryId = useSelector(getSelectedCategoryId);
    const isCategoryListLoading = useSelector(getCategoryListLoading);

    return (
        <>
            {isCategoryListLoading && <CategoryHeadingLoaded />}

            {!isCategoryListLoading && <CategoryHeading />}

            {selectedCategoryId && <RecipeHeading />}
        </>
    );
};

export default Home;
