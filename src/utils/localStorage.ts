export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'recipe-book:user-auth-token';

const getAuthToken = () => {
    try {
        const authToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)!);

        if (authToken.token) {
            return authToken;
        }

        return null;
    }
    catch (e) {
        return null;
    }
};

const setAuthToken = (data: string) => localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, JSON.stringify(data));

const removeAuthToken = () => localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);

export { setAuthToken, removeAuthToken, getAuthToken };
