import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice";

const reducers = {
  register: registerReducer,
  login: loginReducer,
};

export const store = configureStore({
  reducer: reducers,
});
