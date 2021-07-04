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
import categoryReducer from "../reducer/category";

const rootReducer = combineReducers({
  authentication: authReducer,
  product: productReducer,
  category: categoryReducer,
  productDetail: productDetailReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication", "product", "category"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
