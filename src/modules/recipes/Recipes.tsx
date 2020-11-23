import React, {lazy, Suspense} from 'react';
import CircularProgress from "../../shared/components/CircularProgress/CircularProgress";
import {useSelector} from "react-redux";
import {getIsDeleteDialogVisible, getRecipeListLoading} from "../recipes/selectors";
import RecipeContent from "./components/Content/RecipeContent";

const ConfirmationModal = lazy(() =>
    import("../../shared/components/ConfirmationModal/ConfirmationModal")
);

const Recipes = () => {
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const isListLoading = useSelector(getRecipeListLoading);
    
    return (
        <>
            {!isListLoading && <RecipeContent />}
            {isListLoading && <CircularProgress />}

            <Suspense fallback={CircularProgress}>
                {isDeleteDialogVisible && (
                    <ConfirmationModal />
                )}
            </Suspense>
        </>
    );
};

export default Recipes;
