import { MessageFormValues } from './types';
import { getAuthToken } from '../../utils/localStorage';

export const messageFormToQuery = ({ message }: MessageFormValues) => {
    const userInfo = getAuthToken();

    return {
        message,
        user: {
            id: userInfo.id,
            fullName: userInfo.fullName,
        },
    };
};
