import { Button, IconButton, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '10% 35% 15% 10% 10% 10% 10%',
        gridAutoRows: '100px',
        borderBottom: '1px solid #c4c4c4',
        padding: '1rem 0',
        '& > *': {
            display: 'flex',
            alignItems: 'center',
        },
        [theme.breakpoints.up('xs')]: {
            gridTemplateColumns: '40% 30% 30%',
            gridTemplateAreas: '"image title title" "image price delete" "quantity quantity total " ',
            gridGap: '0.5rem'
        },
    },
    index: {
        gridArea: 'index',
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
    },
    title: {
        gridArea: 'title'
    },
    image: {
        gridArea: 'image',
        '& img': {
            width: '100%'
        }
    },
    price: {
        gridArea: 'price',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    quantity: {
        gridArea: 'quantity'
    },
    delete: {
        gridArea: 'delete'
    },
    total: {
        gridArea: 'total',
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
