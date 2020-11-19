import {UserInfo} from "../modules/auth/types";

export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'recipe-book:user-auth-token';

const getAuthToken = () => {
    try {
        const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)!);

        if (userInfo.token) {
            return userInfo;
        }

        return null;
    }
    catch (e) {
        return null;
    }
};

const setAuthToken = (data: UserInfo) => localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, JSON.stringify(data));

const removeAuthToken = () => localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);

export { setAuthToken, removeAuthToken, getAuthToken };
