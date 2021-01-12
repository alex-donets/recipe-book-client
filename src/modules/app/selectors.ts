import { createSelector } from 'reselect';
import { RootReducerTypes } from '../../core/redux/types';

export const getState = ({ app }: RootReducerTypes) => app;

export const getErrorMessage = createSelector([getState], ({ errorMessage }) => errorMessage);

export const getSuccessMessage = createSelector([getState], ({ successMessage }) => successMessage);

export const getInfoMessage = createSelector([getState], ({ infoMessage }) => infoMessage);

export const getIsScrollBtnVisible = createSelector(
    [getState],
    ({ scrollHeight }) => window.innerHeight < scrollHeight,
);
