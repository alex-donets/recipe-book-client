import { createSelector } from 'reselect';
import { USER_ROLES } from './constants';
import { RootReducerTypes } from '../../core/redux/types';

export const getState = ({ auth }: RootReducerTypes) => auth;

export const getLoading = createSelector([getState], ({ isLoading }) => isLoading);

export const getErrors = createSelector([getState], ({ errors }) => errors);

export const getToken = createSelector([getState], ({ token }) => token);

export const getIsLoggedIn = createSelector([getState], ({ isLoggedIn }) => isLoggedIn);

export const getUserId = createSelector([getState], ({ userId }) => userId);

export const getIsAdmin = createSelector([getState], ({ role }) => role === USER_ROLES.ADMIN);

export const getUserEmail = createSelector([getState], ({ email }) => email);

export const getUserFullName = createSelector([getState], ({ fullName }) => fullName);
