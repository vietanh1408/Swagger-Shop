import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Product from './Product';


const ProductList = ({ data }) => {

    return (
        <Box mt={4}>
            <Grid container spacing={2}>
                {data.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                            <Product product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};


ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: []
}


export default ProductList;
