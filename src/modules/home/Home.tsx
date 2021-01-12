import React from 'react';
import { useSelector } from 'react-redux';
import CategoryHeading from '../categories/components/Heading/CategoryHeading';
import RecipeHeading from '../recipes/components/Heading/RecipeHeading';
import { getCategoryListLoading, getSelectedCategoryId } from '../categories/selectors';
import CategoryHeadingLoaded from '../categories/components/Heading/CategoryHeadingLoaded';
import MoveTopBtn from '../../shared/components/MoveTopBtn/MoveTopBtn';
import { getIsScrollBtnVisible } from '../app/selectors';

const Home = () => {
    const selectedCategoryId = useSelector(getSelectedCategoryId);
    const isCategoryListLoading = useSelector(getCategoryListLoading);
    const isScrollBtnVisible = useSelector(getIsScrollBtnVisible);

    return (
        <>
            {isCategoryListLoading && <CategoryHeadingLoaded />}

            {!isCategoryListLoading && <CategoryHeading />}

            {selectedCategoryId && <RecipeHeading />}

            {isScrollBtnVisible && <MoveTopBtn />}
        </>
    );
};

export default Home;
