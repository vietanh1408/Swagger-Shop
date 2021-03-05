import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productApi from '../../api/productApi'


export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const response = await productApi.getAll()
        return response
    } catch (error) {
        console.log('ERROR: ', error)
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
        status: null,
        searchKey: ''
    },
    reducers: {
        searchProduct(state, action) {
            state.searchKey = action.payload
        }
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = 'success'
        }
    }

})


const { reducer, actions } = productSlice
export const { searchProduct } = actions
export default reducer