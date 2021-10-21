// libs
import React from "react";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CreateIcon from "@material-ui/icons/Create";
// components
import ProductDetailSkeleton from "../../../components/Skeleton/ProductDetailSkeleton";
// custom hooks
import { useGetProductById } from "../../../hooks/useGetProduct";

const ProductInformation = () => {
  // custom hook
  const { product, isLoading, thumbnail, handleChangeImage } =
    useGetProductById();

  if (isLoading || !product) return <ProductDetailSkeleton />;

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-lg-4 col-md-4">
          <div className="product-thumbnail">
            <figure className="hover-zoom">
              <img
                src={thumbnail || product?.poster[0].url}
                alt="thumbnail-default"
              />
            </figure>
            <div className="product-thumbnail-list">
              <div className="row w-100">
                {product?.poster.map((image, index) => {
                  return (
                    <div className="col-3 p-lg-0" key={index}>
                      <img
                        onClick={handleChangeImage}
                        className={`product-thumbnail-list-item ${
                          image.url == thumbnail && "active-thumbnail"
                        }`}
                        src={image.url}
                        alt={image.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 col-md-8">
          <div className="product-infomation">
            <h2 className="product-name">{product.name}</h2>
            <span className="product-brand">Brand: {product.key}</span>
            <div className="product-rate d-flex w-100 justify-content-start align-items-center">
              <Rating
                className="product-rate-icon"
                name="disabled"
                value={product.rating}
                disabled
              />
              <span>
                <FavoriteBorderIcon />
                add to wishlist
              </span>
              <span>
                <CreateIcon />
                write a review
              </span>
            </div>
            <div className="product-detail-price d-flex justify-content-start align-items-center">
              <span>${product.price}</span>
              <span>{product.discount}</span>
            </div>
            <p className="product-detail-description">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
