import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const ProductDetailSkeleton = () => {
  return (
    <div className="container">
      <Box mt={4}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box padding={1}>
              <Skeleton
                variant="rect"
                width="100%"
                height={400}
                animation="wave"
              />
              <div className="d-flex justify-content-around align-items-center">
                <Skeleton width="100%" height={120} className="mx-2" />
                <Skeleton width="100%" height={120} className="mx-2" />
                <Skeleton width="100%" height={120} className="mx-2" />
                <Skeleton width="100%" height={120} className="mx-2" />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box padding={1}>
              <Skeleton
                variant="rect"
                width="100%"
                height={200}
                animation="wave"
              />
              <Skeleton width="60%" />
              <div className="d-flex justify-content-between align-items-center">
                <Skeleton
                  variant="circle"
                  width={40}
                  height={40}
                  animation="wave"
                />
                <Skeleton width="95%" height={50} animation="wave" />
              </div>
              <Skeleton
                variant="rect"
                width="100%"
                height={225}
                animation="wave"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductDetailSkeleton;
