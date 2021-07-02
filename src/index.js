// libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

// store
import store, { persistor } from "./app/store";

// components
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
