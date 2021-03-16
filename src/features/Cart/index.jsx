import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './components/CartItem'
import UserInfo from './components/UserInfo'

const useStyles = makeStyles(theme => ({
    totalPrice: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            margin: '1rem 0.5rem 1rem 2rem'
        },
        '& p': {
            fontSize: '1.5rem',
            fontWeight: 'bold'
        }
    },
    noCart: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem'
    },
    info: {
        border: '1px solid #363636'
    }
}))

function CartPage() {

    const cartList = useSelector(state => state.cart.list)
    const classes = useStyles()

    const totalPrice = cartList?.map(cartItem => {
        return cartItem.price * cartItem.quantity
    }).reduce((curr, total) => {
        return curr + total
    }, 0)

    const handleCheckOut = (values) => {
        console.log(values)
    }

    return (
        <div className="container mt-5">
            {cartList?.length === 0
                ? (
                    <>
                        <p className={classes.noCart}>There are no more items in your cart !</p>
                        <Link to="/products"><i className="fas fa-chevron-left"></i>Continue shopping</Link>
                    </>
                )
                : (
                    <div className="cart-list">
                        <h2>Shopping Cart</h2>
                        {cartList?.map((cartItem, index) => {
                            return (
                                <CartItem cartItem={cartItem} key={index} index={index} />
                            )
                        })}
                        <div className={classes.totalPrice}>

                            <p>Total Price</p>
                            <p>${Math.round(totalPrice * 100) / 100}</p>

                        </div>
                        <UserInfo onSubmit={handleCheckOut} />
                    </div>
                )
            }
        </div>
    )
}

export default CartPage
