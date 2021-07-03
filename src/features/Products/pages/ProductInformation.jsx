// libs
import React from "react";
// components
import ProductDetailSkeleton from "../../../components/Skeleton/ProductDetailSkeleton";
// custom hooks
import { useGetProductById } from "../../../hooks/useGetProduct";

const ProductInformation = () => {
  // custom hook
  const { product, isLoading, thumbnail, handleChangeImage } =
    useGetProductById();

  if (isLoading) return <ProductDetailSkeleton />;

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <div className="product-thumbnail">
            <figure>
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
        <div className="col-8">
          <div className="product-infomation">456</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
