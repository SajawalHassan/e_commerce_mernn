import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  accessToken: "",
  error: "",
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.accessToken = payload;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.accessToken = "";
      state.error = payload;
    },
  },
});

const { actions, reducer } = loginSlice;

export const { loginFail, loginSuccess, setIsLoading } = actions;

export default reducer;
