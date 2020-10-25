import React, { useEffect } from 'react';
import { Grid, Message, Transition } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorMessage } from "../../../modules/app/selectors";
import { clearErrorMessage } from "../../../modules/app/actions";

const DisplayError = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(getErrorMessage);

    const onClose = () => dispatch(clearErrorMessage());

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 5000)
        }
    }, [errorMessage]);

    return (
        <Grid style={{
            position: 'fixed',
            zIndex: 200,
            top: '65px',
            right: '30px',
        }}>
            <Grid.Column floated="right">
                <Message
                    onDismiss={onClose}
                    negative
                    header='Error'
                    content={errorMessage}
                />
            </Grid.Column>
        </Grid>
    );
};

export default DisplayError;
