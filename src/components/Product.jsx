// libs
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from "@material-ui/lab/Rating";
import React from "react";

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
          <p className="product-actions-icon">
            <ShoppingCartIcon />
          </p>
          <p className="product-actions-icon">
            <SearchIcon />
          </p>
          <p className="product-actions-icon">
            <FavoriteIcon />
          </p>
          <p className="product-actions-icon">
            <ShareIcon />
          </p>
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
