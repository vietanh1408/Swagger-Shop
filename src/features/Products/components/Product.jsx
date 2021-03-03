import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '350px'
    },

}))

function Product({ product }) {

    const classes = useStyles()

    return (
        <Box padding={1} className={classes.root}>
            <Box padding={4} className={classes.image}>
                <img src={product.image} alt={product.name}
                    width="50%"
                />
            </Box>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2">${product.price}</Typography>
        </Box>
    )
}

export default Product
