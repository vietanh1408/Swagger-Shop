// libs
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <figure>
        <span className="product-discount">{product.discount}</span>
        <div className="product-img">
          <img
            className="product-img-front"
            src={product.poster[0].url}
            alt={product.name}
          />
          <img
            className="product-img-back"
            src={product.poster[1].url}
            alt={product.name}
          />
        </div>
        <div className="product-actions">
          <span className="product-actions-icon">
            <ShoppingCartIcon />
          </span>
          <Link
            to={`/products/${product._id}`}
            className="product-actions-icon"
          >
            <VisibilityIcon />
          </Link>
          <span className="product-actions-icon">
            <FavoriteIcon />
          </span>
          <span className="product-actions-icon">
            <ShareIcon />
          </span>
        </div>
      </figure>
      <h4 className="product-title">{product.name}</h4>
      <div className="product-rate d-flex w-100 justify-content-center align-items-center">
        <Rating
          className="product-rate-icon"
          name="disabled"
          value={product.rating}
          disabled
        />
      </div>
      <span className="product-price">{`${product.price} VND`}</span>
    </div>
  );
}

export default Product;
