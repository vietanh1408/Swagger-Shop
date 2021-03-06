import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem('CURRENT_USER')) || {},
        settings: {}
    },
    reducers: {
        login: (state, action) => {
            console.log('payload', action.payload)
        }
    },
    extraReducers: {
    }

})

const { reducer, actions } = userSlice
export const { login } = actions
export default reducer