import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../../../components/CustomPagination";
import LeftFilter from "../../../components/LeftFilter";
import { useGetAllProduct } from "../../../hooks/useGetAllProduct";
import TopFilter from "../../../components/TopFilter";
import ProductList from "./../components/ProductList";

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
  const dispatch = useDispatch();
  const [sort, setSort] = useState(0);

  const handleSortBy = (value) => {
    setSort(value);
  };

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
            <TopFilter productsLength={total} handleSortBy={handleSortBy} />
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
