import React from "react";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Navigator from "./src/navigation/Navigator";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
