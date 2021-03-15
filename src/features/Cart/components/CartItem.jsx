import { Button, IconButton, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { decreaseQuantity, deleteCartItem, increaseQuantity } from './../cartSlice'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '5% 20% 35% 10% 10% 10% 10%',
        gridTemplateRows: '10rem',
        gridGap: '0.5rem',
        borderBottom: '1px solid #c4c4c4',
        '& > *': {
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 0'
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '40% 30% 30%',
            gridTemplateAreas: '"image title title" "image price delete" "quantity quantity total " ',
            gridGap: '0.5rem'
        },
    },
    index: {
        /* gridArea: 'index', */
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    title: {
        /* gridArea: 'title' */
        fontSize: '1.2rem'
    },
    image: {
        /* gridArea: 'image', */
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            height: '100%'
        }
    },
    price: {
        /*  gridArea: 'price', */
        fontSize: '1.5rem',
    },
    quantity: {
        /* gridArea: 'quantity' */
    },
    delete: {
        /* gridArea: 'delete' */
    },
    total: {
        /* gridArea: 'total', */
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    totalPrice: {
        display: 'flex'
    }
}))
function CartItem(props) {

    const { cartItem, index } = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id))
    }
    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id))
    }
    const handleDeleteCartItem = (id) => {
        dispatch(deleteCartItem(id))
    }

    return (
        <>
            <div className={classes.root}>
                <span className={classes.index}>{index + 1}</span>
                <div className={classes.image}>
                    <img src={cartItem.image} alt={cartItem.title} />
                </div>
                <p className={classes.title}>{cartItem.title}</p>
                <p className={classes.price}>${cartItem.price}</p>
                <div className={classes.quantity}>
                    <IconButton onClick={() => handleDecreaseQuantity(cartItem.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <p>{cartItem.quantity}</p>
                    <IconButton onClick={() => handleIncreaseQuantity(cartItem.id)}>
                        <AddIcon />
                    </IconButton>
                </div>
                <Button className={classes.delete} onClick={() => handleDeleteCartItem(cartItem.id)}>
                    <DeleteIcon />
                </Button>
                <p className={classes.total}>
                    ${Math.round((cartItem.price * cartItem.quantity) * 100) / 100}
                </p>
            </div>
        </>
    )
}

export default CartItem
