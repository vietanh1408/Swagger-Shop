import { makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f6f6f6",
  },

  heading: {
    color: "#888",
    marginBottom: "0 !important",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },

  sortBy: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      width: "30%",
    },
  },

  btnSort: {
    backgroundColor: "#fff",
    border: "1px solid #ebebeb",
    borderRadius: "10px",
    outline: "none",
    width: "100%",
    height: "30px",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  options: {
    position: "absolute",
    top: "110%",
    right: "0",
    backgroundColor: "#fff",
    border: "1px solid #ebebeb",
    borderRadius: "10px",
    width: "300px",
    cursor: "pointer",
    overflow: "hidden",
    zIndex: "10",
    padding: "0.2rem 0",
  },

  option: {
    textAlign: "right",
    padding: "0.2rem 1rem",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#b79b6c",
      color: "#fff",
    },
  },
}));
const TopFilter = (props) => {
  const { productsLength, handleSortBy } = props;

  const classes = useStyles();

  const [showOption, setShowOption] = useState(false);

  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  const handleSort = (value) => {
    handleSortBy(value);
  };

  return (
    <div className={classes.root}>
      <p className={classes.heading}>{`There Are ${
        productsLength ? productsLength : 0
      } Products`}</p>
      <div className={classes.sortBy}>
        <span style={{ color: "#888", marginRight: "2rem" }}>SortBy:</span>
        <button className={classes.btnSort} onClick={handleShowOption}>
          <span>relevance</span>
          <ArrowDropDownIcon />
        </button>
        {showOption ? (
          <ul className={classes.options}>
            <li className={classes.option} onClick={() => handleSort(0)}>
              Relevance
            </li>
            <li className={classes.option} onClick={() => handleSort(1)}>
              Name, A to Z
            </li>
            <li className={classes.option} onClick={() => handleSort(2)}>
              Name, Z to A
            </li>
            <li className={classes.option} onClick={() => handleSort(3)}>
              Price, low to high
            </li>
            <li className={classes.option} onClick={() => handleSort(4)}>
              Price, high to low
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

TopFilter.propTypes = {};

export default TopFilter;
