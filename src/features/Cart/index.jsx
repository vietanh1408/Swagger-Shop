import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './components/CartItem'

function CartPage() {

    const cartList = useSelector(state => state.cart.list)

    return (
        <div className="container mt-5">
            {cartList.length === 0
                ? (
                    <div className="container">
                        <p>No Cart Item</p>
                    </div>
                )
                : (
                    <div className="cart-list">
                        {cartList?.map((cartItem, index) => {
                            return (
                                <CartItem cartItem={cartItem} key={index} index={index} />
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default CartPage
