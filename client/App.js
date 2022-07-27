import React from "react";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
