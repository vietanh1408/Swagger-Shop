import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { addToCart } from "../../Cart/cartSlice";
import Product from "../../../components/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 400,
    boxShadow: "none",
    /* [theme.breakpoints.down('xs')]: {
            display: 'none'
        } */
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
    backgroundSize: "50%",
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textAlign: "center",

    "& p": {
      fontWeight: "bold",
      fontSize: "1rem",
      color: "#000",
    },
  },
  action: {
    display: "flex",
    justifyContent: "space-between",

    "& p": {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },
}));

function ProductSlider() {
  const productList = useSelector((state) => state.product.list);
  const [productIndex, setProductIndex] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow arrow-next" onClick={onClick}>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow arrow-prev" onClick={onClick}>
        <i className="fas fa-chevron-circle-left"></i>
      </div>
    );
  };
  const settings = {
    autoplay: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidersToShow: 3,
    centerMode: true,
    centerPadding: "200px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setProductIndex(next),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {productList?.map((product, index) => (
          <div
            key={index}
            className={index === productIndex ? "slide activeSlide" : "slide"}
          >
            {/* <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title="Paella dish"
              />
              <CardContent className={classes.title}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </Typography>
              </CardContent>
              <CardActions className={classes.action}>
                <IconButton
                  aria-label="add to cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCartIcon />
                </IconButton>
                <Typography variant="body2">${product.price}</Typography>
              </CardActions>
            </Card> */}
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
