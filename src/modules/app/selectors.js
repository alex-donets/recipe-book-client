import { createSelector } from "reselect";

export const getState = ({ app }) => app;

export const getErrorMessage = createSelector([getState], ({ errorMessage }) => errorMessage);
