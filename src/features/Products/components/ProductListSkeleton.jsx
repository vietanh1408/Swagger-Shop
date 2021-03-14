import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'


const ProductListSkeleton = ({ length }) => {
    return (
        <Box mt={4}>
            <Grid container>
                {Array.from(new Array(length)).map((item, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
                            <Box padding={1}>
                                <Skeleton variant="rect" width="100%" height={118} />
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};


ProductListSkeleton.propTypes = {
    length: PropTypes.number,
};

ProductListSkeleton.defaultProps = {
    length: 16
}


export default ProductListSkeleton;
