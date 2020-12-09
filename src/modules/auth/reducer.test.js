import authReducer, {initialState} from "./reducer";
import {
    clear,
    login,
    loginError,
    loginSuccess,
    logout,
    logoutSuccess,
    register,
    registerSuccess,
    resetPassword,
    resetPasswordSuccess,
    setPassword,
    setPasswordSuccess,
    setUserInfo
} from "./actions";

describe('Testing auth reducer', () => {
    it('if register pending, isLoading should be truthy', () => {
        const userData = {
            fullName: 'John Doe',
            email: 'test@test.com',
            agreeTaC: true,
            password: '123456789',
        };

        const action = register(userData);

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeTruthy();
    });

    it('if register success, isLoading should be falsy', () => {
        const action = registerSuccess();

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeFalsy();
    });

    it('if login pending, isLoading should be truthy', () => {
        const userData = {
            email: 'test@test.com',
            password: '123456789',
        };

        const action = login(userData);

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeTruthy();
    });

    it('login error', () => {
        const errorMessage = 'Test error message';

        const error = {
            response: {
                data: {
                    msg: errorMessage
                }
            },
        };

        const action = loginError(error);

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.errors).toBe(error);
    });

    it('if login success, user info should be in state', () => {
        const userData = {
            id: 'qwerty12345',
            fullName: 'John Doe',
            email: 'test@test.com',
            role: 'user',
            token: 'abcde123456789',
        };

        const action = loginSuccess(userData);

        const state = initialState;

        const newState = authReducer(state, action);

        const expectState = {
            errors: null,
            userId: userData.id,
            token: userData.token,
            isLoading: false,
            isLoggedIn: true,
            email: userData.email,
            fullName: userData.fullName,
            role: userData.role
        };

        expect(newState).toStrictEqual(expectState);
    });

    it('if logout pending, isLoading should be truthy', () => {
        const action = logout();

        const state = {
            errors: null,
            userId: 'qwerty12345',
            token: 'abcde123456789',
            isLoading: false,
            isLoggedIn: true,
            email: 'test@test.com',
            fullName: 'John Doe',
            role: 'user'
        };

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeTruthy();
    });

    it('if logout success, user data should be empty', () => {
        const action = logoutSuccess();

        const state = {
            errors: null,
            userId: 'qwerty12345',
            token: 'abcde123456789',
            isLoading: false,
            isLoggedIn: true,
            email: 'test@test.com',
            fullName: 'John Doe',
            role: 'user'
        };

        const newState = authReducer(state, action);

        expect(newState).toStrictEqual(initialState);
    });

    it('user data should be set to state', () => {
        const userData = {
            fullName: 'John Doe',
            email: 'test@test.com',
            token: 'abcde123456789',
            id: '123456789',
            role: 'user'
        };

        const action = setUserInfo(userData);

        const state = initialState;

        const newState = authReducer(state, action);

        const expectState = {
            errors: null,
            userId: userData.id,
            token: userData.token,
            isLoading: false,
            isLoggedIn: true,
            email: userData.email,
            fullName: userData.fullName,
            role: userData.role,
        };

        expect(newState).toStrictEqual(expectState)
    });

    it('if reset password is pending, isLoading should be truthy', () => {
        const data = {
            email: 'test@test.com',
        };

        const action = resetPassword(data);

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeTruthy();
    });

    it('if reset password success, isLoading should be falsy', () => {
        const data = {
            email: 'test@test.com',
        };

        const action = resetPasswordSuccess();

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBeFalsy();
    });

    it('if set password is pending, isLoading should be truthy', () => {
        const data = {
            password: 'test@test.com',
            token: '1234567890',
            key: '333222111',
        };

        const action = setPassword(data);

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBe(true);
    });

    it('if set password success, isLoading should be falsy', () => {
        const data = {
            email: 'test@test.com',
        };

        const action = setPasswordSuccess();

        const state = initialState;

        const newState = authReducer(state, action);

        expect(newState.isLoading).toBe(false);
    });

    it('clear state in auth reducer', () => {
        const action = clear();

        const state = {
            userId: 'qwerty12345',
            token: 'abcde123456789',
            isLoading: true,
            isLoggedIn: true,
            email: 'test@test.com',
            fullName: 'John Doe',
            role: 'user',
            errors: {
                response: {
                    data: {
                        msg: 'Error message',
                    }
                },
            },
        };

        const newState = authReducer(state, action);

        expect(newState).toStrictEqual(initialState);
    });
})
