import {
  Box,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Cart/cartSlice";
import { addToWishlist, removeWishlist } from "../../WishList/wishlistSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "400px",
    cursor: "pointer",
    position: "relative",
  },

  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "235px",
    "& img": {
      transition: "transform 0.5s",
    },

    "&:hover img": {
      transform: "scale(1.5)",
    },
  },

  btn: {
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.54)",
    "&:hover": {
      color: "#b79b6c",
    },
  },

  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    width: "100%",
    padding: "0 0.9rem",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
    "&:hover": {
      color: "#b79b6c",
    },
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    paddingLeft: "0.9rem",
  },
}));

function Product({ product, user }) {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const handleAddToWishList = () => {};

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Paper elevation={3}>
      <Box padding={1} className={classes.root} title={product.NSX}>
        <Box padding={4} className={classes.image}>
          <img src={product.poster[0].url} alt={product.NSX} width="80%" />
        </Box>

        <Typography variant="h6" className={classes.title}>
          {product.NSX}
        </Typography>
        <Typography variant="body2" className={classes.price}>
          ${product.price}
        </Typography>
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <IconButton
            className={classes.btn}
            onClick={() => handleAddToCart(product)}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Link to={`/products/${product._id}`}>
            <IconButton className={classes.btn}>
              <SearchIcon />
            </IconButton>
          </Link>
          <IconButton className={classes.btn} onClick={handleAddToWishList}>
            {like ? <FavoriteIcon /> : <FavoriteBorder />}
          </IconButton>
          <IconButton className={classes.btn}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}

export default Product;
