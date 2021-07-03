import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
// components
import ProductList from "./ProductList";
import CustomPagination from "../CustomPagination";
import LeftFilter from "../LeftFilter";
import TopFilter from "../TopFilter";

const useStyles = makeStyles((theme) => ({
  root: {},

  filter: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "350px",
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      width: "350px",
      display: "block",
    },
  },

  productList: {
    flex: "1 1 0",
  },

  productEmpty: {
    marginTop: "2rem",
    "& p": {
      fontWeight: "bold",
    },
  },
}));

const ProductPageLayout = ({ products, total, isLoading, totalPage }) => {
  const classes = useStyles();
  return (
    <div className="container pt-5">
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          xl={3}
          className={classes.filter}
        >
          <LeftFilter />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={9}
          xl={9}
          className={classes.productList}
        >
          <TopFilter productsLength={total} />
          <ProductList data={products} loading={isLoading} />
          <CustomPagination totalPage={totalPage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPageLayout;
