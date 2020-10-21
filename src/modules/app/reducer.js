import { createReducer } from "redux-create-reducer";

import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from "./constants";

export const initialState = {
  errorMessage: ''
};

export default createReducer(initialState, {

  [SET_ERROR_MESSAGE]: (state, { payload }) => ({
    ...state,
    errorMessage: payload
  }),

  [CLEAR_ERROR_MESSAGE]: (state) => ({
    ...state,
    errorMessage: ''
  }),
});
