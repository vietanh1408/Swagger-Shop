import { createSlice } from '@reduxjs/toolkit'
import { getCategories, getProducts, getProductsByCategory, getProductsSlider } from './pathAPI'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        categories: null,
        list: null,
        fetchDataLoading: 'idle',
        searchKey: '',
        sortOption: 0,
    },
    reducers: {
        searchProduct(state, action) {
            state.searchKey = action.payload
        }
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.fetchDataLoading = 'pending'
        }
        ,
        [getProducts.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.fetchDataLoading = 'idle'
        },
        [getProductsSlider.pending]: (state, action) => {
            state.fetchDataLoading = 'pending'
        }
        ,
        [getProductsSlider.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.fetchDataLoading = 'idle'
        },
        [getProductsByCategory.pending]: (state, action) => {
            state.fetchDataLoading = 'pending'
        }
        ,
        [getProductsByCategory.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.fetchDataLoading = 'idle'
        },
        [getCategories.pending]: (state, action) => {
            state.fetchDataLoading = 'pending'
        }
        ,
        [getCategories.fulfilled]: (state, { payload }) => {
            state.categories = payload
            state.fetchDataLoading = 'idle'
        }
    }

})


const { reducer, actions } = productSlice
export const { searchProduct } = actions
export default reducer