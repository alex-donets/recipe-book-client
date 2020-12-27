import React from 'react';
import '../../styles.scss';
import { Button, Input } from 'semantic-ui-react';
import { FormikProps } from 'formik/dist/types';
import { MessageFormValues } from '../../types';

const ChatForm = (props: FormikProps<MessageFormValues>) => {
    const {
        values: { message },
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(e);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                id="chat-message-input"
                fluid
                name="message"
                onChange={handleChange}
                value={message}
                className="chat-input"
                label={<Button content="Post Message" type="submit" />}
                labelPosition="right"
                placeholder="Type your message here..."
                error={Boolean(touched.message && errors.message)}
            />
            {touched.message && errors.message && <div className="error-text">{errors.message}</div>}
        </form>
    );
};

export default ChatForm;
