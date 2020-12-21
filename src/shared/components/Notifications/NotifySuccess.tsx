import React, { useEffect } from 'react';
import './styles.scss';

import { Grid, Message, Transition } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuccessMessage } from '../../../modules/app/selectors';
import { clearSuccessMessage } from '../../../modules/app/actions';

const NotifySuccess = () => {
    const dispatch = useDispatch();
    const successMessage = useSelector(getSuccessMessage);

    const onClose = () => dispatch(clearSuccessMessage());

    useEffect(() => {
        if (successMessage) {
            setTimeout(() => {
                dispatch(clearSuccessMessage());
            }, 5000);
        }
    }, [successMessage]);

    return (
        <Grid className="notification-holder">
            <Grid.Column floated="right">
                <Transition
                    visible={Boolean(successMessage)}
                    transitionOnMount
                    animation="fade up"
                    duration={400}
                    unmountOnHide
                >
                    <Message onDismiss={onClose} positive header="Success" content={successMessage} />
                </Transition>
            </Grid.Column>
        </Grid>
    );
};

export default NotifySuccess;
