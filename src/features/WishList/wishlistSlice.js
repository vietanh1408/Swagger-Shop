import { createSlice } from '@reduxjs/toolkit'
import { findIndex } from 'lodash-es'

const data = JSON.parse(localStorage.getItem('WISHLIST'))

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: data ? data : [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('WISHLIST', JSON.stringify(state))
        },
        removeWishlist: (state, action) => {
            const id = action.payload
            const index = findIndex(id, data.map(product => product.id))
            console.log(index)

        }
    }
})


const { reducer, actions } = wishlistSlice
export const { addToWishlist, removeWishlist } = actions
export default reducer