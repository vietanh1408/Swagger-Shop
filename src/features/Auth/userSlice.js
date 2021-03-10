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
            localStorage.setItem('CURRENT_USER', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            localStorage.removeItem('CURRENT_USER')
            state.current = {}
        }
    },
    extraReducers: {
    }

})

const { reducer, actions } = userSlice
export const { login, logout } = actions
export default reducer