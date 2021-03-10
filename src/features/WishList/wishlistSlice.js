import { createSlice } from '@reduxjs/toolkit'


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: localStorage.getItem('WISHLIST') || [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('WISHLIST', JSON.stringify(state))
        }
    }
})


const { reducer, actions } = wishlistSlice
export const { addToWishlist } = actions
export default reducer