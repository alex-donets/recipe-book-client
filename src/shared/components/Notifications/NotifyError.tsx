import React, { useEffect } from 'react';
import './styles.scss';

import { Grid, Message, Transition } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorMessage } from "../../../modules/app/selectors";
import { clearErrorMessage } from "../../../modules/app/actions";

const NotifyError = () => {
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
        <Grid className="notification-holder">
            <Grid.Column floated="right">
                <Transition
                    visible={Boolean(errorMessage)}
                    transitionOnMount
                    animation='fade up'
                    duration={400}
                    unmountOnHide
                >
                    <Message
                        onDismiss={onClose}
                        negative
                        header='Error'
                        content={errorMessage}
                    />
                </Transition>
            </Grid.Column>
        </Grid>
    );
};

export default NotifyError;
