import { createSlice } from '@reduxjs/toolkit'
import { getProducts, getProductsByCategory } from './../Products/pathAPI'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        toggleLoading: (state) => !state
    },
    extraReducers: {
        [getProducts.pending]: () => true,
        [getProducts.fulfilled]: () => false,
        [getProducts.rejected]: () => false,
        [getProductsByCategory.pending]: () => true,
        [getProductsByCategory.fulfilled]: () => false,
        [getProductsByCategory.rejected]: () => false,
    }
})

const { reducer, actions } = loadingSlice
export const { toggleLoading } = actions
export default reducer


