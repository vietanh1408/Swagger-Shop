import { Box, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { FavoriteBorder } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '400px',
        cursor: 'pointer',
        position: 'relative',

        '&:hover > & div': {
            backgroundColor: 'red'
        }

    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '235px',
        transition: 'transform 1s',
    },

    btn: {
        textAlign: 'left',
        color: 'rgba(0, 0, 0, 0.54)',
        '&:hover': {
            color: '#b79b6c'
        }
    },

    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        width: '100%',
        padding: '0 0.9rem',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '2',
        '&:hover': {
            color: '#b79b6c',
        }
    },
    price: {
        fontSize: '1rem',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        paddingLeft: '0.9rem'
    },
}))



function Product({ product }) {

    const classes = useStyles()

    return (
        <Paper elevation={3}>
            <Box padding={1} className={classes.root} title={product.title}>
                <Box padding={4} className={classes.image}>
                    <img
                        src={product.image}
                        alt={product.title}
                        width="50%"
                    />
                </Box>

                <Typography variant="h6" className={classes.title}>{product.title}</Typography>
                <Typography variant="body2" className={classes.price}>
                    ${product.price}
                </Typography>
                <Box component="div" display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <IconButton className={classes.btn}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <Link to={`/products/${product.id}`}>
                        <IconButton className={classes.btn}>
                            <SearchIcon />
                        </IconButton>
                    </Link>
                    <IconButton className={classes.btn}>
                        <FavoriteBorder />
                    </IconButton>
                    <IconButton className={classes.btn}>
                        <ShareIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}

export default Product
