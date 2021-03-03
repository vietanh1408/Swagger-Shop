import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {}

})

const { reducer, actions } = productSlice
export default reducer