import React, {useEffect} from 'react';
import './styles.scss';

import { Grid, Message, Transition } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoMessage } from "../../../modules/app/selectors";
import { clearInfoMessage } from "../../../modules/app/actions";

const NotifyInfo = () => {
    const dispatch = useDispatch();
    const infoMessage = useSelector(getInfoMessage);

    const onClose = () => dispatch(clearInfoMessage());

    useEffect(() => {
        if (infoMessage) {
            setTimeout(() => {
                dispatch(clearInfoMessage());
            }, 5000)
        }
    }, [infoMessage]);

    return (
        <Grid className="notification-holder">
            <Grid.Column floated="right">
                <Transition
                    visible={Boolean(infoMessage)}
                    transitionOnMount
                    animation='fade up'
                    duration={400}
                    unmountOnHide
                >
                    <Message
                        onDismiss={onClose}
                        negative
                        header='Info'
                        content={infoMessage}
                    />
                </Transition>
            </Grid.Column>
        </Grid>
    );
};

export default NotifyInfo;
