import { createSlice } from '@reduxjs/toolkit'
import { findIndex } from 'lodash-es'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: JSON.parse(localStorage.getItem('CART')) ? JSON.parse(localStorage.getItem('CART')) : []
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItem = action.payload
            const cartItemIndex = findIndex(state.list, cartItem)
            if (cartItemIndex === -1) {
                state.list.push({ ...cartItem, quantity: 1 })
            }
            else {
                state.list.forEach(x => {
                    if (x.id === cartItem.id) {
                        x.quantity++
                    }
                })
            }
            localStorage.setItem('CART', JSON.stringify(state.list))
        }
    }
})

const { reducer, actions } = cartSlice
export const { addToCart } = actions
export default reducer