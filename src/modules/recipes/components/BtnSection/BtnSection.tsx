import React from 'react';
import { Button } from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
import { getAddLoading, getDeleteLoading, getIsEditMode, getUpdateLoading } from "../../selectors";
import { setDeleteDialogIsVisible } from "../../actions";
import { RecipeFormProps } from "../../types";

const BtnSection = ({ formProps: { isValid } }: RecipeFormProps) => {
    const dispatch = useDispatch();
    const isEditMode = useSelector(getIsEditMode);
    const addLoading = useSelector(getAddLoading);
    const updateLoading = useSelector(getUpdateLoading);
    const deleteLoading = useSelector(getDeleteLoading);

    const handleOnPopupDelete = () => {
        dispatch(setDeleteDialogIsVisible(true));
    };

    return (
        <div className="directions">
            <Button
                type="submit"
                className="primary-button"
                size="large"
                disabled={!isValid}
                loading={isEditMode ? updateLoading : addLoading}
            >
                {isEditMode ? 'Update' : 'Add'}
            </Button>

            {isEditMode &&
                <Button
                    type="button"
                    size="large"
                    floated='right'
                    onClick={handleOnPopupDelete}
                    loading={deleteLoading}
                >
                    Delete
                </Button>
            }
        </div>
    );
};

export default BtnSection;
