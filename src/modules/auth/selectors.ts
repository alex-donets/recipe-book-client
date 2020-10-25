import { createSelector } from "reselect";
import { USER_ROLES } from "./constants";

export const getState = ({ auth }: any) => auth;

export const getLoading = createSelector([getState], ({ isLoading }) => isLoading);

export const getErrors = createSelector([getState], ({ errors }) => errors);

export const getToken = createSelector([getState], ({ token }) => token);

export const getExpires = createSelector([getState], ({ expires }) => expires);

export const getIsLoggedIn = createSelector([getState], ({ isLoggedIn }) => isLoggedIn);

export const getUserRole = createSelector([getState], ({ role }) => role);

export const getIsAdmin = createSelector([getState], ({ role }) => role === USER_ROLES.ADMIN);

export const getUserEmail = createSelector([getState], ({ email }) => email);

export const getUserFullName = createSelector([getState], ({ fullName }) => fullName);
