import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const loginConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["accessToken"],
};

const reducers = combineReducers({
  register: registerReducer,
  login: persistReducer(loginConfig, loginReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
