import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./../features/WishList/wishlistSlice";
import loadingReducer from "./../features/Loading/loadingSlice";
import cartReducer from "./../features/Cart/cartSlice";

import productReducer from "../reducer/product";
import authReducer from "./../reducer/authentication";

const rootReducer = {
  product: productReducer,
  wishlist: wishlistReducer,
  loading: loadingReducer,
  cart: cartReducer,
  authentication: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
