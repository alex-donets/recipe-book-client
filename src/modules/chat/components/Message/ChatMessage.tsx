import React from 'react';
import { Divider, Message } from 'semantic-ui-react';
import { MessageProps } from '../../types';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../auth/selectors';

const ChatMessage = (props: MessageProps) => {
    const { user, message, timestamp } = props;

    const loggedUserId = useSelector(getUserId);
    const className = loggedUserId === user.id ? 'author' : 'user';
    const date = new Date(timestamp);
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const time = date.toLocaleTimeString('en-GB', timeOptions);

    return (
        <div className={`chat-message ${className}`}>
            <Message floating compact floated="right" className="message-content">
                <Message.Header>{user.fullName || 'Guest'}</Message.Header>
                <Divider />

                {message}
                <div className="time">{time}</div>
            </Message>
        </div>
    );
};

export default ChatMessage;
