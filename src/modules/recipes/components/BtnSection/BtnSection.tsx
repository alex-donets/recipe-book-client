import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddLoading, getDeleteLoading, getIsEditMode, getUpdateLoading } from '../../selectors';
import { setDeleteDialogIsVisible } from '../../actions';
import { RecipeFormProps } from '../../types';
import { getIngredientList } from '../../../ingredients/selectors';
import { isEmpty } from 'lodash';

const BtnSection = ({ formProps: { isValid } }: RecipeFormProps) => {
    const dispatch = useDispatch();
    const isEditMode = useSelector(getIsEditMode);
    const addLoading = useSelector(getAddLoading);
    const updateLoading = useSelector(getUpdateLoading);
    const deleteLoading = useSelector(getDeleteLoading);
    const ingredientList = useSelector(getIngredientList);
    const isDisabled = !isValid || isEmpty(ingredientList);

    const handleOnPopupDelete = () => {
        dispatch(setDeleteDialogIsVisible(true));
    };

    return (
        <div className="directions">
            <Button
                type="submit"
                className="primary-button"
                size="large"
                disabled={isDisabled}
                loading={isEditMode ? updateLoading : addLoading}
            >
                {isEditMode ? 'Update' : 'Add'}
            </Button>

            {isEditMode && (
                <Button
                    type="button"
                    size="large"
                    floated="right"
                    onClick={handleOnPopupDelete}
                    loading={deleteLoading}
                >
                    Delete
                </Button>
            )}
        </div>
    );
};

export default BtnSection;
