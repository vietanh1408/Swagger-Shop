import { configureStore } from '@reduxjs/toolkit'
import productReducer from './../features/Products/productSlice'
import userReducer from './../features/Auth/userSlice'
import wishlistReducer from './../features/WishList/wishlistSlice'
import loadingReducer from './../features/Loading/loadingSlice'

const rootReducer = {
    product: productReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    loading: loadingReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store