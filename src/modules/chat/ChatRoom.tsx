import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Formik } from 'formik';
import { FormikProps } from 'formik/dist/types';

import { messageFormToQuery } from './helpers';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { socket } from '../../services/services';
import { ChatMessageTypes, MessageFormValues } from './types';
import { setErrorMessage } from '../app/actions';
import { trimFormValues } from '../../utils/helpers';
import ChatForm from './components/Form/ChatForm';
import { formInitialValues, formValidationSchema } from './components/Form/constants';
import ChatMessage from './components/Message/ChatMessage';

const ChatRoom = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);

    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket.on('get-messages', (data: ChatMessageTypes[]) => setMessageList(data));
        socket.emit('get-messages');

        socket.on('errors', (data: string) => dispatch(setErrorMessage(data)));
        socket.emit('errors');

        return () => {
            socket.off('get-messages');
            socket.off('errors');
        };
    }, []);

    const handleOnSubmit = (formData: MessageFormValues) => {
        const formDataPayload = trimFormValues(formData);
        const body = messageFormToQuery(formDataPayload);

        socket.emit('add-message', body);

        const { current } = formRef;
        current && current.resetForm();
    };

    const renderForm = (props: FormikProps<MessageFormValues>) => <ChatForm {...props} />;

    const handleOnLoad = () => {
        const element = document.getElementById('chat-holder');
        element.scrollTop = element.scrollHeight;
    };

    return (
        <div className="chat-container">
            <Header as="h2" className="primary-text">
                Chat room
            </Header>

            <Segment padded className="chat-segment">
                <Grid stackable padded>
                    <Grid.Row>
                        <Grid.Column>
                            <div id="chat-holder" className="chat-content" onLoad={handleOnLoad}>
                                {isEmpty(messageList) && (
                                    <div className="empty-holder">No messages available yet. Submit the first one.</div>
                                )}

                                {!isEmpty(messageList) &&
                                    messageList.map((props) => <ChatMessage key={props.id} {...props} />)}
                            </div>

                            <Formik
                                ref={formRef}
                                render={renderForm}
                                initialValues={formInitialValues}
                                onSubmit={handleOnSubmit}
                                validationSchema={formValidationSchema}
                                enableReinitialize
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default ChatRoom;
