export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'user-auth-token';

const setAuthToken = (data: string) => localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, JSON.stringify(data));

const removeAuthToken = () => localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);

export { setAuthToken, removeAuthToken };
