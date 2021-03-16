import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './components/CartItem'

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
    button: {
        backgroundColor: '#b79b6c',
        color: '#fff',
    },
    noCart: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem'
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
                        <div className="d-flex justify-content-end my-3">
                            <Button className={classes.button} size="large">
                                Check out
                            </Button>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default CartPage
