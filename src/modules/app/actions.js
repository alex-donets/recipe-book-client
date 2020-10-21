import { CLEAR_ERROR_MESSAGE, SET_ERROR_MESSAGE } from "./constants";

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: message
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE
});
