import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (payload) => {
        try {
            const { search, sort } = payload
            let response = await productApi.getAll();
            if (search) {
                response = response?.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
            }
            if (sort === 1) {
                response = response.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
            }
            else if (sort === 2) {
                response = response.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
            }
            else if (sort === 3) {
                response = response.sort((a, b) => {
                    return a.price - b.price
                })
            }
            else if (sort === 4) {
                response = response.sort((a, b) => {
                    return b.price - a.price
                })
            }
            return response
        } catch (error) {
            console.log('ERROR: ', error)
        }
    })

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