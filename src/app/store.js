import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./../features/WishList/wishlistSlice";
import loadingReducer from "./../features/Loading/loadingSlice";
import cartReducer from "./../features/Cart/cartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "../reducer/product";
import authReducer from "./../reducer/authentication";
import searchReducer from "./../reducer/search";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
  wishlist: wishlistReducer,
  loading: loadingReducer,

  cart: cartReducer,
  authentication: authReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
