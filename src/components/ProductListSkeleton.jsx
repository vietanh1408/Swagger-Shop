import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const ProductListSkeleton = ({ length }) => {
  return (
    <Box mt={4}>
      <Grid container>
        {Array.from(new Array(length)).map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={300} />
                <Skeleton width="60%" />
                <div className="d-flex justify-content-between align-items-center">
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton width="85%" height={50} />
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

ProductListSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductListSkeleton.defaultProps = {
  length: 16,
};

export default ProductListSkeleton;
