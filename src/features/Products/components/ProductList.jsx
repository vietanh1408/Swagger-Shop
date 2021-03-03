import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Product from './Product';


const ProductList = ({ data }) => {

    return (
        <Box mt={4}>
            <Grid container>
                {data.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
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
