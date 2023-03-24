import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.patload.token;
      state.isLoggedIn = true;
    },
    [registration.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'This email is already used';
    },
    [login.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'Wrong email or password';
    },
    [logout.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'Something went wrong';
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      // state.isError = true;
      // state.errorMessage = "Can't refresh user, sing in, please";
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
