export interface ChatMessageTypes {
    _id: string;
    message: string;
    user: MessageUser;
    timeStamp: number;
}

export interface MessageFormValues {
    message: string;
}

export interface MessageProps {
    id: string;
    user: MessageUser;
    message: string;
    className: string;
    timestamp: string;
}

export interface MessageUser {
    id: string;
    fullName: string;
}
