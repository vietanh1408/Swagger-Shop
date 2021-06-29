// libs
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
import { Link } from "react-router-dom";

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
    overflow: "hidden",
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

  return (
    // <Paper elevation={3}>
    //   <Box padding={1} className={classes.root} title={product.name}>
    //     <Box padding={4} className={classes.image}>
    //       <img src={product.poster[0].url} alt={product.name} width="80%" />
    //     </Box>

    //     <Typography
    //       variant="h6"
    //       className={classes.title}
    //       style={{ textTransform: "uppercase" }}
    //     >
    //       {product.name}
    //     </Typography>
    //     <Typography variant="body2" className={classes.price}>
    //       ${product.price}
    //     </Typography>
    //     <Box
    //       component="div"
    //       display="flex"
    //       justifyContent="space-between"
    //       width="100%"
    //       alignItems="center"
    //     >
    //       <IconButton
    //         className={classes.btn}
    //         onClick={() => console.log("add to cart...")}
    //       >
    //         <ShoppingCartIcon />
    //       </IconButton>
    //       <Link to={`/products/${product._id}`}>
    //         <IconButton className={classes.btn}>
    //           <SearchIcon />
    //         </IconButton>
    //       </Link>
    //       <IconButton
    //         className={classes.btn}
    //         onClick={() => console.log("add to wishlist")}
    //       >
    //         {like ? <FavoriteIcon /> : <FavoriteBorder />}
    //       </IconButton>
    //       <IconButton className={classes.btn}>
    //         <ShareIcon />
    //       </IconButton>
    //     </Box>
    //   </Box>
    // </Paper>
    <div className="product">
      <figure>
        <div className="front">
          <img
            className="product-img"
            src={product.poster[3].url}
            alt={product.name}
          />
        </div>
        <span>
          {Array.from(new Array(product.rating)).map((item, index) => {
            return (
              <i
                key={index}
                className="fas fa-star"
                style={{ color: "yellow", marginRight: "0.5rem" }}
              ></i>
            );
          })}
        </span>
      </figure>
      <h4 className="product-title">{product.name}</h4>
      <span className="product-price">{`${product.price} VND`}</span>
    </div>
  );
}

export default Product;
