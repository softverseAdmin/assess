import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    currentUser: null,
    error: false,
    loading: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
