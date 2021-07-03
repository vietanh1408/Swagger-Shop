// libs
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// reducers
import productReducer from "../reducer/product";
import authReducer from "./../reducer/authentication";
import searchReducer from "./../reducer/search";
import productDetailReducer from "../reducer/productDetail";

const rootReducer = combineReducers({
  product: productReducer,
  authentication: authReducer,
  search: searchReducer,
  productDetail: productDetailReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication", "product"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
