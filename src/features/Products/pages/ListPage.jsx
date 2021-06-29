// libs
import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

// components
import CustomPagination from "../../../components/CustomPagination";
import LeftFilter from "../../../components/LeftFilter";
import TopFilter from "../../../components/TopFilter";
import ProductList from "./../components/ProductList";

// custom hooks
import { useGetAllProduct } from "../../../hooks/useGetAllProduct";

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

const ListPage = () => {
  const classes = useStyles();

  const [products, total, isLoading, totalPage] = useGetAllProduct();

  return (
    <Box>
      {/* banner */}
      <Box>
        <img
          src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/themes/theme_ecolife_decoration3/assets/img/bg_breadcrumb.jpg"
          alt="banner"
          width="100%"
        />
      </Box>
      <div className="container pt-5">
        <Grid container spacing={3}>
          <Grid item className={classes.filter}>
            <LeftFilter />
          </Grid>
          <Grid item className={classes.productList}>
            <TopFilter productsLength={total} />
            <ProductList data={products} loading={isLoading} />
          </Grid>
        </Grid>
        <CustomPagination totalPage={totalPage} />
      </div>
    </Box>
  );
};

ListPage.propTypes = {};

export default ListPage;
