import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {}
    },
    reducers: {}

})

const { reducer } = userSlice
export default reducer