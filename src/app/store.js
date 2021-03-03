import { configureStore } from '@reduxjs/toolkit'
import productReducer from './../features/Products/productSlice'
import userReducer from './../features/Auth/userSlice'

const rootReducer = {
    product: productReducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store