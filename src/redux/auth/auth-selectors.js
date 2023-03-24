export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getIsError = state => state.auth.isError;

export const getErrorMessage = state => state.auth.errorMessage;
