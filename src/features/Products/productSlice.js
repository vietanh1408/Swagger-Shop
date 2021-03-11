import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from './pathAPI'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        fetchDataLoading: 'idle',
        list: null,
        status: null,
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
            state.status = 'pending'
        }
        ,
        [getProducts.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = 'success'
            state.fetchDataLoading = 'idle'
        }
    }

})


const { reducer, actions } = productSlice
export const { searchProduct } = actions
export default reducer