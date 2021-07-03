// libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// components
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
// store
import store, { persistor } from "./app/store";
import CustomNotification from "./components/CustomNotification";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <CustomNotification />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
