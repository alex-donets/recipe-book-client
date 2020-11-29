import React from 'react';
import { Button, Modal } from "semantic-ui-react";
import { ConfirmationTypes } from "./types";

const ConfirmationModal = ({ title, content, onConfirm, onDiscard }: ConfirmationTypes) => {
    return (
        <Modal
            open
            size="tiny"
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <p>
                    {content}
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
