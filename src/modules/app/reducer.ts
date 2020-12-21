import { createReducer } from 'redux-create-reducer';

import {
    SET_ERROR_MESSAGE,
    CLEAR_ERROR_MESSAGE,
    SET_INFO_MESSAGE,
    CLEAR_INFO_MESSAGE,
    SET_SUCCESS_MESSAGE,
    CLEAR_SUCCESS_MESSAGE,
} from './constants';
import { AppState } from './types';

export const initialState: AppState = {
    errorMessage: '',
    infoMessage: '',
    successMessage: '',
};

export default createReducer(initialState, {
    [SET_ERROR_MESSAGE]: (state, { payload }) => ({
        ...state,
        errorMessage: payload,
    }),

    [CLEAR_ERROR_MESSAGE]: (state) => ({
        ...state,
        errorMessage: '',
    }),

    [SET_INFO_MESSAGE]: (state, { payload }) => ({
        ...state,
        infoMessage: payload,
    }),

    [CLEAR_INFO_MESSAGE]: (state) => ({
        ...state,
        infoMessage: '',
    }),

    [SET_SUCCESS_MESSAGE]: (state, { payload }) => ({
        ...state,
        successMessage: payload,
    }),

    [CLEAR_SUCCESS_MESSAGE]: (state) => ({
        ...state,
        successMessage: '',
    }),
});
