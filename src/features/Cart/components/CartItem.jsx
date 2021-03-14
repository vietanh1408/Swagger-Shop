import { Button, IconButton, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '5% 30% 15% 10% 20% 10% 10%',
        gridAutoRows: '100px',
        borderBottom: '1px solid #c4c4c4',
        padding: '1rem 0',
        '& > *': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    index: {

    },
    title: {

    },
    image: {

        '& img': {
            height: '100%'
        }
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    quantity: {

    },
    delete: {

    },
    total: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }
}))

function CartItem(props) {

    const { cartItem, index } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <span className={classes.index}>{index + 1}</span>
            <p className={classes.title}>{cartItem.title}</p>
            <div className={classes.image}>
                <img src={cartItem.image} alt={cartItem.title} />
            </div>
            <p className={classes.price}>${cartItem.price}</p>
            <div className={classes.quantity}>
                <IconButton>
                    <RemoveIcon />
                </IconButton>
                <p>{cartItem.quantity}</p>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
            <Button className={classes.delete}>
                <DeleteIcon />
            </Button>
            <p className={classes.total}>
                ${cartItem.price * cartItem.quantity}
            </p>
        </div>
    )
}

export default CartItem
