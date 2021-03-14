import { createSlice } from '@reduxjs/toolkit'

const data = JSON.parse(localStorage.getItem('CURRENT_USER'))

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: data ? data : null,
        settings: {}
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('CURRENT_USER', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            localStorage.removeItem('CURRENT_USER')
            localStorage.removeItem('WISHLIST')
            state.current = {}
        }
    },
    extraReducers: {
    }

})

const { reducer, actions } = userSlice
export const { login, logout } = actions
export default reducer