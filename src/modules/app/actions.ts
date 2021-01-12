import {
    CLEAR_ERROR_MESSAGE,
    CLEAR_INFO_MESSAGE,
    CLEAR_SUCCESS_MESSAGE,
    SET_ERROR_MESSAGE,
    SET_INFO_MESSAGE,
    SET_SCROLL_HEIGHT,
    SET_SUCCESS_MESSAGE,
} from './constants';

export const setErrorMessage = (message: string) => ({
    type: SET_ERROR_MESSAGE,
    payload: message,
});

export const clearErrorMessage = () => ({
    type: CLEAR_ERROR_MESSAGE,
});

export const setSuccessMessage = (message: string) => ({
    type: SET_SUCCESS_MESSAGE,
    payload: message,
});

export const clearSuccessMessage = () => ({
    type: CLEAR_SUCCESS_MESSAGE,
});

export const setInfoMessage = (message: string) => ({
    type: SET_INFO_MESSAGE,
    payload: message,
});

export const clearInfoMessage = () => ({
    type: CLEAR_INFO_MESSAGE,
});

export const setScrollHeight = () => ({
    type: SET_SCROLL_HEIGHT,
});
