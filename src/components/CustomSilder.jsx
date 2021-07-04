// libs
import React from "react";
import OwlCarousel from "react-owl-carousel";
// components
import Product from "./Product/Product";

const CustomSilder = (props) => {
  const {
    title,
    subTitle,
    items,
    total,
    autoPlay,
    time,
    dots,
    margin,
    loop,
    nav,
    lazyLoad,
    slideBy,
  } = props;

  return (
    <div className="container">
      <h3 className="slider-title d-flex justify-content-center py-2">
        {title}
      </h3>
      <p className="slider-subtitle d-flex justify-content-center pb-2">
        {subTitle}
      </p>
      <OwlCarousel
        className="owl-theme"
        autoplay={autoPlay}
        autoplayTimeout={time}
        items={total}
        loop={loop}
        margin={margin}
        dots={dots}
        nav={nav}
        navClass={["prev-slide", "next-slide"]}
        lazyLoad={lazyLoad}
        slideBy={slideBy}
      >
        {items?.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </OwlCarousel>
    </div>
  );
};

export default CustomSilder;
