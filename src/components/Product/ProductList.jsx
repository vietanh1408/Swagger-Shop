// libs
import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

// components
import Product from "./Product";
import ProductListSkeleton from "./ProductListSkeleton";

const ProductList = ({ data, loading }) => {
  const { user } = useSelector((state) => state.authentication);

  if (loading) return <ProductListSkeleton length={12} />;

  return (
    <>
      <Box mt={4}>
        <Grid container spacing={2}>
          {data?.map((product) => {
            return (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={4}>
                <Product product={product} user={user} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {};

export default ProductList;
