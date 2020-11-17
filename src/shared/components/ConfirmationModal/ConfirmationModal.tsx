import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCategory, setDeleteDialogIsVisible} from "../../../modules/categories/actions";
import { getSelectedCategoryId } from "../../../modules/categories/selectors";

const ConfirmationModal = () => {
    const dispatch = useDispatch();
    const selectedCategoryId = useSelector(getSelectedCategoryId);

    const onConfirm = () => {
        dispatch(deleteCategory(selectedCategoryId))
        dispatch(setDeleteDialogIsVisible(false));
    };

    const onDiscard = () => {
        dispatch(setDeleteDialogIsVisible(false));
    };

    return (
        <Modal
            open
            size="tiny"
        >
            <Modal.Header>Deleting a category</Modal.Header>
            <Modal.Content>
                <p>
                    Please confirm deleting this category
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={onDiscard}>
                    Cancel
                </Button>
                <Button
                    className="danger-button"
                    onClick={onConfirm}
                >
                    Delete
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ConfirmationModal;
