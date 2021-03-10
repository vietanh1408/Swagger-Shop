import { Box, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '400px',
        cursor: 'pointer'
    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '235px',
        transition: 'transform 1s',

        '&:hover': {
            transform: 'scale(1.5)'
        }
    },

    btn: {
        textAlign: 'left'
    },

    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        '&:hover': {
            color: '#b79b6c',
        }
    },
    price: {
        fontSize: '20px',
        fontWeight: 'bold'
    }

}))

function Product({ product }) {

    const classes = useStyles()

    return (
        <Paper elevation={3}>
            <Box padding={1} className={classes.root}>
                <Box padding={4} className={classes.image}>
                    <img src={product.image} alt={product.name}
                        width="50%"
                    />
                </Box>
                <Link to={`/products/${product.id}`}>
                    <Typography variant="h6" className={classes.title}>{product.title}</Typography>
                </Link>

                <Box component="div" display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <IconButton className={classes.btn}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <Typography variant="body2" className={classes.price}>${product.price}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default Product
