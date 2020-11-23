import React, { Suspense, lazy } from 'react';
import { useSelector } from "react-redux";
import CategoryHeading from "./components/Heading/CategoryHeading";
import {
    getCategoryListLoading,
    getIsContentVisible,
    getIsDeleteDialogVisible,
} from "./selectors";
import CategoryContent from "./components/Content/CategoryContent";
import CircularProgress from "../../shared/components/CircularProgress/CircularProgress";

const ConfirmationModal = lazy(() =>
    import("../../shared/components/ConfirmationModal/ConfirmationModal")
);

const Categories = () => {
    const isContentVisible = useSelector(getIsContentVisible);
    const isDeleteDialogVisible = useSelector(getIsDeleteDialogVisible);
    const isListLoading = useSelector(getCategoryListLoading);

    return (
        <>
            {!isListLoading && <CategoryHeading />}
            {isListLoading && <CircularProgress />}

            {isContentVisible &&
                <CategoryContent/>
            }

            <Suspense fallback={CircularProgress}>
                {isDeleteDialogVisible && (
                    <ConfirmationModal />
                )}
            </Suspense>
        </>
    );
};

export default Categories;
