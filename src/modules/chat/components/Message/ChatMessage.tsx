import React from 'react';
import { Divider, Message } from 'semantic-ui-react';
import { MessageProps } from '../../types';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../auth/selectors';
import CommentIcon from '../../../../assets/comment.svg';

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
                <img src={CommentIcon} className="icon-holder" alt="comment icon"/>
                <span className="author-name">{user.fullName || 'Guest'}</span>
                <span className="time">{time}</span>
                <Divider className="divider-medium"/>

                {message}
            </Message>
        </div>
    );
};

export default ChatMessage;
