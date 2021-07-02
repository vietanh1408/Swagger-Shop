import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  category: {
    width: "13rem",
    height: "13rem",
    margin: "1rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",

    fontSize: "1rem",
    fontFamily: '"Gill Sans", sans-serif',
    fontWeight: "bold",
    textTransform: "uppercase",

    cursor: "pointer",
    transition: "transform 1s",
    boxShadow: "1px 1px 10px #888",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function Categories() {
  const classes = useStyles();
  const categoryList = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <div className={classes.root}>
        {categoryList?.map((item, index) => {
          return (
            <div className={classes.category} key={index}>
              <Link to={`/products/category/${item}`}>{item}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
