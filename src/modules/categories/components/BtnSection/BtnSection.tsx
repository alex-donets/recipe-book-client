import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddLoading, getDeleteLoading, getIsEditMode, getUpdateLoading } from '../../selectors';
import { setDeleteDialogIsVisible } from '../../actions';
import { CategoryFormProps } from '../../types';

const BtnSection = ({ formProps: { isValid } }: CategoryFormProps) => {
    const dispatch = useDispatch();
    const isEditMode = useSelector(getIsEditMode);
    const addLoading = useSelector(getAddLoading);
    const updateLoading = useSelector(getUpdateLoading);
    const deleteLoading = useSelector(getDeleteLoading);

    const handleOnPopupDelete = () => {
        dispatch(setDeleteDialogIsVisible(true));
    };

    return (
        <div>
            <Button
                type="submit"
                className="primary-button"
                size="large"
                disabled={!isValid}
                loading={isEditMode ? updateLoading : addLoading}
                data-cy="category-action-btn"
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
                    data-cy="category-delete-btn"
                >
                    Delete
                </Button>
            )}
        </div>
    );
};

export default BtnSection;
