import { createSlice } from '@reduxjs/toolkit'
import { getProducts, getSortProduct } from './../Products/pathAPI'


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
        [getSortProduct.pending]: () => true,
        [getSortProduct.fulfilled]: () => false,
        [getSortProduct.rejected]: () => false
    }
})

const { reducer, actions } = loadingSlice
export const { toggleLoading } = actions
export default reducer


