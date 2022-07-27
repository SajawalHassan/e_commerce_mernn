import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";

const reducers = {
  register: registerReducer,
};

export const store = configureStore({
  reducer: reducers,
});
